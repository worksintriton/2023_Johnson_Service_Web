import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../../api.service';
import { ExcelService } from '../../../excel.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { MatDialog } from '@angular/material/dialog';
import { ServiceEmployeePopupComponent } from '../../components/service-employee-popup/service-employee-popup.component';

@Component({
  selector: 'app-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css']
})
export class ServiceDashboardComponent implements OnInit {


  temp_value = [];

  timeLeft: number = 2;
  interval;
  
  total_list_all = [];

  total_login = [];
  total_logout = [];
  temp_logout_person = [];
  selected_location = '';
  

  passed_date_value = new DatePipe('en-US').transform(new Date(),'yyyy-MM-dd');



  count_value_total = 0;
  count_value_present  = 0;
  count_value_logout = 0;
  count_value_notlogin = 0;




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
  searchQRbranch:any;
  rows:any=[];
  edit:any;
  branchList:any;
  access_tocken:any
  Admin_check:any
  newexcel: any;
  header = ["S no", "Emp Name", "Emp Code", "Emp Phone", "Location Name", "Emp type",
  "Device Number", "Status", "Login Status", "Last Login Time","Last LogoutTime","Action"];
  // rows=[{"agent_name":"arun","agent_phone":"8794561230","Email_id":"Arun@gmail.com","org_name":"Jhonshon","location_name":"chennai","mobile_model":"Nokia","mobile_make":"HMD","imei":"321546687"}]
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,private excelservice: ExcelService, public dialog: MatDialog) { }

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
      console.log(this.rows);
      this.total_list_all = [];
      this.total_login = [];
      this.total_logout = [];
      let newdate = new Date();
      let todaydate = new Date();
       newdate.setDate(newdate.getDate() + 1)
      console.log("one", newdate)
      console.log( "two",todaydate)
      this.total_list_all = this.rows;
  this.data={
      "from_date": new DatePipe('en-US').transform(todaydate,'dd/MM/yyyy') ,
      "to_date":new DatePipe('en-US').transform(newdate,'dd/MM/yyyy')
  }
  this._api.attendence(this.data).subscribe((data:any)=>{
  this.temp_logout_person=data['Data']
   console.log(this.temp_logout_person,"one");
   this.total_list_all.forEach(element => {
    var date = new DatePipe('en-US').transform(todaydate,'dd/MM/yyyy');
    var valued_date = new DatePipe('en-US').transform(element.last_login_time,'dd/MM/yyyy');
    if(date == valued_date){
    this.temp_logout_person.forEach(elements => {
         if(""+elements.EMPLOYEE_ID == ""+element.user_id){
          console.log(true);
          element.Documents = elements.LOGOUTREASON;
         }
      });  
      }      
  });   
  });
    });

    this.branchList = [];
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    var access_loc = JSON.parse(sessionStorage.getItem('access_loc') );

    console.log(this.Admin_check);
    console.log(access_loc);
    if(this.Admin_check == null) {
     this._api.getBranchList().subscribe((response: any) => {
      this.branchList = response['Data'];
      console.log(this.branchList);
      this.branchList.forEach(element => {
        element.count_value_total = 0;
        element.count_value_present = 0;
        element.count_value_logout = 0;
        element.count_value_notlogin = 0;
      });
      console.log(this.branchList)
      this.selected_location = this.branchList[0].branch_code;
    });
  }
  else {
     this.branchList = access_loc;
     this.branchList.forEach(element => {
      element.count_value_total = 0;
      element.count_value_present = 0;
      element.count_value_logout = 0;
      element.count_value_notlogin = 0;
    });
  }
  console.log(this.branchList);
  this.selected_location = this.branchList[0].branch_code;
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




  Viewdetails(item:any){
    this.detail=item;
    this.router.navigate(['/service-admin/service-add-admin'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));
  }
  employeepopup(item) {
    console.log(item);
    const dialogRef = this.dialog.open(ServiceEmployeePopupComponent, {
      width: '300px',
      data: item,
    });

    dialogRef.afterClosed().subscribe(password => {




    });
  }



  search_passed_date(){

   console.log(this.Admin_check);
   console.log(this.access_tocken);
   console.log(this.selected_location);
   console.log(this.passed_date_value);
   this._api.service_employee_list().subscribe((data:any)=>{
      console.log("ss",data)
      this.rows=data['Data']
      this.exceldata=this.rows;
      this.data=this.rows;
      console.log(this.rows);
      this.total_list_all = [];
      this.total_login = [];
      this.total_logout = [];
      let newdate = new Date(this.passed_date_value);
      let todaydate = new Date(this.passed_date_value);
       newdate.setDate(newdate.getDate() + 1)
      console.log("one", newdate)
      console.log( "two",todaydate)
      this.total_list_all = this.rows;
  this.data={
      "from_date": new DatePipe('en-US').transform(todaydate,'dd/MM/yyyy') ,
      "to_date":new DatePipe('en-US').transform(newdate,'dd/MM/yyyy')
  }
  this._api.attendence(this.data).subscribe((data:any)=>{
  this.temp_logout_person=data['Data']
   console.log(this.temp_logout_person,"one");
   this.total_list_all.forEach(element => {
    this.temp_logout_person.forEach(elements => {
         if(""+elements.EMPLOYEE_ID == ""+element.user_id){
          console.log(true);
          element.last_login_time = elements.INTIME;
          element.last_logout_time = elements.OUTTIME;
          element.Documents = elements.LOGOUTREASON;
         }
      });  
  });   
  this.timeLeft = 2;
  this.startTimer();
  });
  });



 }


 startTimer() {
  this.interval = setInterval(() => {
    console.log(this.timeLeft);
    if(this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      this.temp_value = [];
      this.count_value_total = 0;
      this.count_value_present  = 0;
      this.count_value_logout = 0;
      this.count_value_notlogin = 0;
      this.total_list_all.forEach(element => {
        if(element.user_location == this.selected_location){
          this.temp_value.push(element);
          if(element.Documents == '' && element.user_type == 'Log Out'){
            element.user_type = 'Not Login'
            element.last_login_time = new Date(this.passed_date_value);
            this.count_value_notlogin = this.count_value_notlogin + 1;
          }
          else if(element.user_type == 'Log Out' && element.Documents !== '' ){
            this.count_value_logout = this.count_value_logout + 1;
          }else {
            console.log(element);
            this.count_value_present = this.count_value_present + 1;
          }
          console.log(new Date(this.passed_date_value), new Date(element.last_login_time))
        }
        if(this.selected_location == 'All'){
          this.temp_value.push(element);
        }
      });
       this.count_value_total = this.count_value_notlogin + this.count_value_logout + this.count_value_present;
     this.pauseTimer();
     this.timeLeft = 2;
     this.startTimer2();
    }
  },1000)
}

startTimer2() {
  this.branchList.forEach(element => {
    element.count_value_total = 0;
    element.count_value_present = 0;
    element.count_value_logout = 0;
    element.count_value_notlogin = 0;
  });
  this.interval = setInterval(() => {
    console.log(this.timeLeft);
    if(this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      this.total_list_all.forEach(element => {
        this.branchList.forEach(elements => { 
          if(element.user_location == elements.branch_code){
            if(element.user_type == 'Not Login'){
              elements.count_value_notlogin =  elements.count_value_notlogin + 1;
            } else if(element.user_type == 'Log Out' && element.Documents !== '' ){
              elements.count_value_logout =  elements.count_value_logout + 1;
            } else {
              elements.count_value_present = elements.count_value_present + 1;
            }
            elements.count_value_total = elements.count_value_notlogin + elements.count_value_logout + elements.count_value_present;
          }
         });
      });
     this.pauseTimer();
    }
  },1000)
}


pauseTimer() {
  clearInterval(this.interval);
}



    attendaceexceldownload(){
      this.newexcel='';
      console.log(this.temp_value)
          this.value = this.temp_value;
           this.newexcel = this.value.map(d =>{
            this.final_data.push(   
              
              {
              emp_name :d.user_name,
              emp_mobile_no :d.user_mobile_no,
              emp_id :d.user_id,
              emp_email : d.user_email,
              emp_location :d.user_location,
              emp_type :d.emp_type,
              device_no :d.device_no,
              status : d.status,
              login_status:d.user_type,
              last_login: new DatePipe('en-US').transform(d.last_login_time,'dd/MM/yyyy'),
              last_logout: new DatePipe('en-US').transform(d.last_logout_time,'dd/MM/yyyy'),
              reason:d.Documents,
           }
           )   
           } );
      console.log( this.newexcel)
        
          this.excelservice.exportAsExcelFile(this.final_data, 'Attendance_List');
        }

        exceldownload(){
       
          console.log(this.branchList)
              this.value=this.branchList;
               this.newexcel = this.value.map(d =>{
                this.final_data.push({
                  Name :d.branch_code,
                  BranchCode :d.branch_code,
                  LoginStatus :d.count_value_total,
                  Logintime : d.count_value_present,
                  Logouttime :d.count_value_logout,
                  LoginReason:d.count_value_notlogin
               })   
               } );
          console.log( this.newexcel)
            
              this.excelservice.exportAsExcelFile(this.final_data, 'Branch_List');
            }
        
}
