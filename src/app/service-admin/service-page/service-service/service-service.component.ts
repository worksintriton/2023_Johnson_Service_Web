import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl,FormBuilder, FormGroup, Validators ,FormArray, FormControl,} from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-service-service',
  templateUrl: './service-service.component.html',
  styleUrls: ['./service-service.component.css']
})
export class ServiceServiceComponent implements OnInit {
  // rows=[{"ServiceId":"1","ServiceName":"Material","Description":"Material Request","Status":"active","CreationDate":"02-06-2022"},
  // {"ServiceId":"2","ServiceName":"YMaterial","Description":" Request","Status":"inactive","CreationDate":"03-06-2022"}]
  header=["Service Name","Service Code ","Service Type","Status","CreationDate"]
  searchQR:any;
  serviceForm:FormGroup;
  addmode:boolean=true;
  editmode:boolean=false;
  rows:any;
  stat:any;
  status=  [ 
    {"name": "Active",}, 
    {"name": "InActive",}, 
   ];
  constructor(private router:Router,private formBuilder: FormBuilder,private toastr:ToastrManager,private _api: ApiService) {
    this.serviceForm = this.formBuilder.group({
      _id:[''],
      service_name:['',Validators.required,],
      service_code:['',Validators.required,],
      service_status:['',Validators.required,],
      service_type:['',Validators.required,],
      date_of_create:new Date(),
    })
  }

  ngOnInit(): void {
    this._api.service_activity_list().subscribe((response: any) => {
      this.rows=response['Data']
    })
  }
  addservice(){
this.router.navigate(['/service-admin/service-add']);
  }
  showSuccess(msg) {
    this.toastr.successToastr(msg);
  }

  showError(msg) {
      this.toastr.errorToastr(msg);
  }

  showWarning(msg) {
      this.toastr.warningToastr(msg);
  }
  Insert_service(){
    this.serviceForm.patchValue({
    
      service_status:this.stat?.name,
    })
    console.log(this.serviceForm.value)
 
    if(this.serviceForm.valid){
      this._api.service_activity(this.serviceForm.value).subscribe((response: any) => {
        console.log(response)
       if(response['Status']=="Success")
       
{
  this.showSuccess(response['Message'])
  this.ngOnInit();
  this.serviceForm.reset();

} 
else{
  this.showWarning(response['Message'])
}       
      }
    );
    }
    else{
      this.showWarning("Please Enter the Service Details")
    }

  }
  Edit_service(){
    this.serviceForm.patchValue({
    
      service_status:this.stat?.name,
    })
    console.log(this.serviceForm.value)
 
    if(this.serviceForm.valid){
      this._api.service_activity_edit(this.serviceForm.value).subscribe((response: any) => {
        console.log(response)
       if(response['Status']=="Success")
       
{
  this.showSuccess(response['Message'])
  this.addmode=true;
  this.editmode=false;
  this.serviceForm.reset();
  this.ngOnInit();


} 
else{
  this.showWarning(response['Message'])
}       
      }
    );
    }
    else{
      this.showWarning("Please Enter the Service Details")
    }
  }
  cancel(){
this.addmode=true;
this.editmode=false;
this.serviceForm.reset();
  }
  Editcompanydetailsdata(item){
    this.addmode=false;
this.editmode=true;
this.serviceForm = this.formBuilder.group({
  _id:item._id,
  service_name:item.service_name,
  service_code:item.service_code,
  service_status:{"name":item.service_status},
  service_type:item.service_type,
  date_of_create:item.date_of_create,
})

  }
}
