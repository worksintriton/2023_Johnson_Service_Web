import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ExcelService } from '../../excel.service';
@Component({
  selector: 'app-sub-admn-employee',
  templateUrl: './sub-admn-employee.component.html',
  styleUrls: ['./sub-admn-employee.component.css']
})
export class SubAdmnEmployeeComponent implements OnInit {
 
  searchQR:any;
  rows:any=[];
  edit:any;
  newexcel: any;
  exceldata:any=[];
  branchList:any;
  access_loc:any=[];
  final_data = [];
  value:any;
  // rows=[{"agent_name":"arun","agent_phone":"8794561230","Email_id":"Arun@gmail.com","org_name":"Jhonshon","location_name":"chennai","mobile_model":"Nokia","mobile_make":"HMD","imei":"321546687"}]
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,private excelservice: ExcelService) { }

  ngOnInit(): void {
    this.access_loc = JSON.parse(sessionStorage.getItem('access_loc') );
    console.log("ss",this.access_loc)
    sessionStorage.removeItem('editemployee');
    sessionStorage.removeItem('employeeDetail')
     var data={
      "user_type": "Subadmin",
      "access_location":this.access_loc
   }
    this._api.subadmin_employee_list(data).subscribe((data:any)=>{
      console.log("ss",data)
      this.rows=data['Data']
      this.exceldata=this.rows;
    });
   
  }
  exceldownload(){
    // console.log(this.data?.user_name)
        this.value=this.exceldata;
         this.newexcel = this.value.map(d =>{
          this.final_data.push({
            emp_name :d.user_name,
            emp_mobile_no :d.user_mobile_no
            ,
            emp_id :d.user_id
            ,
            emp_email : d.user_email
            ,
            emp_location :d.user_location,
            emp_type :d.emp_type,
            device_no :d.device_no,
            status : d.status,
            login_status:d.user_type,
            last_login:d.last_login_time,
            last_logout:d.last_logout_time
         })   
         } );
    console.log( this.newexcel)
      
        this.excelservice.exportAsExcelFile(this.final_data, 'Emp_List');
      }
  refersh(){
    var data={
      "user_type": "Subadmin",
      "access_location": []
   }
    this._api.subadmin_employee_list(data).subscribe((data:any)=>{
      
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
