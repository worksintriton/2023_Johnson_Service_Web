import { Component, OnInit, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { Table } from "primeng/table";
import { MatDialog } from '@angular/material/dialog';
import { ServiceColumnPopupComponent } from '../../../components/service-column-popup/service-column-popup.component';
import { JobStatusPopupComponent } from '../../../components/job-status-popup/job-status-popup.component';
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDrag,

  transferArrayItem
} from '@angular/cdk/drag-drop';
import { ExcelService } from '../../../../excel.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
import { ActivatedRoute } from '@angular/router';
import { CDK_DROP_LIST } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-service-report-table',
  templateUrl: './service-report-table.component.html',
  styleUrls: ['./service-report-table.component.css']
})
export class ServiceReportTableComponent implements OnInit {
  jwt: string;
  items = ['Zero', 'One', 'Two', 'Three'];

  items2 = ['Zero', 'One', 'Two', 'Three'];
  items3 = [];
  S_Date: any;
  E_Date: any;
  reportsrange:any;
  col: boolean = false;

  rows = [];

  header = ["SCH_JOBNO", "SCH_CUSNAME", "SCH_MECHANIC", "JOB_STATUS", "SCH_BRCODE", "SCH_BRKDOWNTYPE",
    "SCH_COMPNO", "SCH_CUSADD1", "SCH_CUSADD2", "SCH_CUSADD3","LAST_UPDATED_TIME","JOB_START_TIME","JOB_END_TIME"];

  header1 = ["SCH_JOBNO", "SCH_CUSNAME", "SCH_MECHANIC", "JOB_STATUS", "SCH_BRCODE", "SCH_BRKDOWNTYPE",
    "SCH_COMPNO", "SCH_CUSADD1", "SCH_CUSADD2", "SCH_CUSADD3","LAST_UPDATED_TIME","JOB_START_TIME","JOB_END_TIME"];

  header2 = ["SCQH_JOBNO", "SED_NAME", "SCAH_MECHANIC", "JOB_STATUS", "SCQH_BRCODE",
    "SCQH_QUOTENO", "SMU_SED_ADDRESS1", "SMU_SED_ADDRESS2", "SMU_SED_ADDRESS3","LAST_UPDATED_TIME","JOB_START_TIME","JOB_END_TIME"];

  header3 = ["ACK_JOBNO", "ACK_ENGRNAME", "JOB_STATUS", "ACK_COMPNO",
    "ACK_ADDRESS1", "ACK_ADDRESS2", "ACK_ADDRESS3","LAST_UPDATED_TIME","JOB_START_TIME","JOB_END_TIME"];

  @ViewChild('table')
  tt: Table;

  active: any = [];
  value: any[];
  newexcel: void[];
  final_data = [];
  newdate:any;
  todaydate:any;
data:any;
  Job_type: any;
  firstday: string;
  lastday: string;
  monthfirstDay: Date;
  monthlastDay: Date;
  start: Date;
  end: Date;

  constructor(private router: Router, private cdr: ChangeDetectorRef, private excelservice: ExcelService, @Inject(SESSION_STORAGE) private storage: StorageService, private _api: ApiService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
   
    this.reportsrange=sessionStorage.getItem('reportsrange') ;
    console.log(this.reportsrange)
    if(this.reportsrange==null){
      this.reportsrange='Today'
    }
    console.log(this.reportsrange)
    this.Job_type = sessionStorage.getItem('Job_Type') ;
    this.jwt = sessionStorage.getItem('chart_page') ;
    console.log(this.jwt)
    console.log( this.Job_type)
  
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6
    
    this.firstday = new Date(curr.setDate(first)).toUTCString();
    this.lastday = new Date(curr.setDate(last)).toUTCString();
      ///////
      var date = new Date(), y = date.getFullYear(), m = date.getMonth();
      this.monthfirstDay = new Date(y, m, 1);
      this.monthlastDay = new Date(y, m + 1, 0);
/////
var year = new Date(new Date().getFullYear() , 0, 1);
    this.start = (new Date(year.getFullYear(), 0, 1))
      this.end = (new Date(year.getFullYear(), 11, 31))
      /////

    this.newdate = new Date();
    this.todaydate = new Date();
     this.newdate.setDate( this.newdate.getDate() + 1);
    console.log("one", this.newdate)
    console.log( "two",this.todaydate)
    if(this.reportsrange=='Today'){
    this. data = {
      "start_date":new DatePipe('en-US').transform(this.todaydate,'yyyy-MM-dd') ,
      "end_date": new DatePipe('en-US').transform(this.newdate,'yyyy-MM-dd'),
      "status":  this.Job_type,
      "user_type" : "",
      "access_location":[],
    }
  }
  if(this.reportsrange=='This Week'){
    this. data = {
      "start_date":new DatePipe('en-US').transform(this.firstday,'yyyy-MM-dd') ,
      "end_date": new DatePipe('en-US').transform(this.lastday,'yyyy-MM-dd'),
      "status":  this.Job_type,
      "user_type" : "",
      "access_location":[],
    }
  }
  if(this.reportsrange=='This Month'){
    this. data = {
      "start_date":new DatePipe('en-US').transform(this.monthfirstDay,'yyyy-MM-dd') ,
      "end_date": new DatePipe('en-US').transform(this.monthlastDay,'yyyy-MM-dd'),
      "status":  this.Job_type,
      "user_type" : "",
      "access_location":[],
    }
  }
  if(this.reportsrange=='This Year'){
    this. data = {
      "start_date":new DatePipe('en-US').transform(this.start,'yyyy-MM-dd') ,
      "end_date": new DatePipe('en-US').transform(this.end,'yyyy-MM-dd'),
      "status":  this.Job_type,
      "user_type" : "",
      "access_location":[],
    }
  }
  var Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
  if(Admin_check == null){
    this.data.user_type = "Admin"
    this.data.access_location = [];
  }else{
    var access_loc = JSON.parse(sessionStorage.getItem('access_loc') );
    this.data.user_type = "SubAdmin"
    this.data.access_location = access_loc;
  }
 console.log(this.data)
    if (this.jwt == 'breakdown') {
      console.log('breakdown working lol')
      this._api.getbreak_down_reports(this.data).subscribe((response: any) => {
        this.rows = response['Data'];
        console.log(this.rows)
      });
    }
    if (this.jwt == 'preventive') {
      this._api.preventive_reports(this.data).subscribe((response: any) => {
        this.rows = response['Data'];
        console.log(this.rows)
      })
    }
    if (this.jwt == 'lr') {
      this._api.lr_reports(this.data).subscribe((response: any) => {
        this.rows = response['Data'];
        console.log(this.rows)
      })
    }
    if (this.jwt == 'partsrep') {
      this._api.partsack_reports(this.data).subscribe((response: any) => {
        this.rows = response['Data'];
        console.log(this.rows)
      })
    }
    this.active.push(this.header)
    this.active.push(this.header1)
    console.log(this.active)
  }
  submit(){
    var end_date = this.E_Date.setDate(this.E_Date.getDate() + 1);
    this. data = {
      "start_date":new DatePipe('en-US').transform(this.S_Date,'yyyy-MM-dd') ,
      "end_date": new DatePipe('en-US').transform(end_date,'yyyy-MM-dd') ,
      "status":  this.Job_type
    }
    if (this.jwt == 'breakdown') {
 
      console.log('breakdown working lol')
      this._api.getbreak_down_reports(this.data).subscribe((response: any) => {
        this.rows = response['Data'];
        console.log(this.rows)
      });
    }
    if (this.jwt == 'preventive') {
      this._api.preventive_reports(this.data).subscribe((response: any) => {
        this.rows = response['Data'];
        console.log(this.rows)
      })
    }
    if (this.jwt == 'lr') {
      this._api.lr_reports(this.data).subscribe((response: any) => {
        this.rows = response['Data'];
        console.log(this.rows)
      })
    }
    if (this.jwt == 'partsrep') {
      this._api.partsack_reports(this.data).subscribe((response: any) => {
        this.rows = response['Data'];
        console.log(this.rows)
      })
    }
  }
  addcolumn() {

    const dialogRef = this.dialog.open(ServiceColumnPopupComponent, {
      width: '650px',
      data: this.active
    });

    dialogRef.afterClosed().subscribe(password => {
      console.log(password)

      var aa = JSON.parse(sessionStorage.getItem('pre') || '{}');
      console.log(aa)
      this.header = aa[0];
      this.header1 = aa[1];



    });


  }
  exceldownload() {
    // console.log(this.data?.user_name)
    if (this.jwt == 'breakdown') {
      this.value = this.rows;
      console.log(this.value)
      this.newexcel = this.value.map(d => {
        this.final_data.push({
          SCH_JOBNO: d.SMU_SCH_JOBNO,
          SCH_CUSNAME: d.SMU_SCH_CUSNAME
          ,
          SCH_MECHANIC: d.SMU_SCH_MECHANIC
          ,
          SCH_BRCODE: d.SMU_SCH_BRCODE
          ,
          SCH_BRKDOWNTYPE: d.SMU_SCH_BRKDOWNTYPE,
          SCH_COMPNO: d.SMU_SCH_COMPNO,
          SCH_CUSADD1: d.SMU_SCH_CUSADD1,
          SCH_CUSADD2: d.SMU_SCH_CUSADD2,
          SCH_CUSADD3: d.SMU_SCH_CUSADD3,

        })
      });
      console.log(this.newexcel)

      this.excelservice.exportAsExcelFile(this.final_data, 'Emp_List');
    }
    if (this.jwt == 'preventive') {
      this.value = this.rows;
      console.log(this.value)
      this.newexcel = this.value.map(d => {
        this.final_data.push({

          SCH_JOBNO: d.SMU_SCH_JOBNO,
          SCH_CUSNAME: d.SMU_SCH_CUSNAME
          ,
          SCH_MECHANIC: d.SMU_SCH_MECHANIC
          ,
          SCH_BRCODE: d.SMU_SCH_BRCODE
          ,
          SCH_BRKDOWNTYPE: d.SMU_SCH_BRKDOWNTYPE,
          SCH_COMPNO: d.SMU_SCH_COMPNO,
          SCH_CUSADD1: d.SMU_SCH_CUSADD1,
          SCH_CUSADD2: d.SMU_SCH_CUSADD2,
          SCH_CUSADD3: d.SMU_SCH_CUSADD3,

        })
      });
      console.log(this.newexcel)

      this.excelservice.exportAsExcelFile(this.final_data, 'Emp_List');
    }
    if (this.jwt == 'lr') {
      this.value = this.rows;
      console.log(this.value)
      this.newexcel = this.value.map(d => {
        this.final_data.push({


          SCQH_JOBNO: d.SMU_SCQH_JOBNO,
          SED_NAME: d.SMU_SED_NAME
          ,
          SCAH_MECHANIC: d.SMU_SCAH_MECHANIC
          ,
          SCH_BRCODE: d.SMU_SCQH_BRCODE
          ,
          JOB_STATUS: d.JOB_STATUS,
          SCQH_BRCODE: d.SMU_SCQH_BRCODE,
          SCQH_QUOTENO: d.SMU_SCQH_QUOTENO,
          SED_ADDRESS1: d.SMU_SED_ADDRESS1,
          SED_ADDRESS2: d.SMU_SED_ADDRESS2,
          SED_ADDRESS3: d.SMU_SED_ADDRESS3,

        })
      });
      console.log(this.newexcel)

      this.excelservice.exportAsExcelFile(this.final_data, 'Emp_List');
    }
    if (this.jwt == 'partsrep') {
      this.value = this.rows;
      console.log(this.value)
      this.newexcel = this.value.map(d => {
        this.final_data.push({


          ACK_JOBNO: d.SMU_ACK_JOBNO,
          ACK_ENGRNAME: d.SMU_ACK_ENGRNAME
          ,
          JOB_STATUS: d.JOB_STATUS
          ,
          ACK_COMPNO: d.SMU_ACK_COMPNO
          ,
          ACK_ADDRESS1: d.SMU_ACK_ADDRESS1,
          ACK_ADDRESS2: d.SMU_ACK_ADDRESS2,
          ACK_ADDRESS3: d.SMU_ACK_ADDRESS3,


        })
      });
      console.log(this.newexcel)

      this.excelservice.exportAsExcelFile(this.final_data, 'Emp_List');
    }
  }

  viewpdf1(data) {
    console.log(data);
    this.storage.set('job_detail', data);
    this.router.navigate(['/service-admin/Breakdownservice-Pdf'])

  }
  viewpdf2(data) {
    console.log(data);
    this.storage.set('job_detail', data);
    this.router.navigate(['/service-admin/preventive-maintenance-Pdf'])

  }
  viewpdf3(data) {
    console.log(data);
    this.storage.set('job_detail', data);
    this.router.navigate(['/service-admin/lr-service-Pdf'])

  }
  viewpdf4(data) {
    console.log(data);
    this.storage.set('job_detail', data);
    this.router.navigate(['/service-admin/parts-ack-pdf'])

  }
  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  addToList(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.items3)
  }
  jobStatus(item) {
    console.log(item)
    const dialogRef = this.dialog.open(JobStatusPopupComponent, {
      width: '300px',
      data: item,
    });

    dialogRef.afterClosed().subscribe(password => {




    });
  }

}
