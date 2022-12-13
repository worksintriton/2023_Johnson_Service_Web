import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { CurrentLoginComponent } from '../../components/current-login/current-login.component';
import { MatDialog } from '@angular/material/dialog';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ExcelService } from '../../../excel.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  S_Date:any;
  E_Date:any;
  rows:any;
  search:any;
  newdate:any;
  todaydate:any;
  data:any;
  searchQR;
  access_tocken:any
  Admin_check:any
  final_data = [];
  value:any;
  newexcel: any;
  // rows=[{"LoginId":"1","AgentId":"2001","agentname":"Arun","logintime":"02-02-2022","logouttime":"23-26-2022","worktime":"2hrs","jobcount":"3","status":"active","reason":"Leave"}]
  header=["Agent Name","Login Time","Logout Time","Phone Number","Working Time","Status","Logout Reason"]
  exceldata: any;
  constructor(private router:Router,private _api: ApiService, public dialog: MatDialog,private excelservice: ExcelService) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    console.log(this.access_tocken)
    if( this.access_tocken ==null){
      console.log("noo")
       this.router.navigateByUrl('/service-login');
     
    }else{
    this.newdate = new Date();
    this.todaydate = new Date();
     this.newdate.setDate( this.newdate.getDate() + 1)
    console.log("one", this.newdate)
    console.log( "two",this.todaydate)
  
this.data={
      "from_date": new DatePipe('en-US').transform(this.todaydate,'dd/MM/yyyy') ,
      "to_date":new DatePipe('en-US').transform(this.newdate,'dd/MM/yyyy')
    }
    this._api.attendence(this.data).subscribe((data:any)=>{
  this.rows=data['Data']
  this.exceldata=this.rows;
   console.log(this.rows,"one")
    });
  }
  }
  refersh(){
    // (<HTMLInputElement>document.getElementById("search")).value='';
    // (<HTMLInputElement>document.getElementById("search1")).value='';
    // (<HTMLInputElement>document.getElementById("search2")).value='';
    // (<HTMLInputElement>document.getElementById("search3")).value='';
    // (<HTMLInputElement>document.getElementById("search4")).value='';
    // (<HTMLInputElement>document.getElementById("search5")).value='';
    // (<HTMLInputElement>document.getElementById("search6")).value='';
    this.ngOnInit();

  }
  click(item)
  {
    console.log(item)
    const dialogRef = this.dialog.open(CurrentLoginComponent, {
      width: '450px',
   data:item,
    });
  
    dialogRef.afterClosed().subscribe(password => {
  
    
     
    
    });
  }
 
  exceldownload(){

        this.value=this.exceldata;
         this.newexcel = this.value.map(d =>{
          this.final_data.push({
            EMPLOYEE_ID
 :d.EMPLOYEE_ID
 ,
            EMPLOYEE_NAME :d.AGENTNAME
            ,
            LOCATION :d.LOCATION
            ,
            START_TIME : d.INTIME 
            ,
            END_TIME :d.OUTTIME,
            WORKING_HOURS :d.TIME_DIFFERENCE,
            LOGOUT_REASON :d.LOGOUTREASON,
         
         })   
         } );
    console.log( this.newexcel)
      
        this.excelservice.exportAsExcelFile(this.final_data, 'Emp_List');
      }
  submit() {
    this.E_Date.setDate( this.E_Date.getDate() + 1)
    this.data={
      "from_date":   new DatePipe('en-US').transform(this.S_Date,'dd/MM/yyyy') ,
      "to_date": new DatePipe('en-US').transform(this.E_Date ,'dd/MM/yyyy')
    }
    this._api.attendence(this.data).subscribe((data:any)=>{
  this.rows=data['Data']
   console.log(this.rows,"one")
    });
  }
}
