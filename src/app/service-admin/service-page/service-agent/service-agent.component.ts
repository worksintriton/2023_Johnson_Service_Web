import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../../api.service';
import { ExcelService } from '../../../excel.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';


@Component({
  selector: 'app-service-agent',
  templateUrl: './service-agent.component.html',
  styleUrls: ['./service-agent.component.css']
})
export class ServiceAgentComponent implements OnInit {
  final_data = [];
  value:any;
  S_Date:any;
  E_Date:any;
  excelData:any=[];
  exceldata:any=[];
  lableName=[];
  XLarray=[];
  data:any
  searchQR:any;
  rows:any=[];
  edit:any;
  branchList:any;
  access_tocken:any
  Admin_check:any
  newexcel: any;
  header = ["S no", "Emp Name", "Emp Code", "Emp Phone", "Location Name", "Emp type",
  "Device Number", "Status", "Login Status", "Last Login Time","Last LogoutTime","Action"];
  // rows=[{"agent_name":"arun","agent_phone":"8794561230","Email_id":"Arun@gmail.com","org_name":"Jhonshon","location_name":"chennai","mobile_model":"Nokia","mobile_make":"HMD","imei":"321546687"}]
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,private excelservice: ExcelService) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    console.log(this.access_tocken)
    if( this.access_tocken ==null){
      console.log("noo")
       this.router.navigateByUrl('/service-login');
     
    }else{
     
  
  
    
   
    sessionStorage.removeItem('editemployee');
    sessionStorage.removeItem('employeeDetail')
    this._api.service_employee_list().subscribe((data:any)=>{
      console.log("ss",data)
      this.rows=data['Data']
      this.exceldata=this.rows;
      this.data=this.rows;
      console.log(this.rows)
    });
  }
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
  onFileChange(ev) {
    this.excelData = [];
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    this.lableName = ev.target.files[0].name;
    reader.onload = (event) => {
      const data = reader.result;
      // workBook = XLSX.read(data, { type: 'binary' });

      workBook = XLSX.read(data, {
        type: "binary", cellDates: true, dateNF: 'mm/dd/yyyy;@'
    });

      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      // const dataString = JSON.stringify(jsonData);
      console.log("jsonData",jsonData);
      this.excelData = jsonData["Sheet 1"];
      // this.excelData = jsonData.Sheet1;
      console.log("jsonData11",this.excelData);
     this.excelData.map(e=>{
      this.XLarray.push({
        "_id": "6350f32616f814705d5cc9a7",
        "user_mobile_no": e.OM_SM_MOBILE
        ,
        "user_id": e.OM_SM_EMPID
        ,
        "user_password": "12345",
        "user_per_mob": e.OM_SM_MOBILE
        ,
        "user_name": e.OM_SM_EMPNAME
        ,
        "user_email": "info@johnsonliftsltd.com",
        "user_introduced_by": "",
        "user_location": e.OM_SM_BRCODE,
        "user_mob_model": "12345",
        "user_mob_os": "Android Jelly Bean",
        "user_mob_make": "12345",
        "device_no":e.OM_SM_IMEI,
        "organisation_name": "Johnson Lifts Private Limited",
        "status": "Active",
        "mobile_issue_date": "2016-03-31T18:30:00.000Z",
        "Documents": "",
        "emp_type": "Mechanic",
        "delete_status": false,
        "last_login_time": "",
        "last_logout_time": "",
        "user_token": "",
        "user_type": "Log In",
        "__v": 0
      })
      console.log(  this.XLarray)
     })
    
    }
    reader.readAsBinaryString(file);
  }
   index = 0;

  // xlupload(){
  //   console.log(this.XLarray);

  //  this.recall(this.index);

  // }
  // recall(index) {
  //   console.log(index);
  //   let arrayindex=this.XLarray;
    
  //        if(index < arrayindex.length) {
  //          console.log(arrayindex[index])
  //           this._api.service_employee(arrayindex[index]).subscribe((response: any) => {
  //           console.log(response)
  //           index = index + 1;
  //           this.recall(index);
  //         })         
  //        }
  //        else {
  //         alert("completed")
  //        }
  // }



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
  Viewdetails(item:any){
    this.detail=item;
    this.router.navigate(['/service-admin/service-add-admin'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));
  }
}
