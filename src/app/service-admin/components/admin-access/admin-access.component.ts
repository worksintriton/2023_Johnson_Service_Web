import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-admin-access',
  templateUrl: './admin-access.component.html',
  styleUrls: ['./admin-access.component.css']
})
export class AdminAccessComponent implements OnInit {

  searchQR:any;
  rows:any=[];
  edit:any;
  access_tocken:any
  Admin_check:any
  branchList:any;
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    console.log(this.access_tocken)
    if( this.access_tocken ==null){
      console.log("noo")
       this.router.navigateByUrl('/service-login');
     
    }else{
    console.log("ss")
    sessionStorage.removeItem('editemployee');
    sessionStorage.removeItem('employeeDetail')
    // this._api.service_employee_list().subscribe((data:any)=>{
    //   console.log("ss",data)
    //   this.rows=data['Data']
    // });
    this._api.Admin_list().subscribe((data:any)=>{
      console.log("ss",data)
      this.rows=data['Data']
    });
   
  }}
  refersh(){
    this._api.Admin_list().subscribe((data:any)=>{
      
      this.rows=data['Data']
      console.log(data)
    });
  }
  add(){
this.router.navigate(['/service-admin/Add-AdminAccess'])
  }
detail:any;
  Editcompanydetailsdata(item:any){
    sessionStorage.setItem('editemployee', JSON.stringify(true));
    this.detail=item;
    this.router.navigate(['/service-admin/Add-AdminAccess'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));

  }
   Deletecompanydetails(data) {
    let a = {
      '_id' : data
     };
    console.log(a);
    this._api.Admin_delete(a).subscribe(
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
  Viewdetails1(){
    // this.detail=item;
    this.router.navigate(['/service-admin/Add-AdminAccess'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));
  }

  Viewdetails(item:any){
    this.detail=item;
    this.router.navigate(['/service-admin/Add-AdminAccess'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));
  }
}
