import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl,FormBuilder, FormGroup, Validators ,FormArray, FormControl,} from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-service-add-agent',
  templateUrl: './service-add-agent.component.html',
  styleUrls: ['./service-add-agent.component.css']
})
export class ServiceAddAgentComponent implements OnInit {
employeeForm:FormGroup;
filteredCountries: any[];
mobile_os:any;
stat:any;
autoset:any='';
addmode:boolean=true;
editmode:boolean=false;
datem:any;
// countries= [ 
//   {"name": "Afghanistan", "code": "AF"}, 
//   {"name": "Åland Islands", "code": "AX"}, 
//   {"name": "Albania", "code": "AL"}, 
//   {"name": "Algeria", "code": "DZ"}, 
//   {"name": "American Samoa", "code": "AS"}, 
//   {"name": "Andorra", "code": "AD"},];
branchList:any;
countries: any[]= [];
submitted :boolean=false;
  mobile_operating=  [ 
    {"name": "5",}, 
    {"name": "6",}, 
    {"name": "7",}, 
    {"name": "8",}, 
    {"name": "9",}, 
    {"name": "10",}, 
    {"name": "11",}, 
    {"name": "12",}, 
    {"name": "13",}, 
    {"name": "14",}, 
    {"name": "15",}, 
    {"name": "16",}, 
    {"name": "17",}, 
    {"name": "19",},
    {"name": "20",},  
    {"name": "20 Above",}, 
    ];





    status=  [ 
      {"name": "Active",}, 
      {"name": "InActive",}, 
      {"name": "Delete", }, 
      {"name": "Suspend",}, ];

      emptype =  [ 
        {"name": "Engineer"}, 
        {"name": "Mechanic"}, 
       ];

      empname:boolean=false;
      loc:boolean=false;
      search_word = '';
      Admin_check:any;
      editable: boolean = true; 
      emp_type_value = {"name": "Mechanic"};
     
      active_value =  {"name": "Active",};
     
  constructor(private router:Router, private formBuilder: FormBuilder,private toastr:ToastrManager,private _api: ApiService,) { 
    this.employeeForm = this.formBuilder.group({
        emp_type:[''],
        _id:[''],
        user_name:['',Validators.required],
        user_per_mob:['',],
        user_mobile_no:['',Validators.required],
        user_email:['info@johnsonliftsltd.com',[Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        user_introduced_by:['',],
        user_id:['',Validators.required],
        // custom_field1:[''],
        // custom_field2:[''],

       mobile_issue_date:[new Date()],
       user_location:['',Validators.required],
       user_mob_model:['0',Validators.required],
       user_mob_os:['',Validators.required],
       user_mob_make:['TAB',Validators.required],
       device_no:['',Validators.required], 
       organisation_name:['Johnson Lifts Private Limited',Validators.required],
       Documents:[''],
        status:['',Validators.required],
        user_password:['',Validators.required]    
      })
 
       
  }

  ngOnInit(): void {



    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );

    this._api.getBranchList().subscribe((response: any) => {
      this.branchList=response['Data'];
      this.branchList.forEach((key, value) => {
        // 👇️ name Tom, country Chile
        this.countries.push(key.branch_name)
        
      });
      console.log(this.countries);
    })
    this.emp_type_value = {"name": "Mechanic"};
    this.mobile_os = {"name": "Android Jelly Bean",};
    this.active_value =  {"name": "Active",};
    var editEmp=JSON.parse(sessionStorage.getItem('editemployee')|| '{}');
    if(editEmp==true){
      this.addmode=false;
      this.editmode=true;
      var edit=JSON.parse(sessionStorage.getItem('employeeDetail')|| '{}');
      this.datem=edit.mobile_issue_date;
      this.autoset=edit.user_name;
      var date1=edit.mobile_issue_date;
      this.employeeForm.patchValue({
        _id:edit._id,
        user_name:edit.user_name,
        user_per_mob:edit.user_per_mob,
        user_mobile_no:edit.user_mobile_no,
        user_email:edit.user_email,
        user_introduced_by:edit.user_introduced_by,
        user_location:edit.user_location,
        // custom_field1:[''],
        // custom_field2:[''],
       mobile_issue_date:new Date (date1),
       user_id:edit.user_id,
      
       user_mob_model:edit.user_mob_model,
       user_mob_os:{"name":edit.user_mob_os},
       user_mob_make:edit.user_mob_make,
       device_no:edit.device_no, 
       organisation_name:edit.organisation_name,
       Documents:'',
        status:{"name":edit.status},
        user_password:edit.user_password   })
        this.mobile_os={"name":edit.user_mob_os};
    this.stat={"name":edit.status}
    this.empname=true;
this.loc=true;
    }
    
   
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }
  Insert_employee(){
    console.log(this.employeeForm.value);
    var enterdata = this.employeeForm.value;
    var emptype = enterdata?.emp_type.name

    this.employeeForm.patchValue({
      user_mob_os:this.mobile_os.name,
      status:this.active_value.name,
      emp_type:this.emp_type_value.name,
    })
    console.log(this.employeeForm.value)
    this.submitted=true;
    if(this.employeeForm.valid){
      console.log(this.employeeForm.value);
      this._api.service_employee(this.employeeForm.value).subscribe((response: any) => {
        console.log(response)
       if(response['Status']=="Success")
{

  // this.employeeForm.value.user_location
  // this.employeeForm.value.user_id
  // this.employeeForm.value.user_name
  // this.employeeForm.value.user_mobile_no
  // this.employeeForm.value.device_no
  // this.employeeForm.value.stauts

  var obj={
    "user_location":this.employeeForm.value.user_location,
    "user_id":this.employeeForm.value.user_id,
    "user_name":this.employeeForm.value.user_name,
    "user_mobile_no":  this.employeeForm.value.user_mobile_no,
    "device_no":this.employeeForm.value.device_no,
    "stauts": this.employeeForm.value.status == "Active" ? 0:1
    }
    console.log("obj",obj);

    this._api.oracel_create_emp(obj).subscribe((response: any) => {
      console.log("response",response)
    })


  this.submitted=false;
  this.showSuccess(response['Message'])
  this.router.navigate(['/service-admin/service-employee'])
} 
else{
  this.showWarning(response['Message'])
}       
      }
    );
    }
    else{
      this.showWarning("Please Enter the Employee Details")
    }
 
      }


      filterCountry(event) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
          let country = this.countries[i];
          if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
          }
        }
    
        this.filteredCountries = filtered;
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
      employee_cancel(){
        if(this.Admin_check==false){
          this.router.navigate(['/service-admin/service-employee'])
        }else{
          this.router.navigate(['/service-admin/sub-admin-employee'])
        }
        // this.router.navigate(['/service-admin/service-employee'])
        sessionStorage.removeItem('editemployee');
        sessionStorage.removeItem('employeeDetail')
      }
      Edit_pet_type_details(){
        // if(this.empname==true){
        //   var aa =this.employeeForm.controls['user_name'].value;
        //   this.employeeForm.patchValue({
        //     user_name:aa.name
        //   })
        
        // }
        // if(this.loc==true){
        //   var bb =this.employeeForm.controls['user_location'].value;
        //   this.employeeForm.patchValue({
        //     user_location:bb.name
        //   })
        // }

        var enterdata = this.employeeForm.value;
        var emptype = enterdata?.emp_type.name
        this.employeeForm.patchValue({
          user_mob_os:this.mobile_os.name,
          status:this.active_value.name,
          emp_type:this.emp_type_value.name,
        })
     
     
        if(this.employeeForm.valid){
          this._api.employee_edit(this.employeeForm.value).subscribe((response: any) => {
            console.log(response)
           if(response['Status']=="Success")
    {

      var obj={
        "user_location":this.employeeForm.value.user_location,
        "user_id":this.employeeForm.value.user_id,
        "user_name":this.employeeForm.value.user_name,
        "user_mobile_no":  this.employeeForm.value.user_mobile_no,
        "device_no":this.employeeForm.value.device_no,
        "stauts": this.employeeForm.value.status == "Active" ? 0:1
        }
        console.log("obj",obj);
      debugger
        this._api.oracel_update_emp(obj).subscribe((response: any) => {
          console.log("response",response)
        })


      this.showSuccess(response['Message'])
      this.router.navigate(['/service-admin/service-employee'])
      sessionStorage.removeItem('editemployee');
      sessionStorage.removeItem('employeeDetail');

    
  
    } 
    else{
      this.showWarning(response['Message'])
    }       
          }
        );
        }
        else{
          this.showWarning("Please Enter the Employee Details")
        }
      }
      Emp_name(event:any){
        this.empname=false;
      }
      Emp_loc(event:any){
        this.loc=false;
      }
      agent(){
        this.router.navigate(['/service-admin/service-agent'])
      }


      search_key(){
        console.log(this.search_word);
        let a = {
         EMPID : this.search_word
        }
        this._api.search_service_employee(a).subscribe((response: any) => {
        console.log(response);
        if(response.Code == 200){
         this.employeeForm.controls['user_per_mob'].setValue(response.Data.TELENO);
         this.employeeForm.controls['user_mobile_no'].setValue(response.Data.TELENO);
         this.employeeForm.controls['user_id'].setValue(response.Data.EMPID);
         this.employeeForm.controls['user_name'].setValue(response.Data.EMPNAME);
         this.employeeForm.controls['user_location'].setValue(response.Data.BRANCH);
         this.employeeForm.controls['device_no'].setValue(response.Data.INSTNO);
         this.employeeForm.controls['mobile_issue_date'].setValue(response.Data.FROMDATE);
        } else{
          alert('No Record Found');
        }
        });
     }
      
}
