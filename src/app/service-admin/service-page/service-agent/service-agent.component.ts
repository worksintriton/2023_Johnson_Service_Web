import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-service-agent',
  templateUrl: './service-agent.component.html',
  styleUrls: ['./service-agent.component.css']
})
export class ServiceAgentComponent implements OnInit {
  
  searchQR:any;
  rows:any=[];
  edit:any;
  branchList:any;
  // rows=[{"agent_name":"arun","agent_phone":"8794561230","Email_id":"Arun@gmail.com","org_name":"Jhonshon","location_name":"chennai","mobile_model":"Nokia","mobile_make":"HMD","imei":"321546687"}]
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,) { }

  ngOnInit(): void {
    console.log("ss")
    sessionStorage.removeItem('editemployee');
    sessionStorage.removeItem('employeeDetail')
    this._api.service_employee_list().subscribe((data:any)=>{
      console.log("ss",data)
      this.rows=data['Data']
    });
   
  }
  refersh(){
    this._api.service_employee_list().subscribe((data:any)=>{
      
      this.rows=data['Data']
      console.log(data)
    });
  }
  add(){
this.router.navigate(['/service-admin/service-agent/service-add-employee'])
  }
detail:any;
  Editcompanydetailsdata(item:any){
    sessionStorage.setItem('editemployee', JSON.stringify(true));
    this.detail=item;
    this.router.navigate(['/service-admin/service-agent/service-add-employee'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));

  }
   Deletecompanydetails(data) {
    let a = {
      '_id' : data
     };
    console.log(a);
    this._api.employee_delete(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      //alert('Deleted Successfully');
      this.showSuccess("Deleted Successfully")
      this.ngOnInit();
    }
  );
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


  Viewdetails(item:any){
    this.detail=item;
    this.router.navigate(['/service-admin/service-add-admin'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));
  }
}
