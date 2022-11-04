import { Component, OnInit,ViewChild,ChangeDetectorRef } from '@angular/core';
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
import {CDK_DROP_LIST} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-service-report-table',
  templateUrl: './service-report-table.component.html',
  styleUrls: ['./service-report-table.component.css']
})
export class ServiceReportTableComponent implements OnInit {
  items = ['Zero', 'One', 'Two', 'Three'];

  items2 = ['Zero', 'One', 'Two', 'Three'];
  items3 = [];
  S_Date:any;
  E_Date:any;
  col:boolean=false;

  rows=[{JobId:"9875",AgentId:"5545",AgentName:"Ajay",AgentJobId:"EMPNO1452",ReceivedTime:"3PM",JobName:"Developer",
AgentLocation:"Kanyakumari",SMSSentTime:"1PM",EmailSentTime:"1:10PM",UploadDate:"22/1/2022", BD_Details_BD_Date:"25/1/2022",
Status:"Active",Customer_Address1:"58/22 kanyakumari",Job_Details_JobID:"Development",Branch_Details_BranchCode:"BR0101",BD_Detais_Db_Number:"0213"},
  {JobId:"4587",AgentId:"2247",AgentName:"Carter",AgentJobId:"EMPNO7752",ReceivedTime:"8PM",JobName:"Data Scientist",
AgentLocation:"Chennai",SMSSentTime:"3PM",EmailSentTime:"3:10PM",UploadDate:"5/1/2022",BD_Details_BD_Date:"14/1/2022",
Status:"InaAtive",Customer_Address1:"21/74 , Chennai",Job_Details_JobID:"Development",Branch_Details_BranchCode:"BR7451",BD_Detais_Db_Number:"5487"}]
active=[];
  header=["JobId","AgentId","AgentName","AgentJobId","ReceivedTime","JobName",
"AgentLocation","SMSSentTime","EmailSentTime","UploadDate", "BD_Details_BD_Date",
"Status","Customer_Address1","Job_Details_JobID","Branch_Details_BranchCode","BD_Detais_Db_Number"];
header1=[];
@ViewChild('table')
tt: Table;
  constructor(private cdr: ChangeDetectorRef,public dialog: MatDialog) { }

  ngOnInit(): void {
  this.active.push(this.header)
  this.active.push(this.header1)
    console.log(this.active)
  }
addcolumn(){

    const dialogRef = this.dialog.open(ServiceColumnPopupComponent, {
      width: '650px',
      data:this.active
    });
 
    dialogRef.afterClosed().subscribe(password => {
      console.log(password)
  
      var aa=JSON.parse(sessionStorage.getItem('pre')|| '{}');
      console.log(aa)
      this.header=aa[0];
      this.header1=aa[1];
    
     
    
    });
   
  
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
jobStatus(item){
  console.log(item)
  const dialogRef = this.dialog.open(JobStatusPopupComponent, {
    width: '300px',
 data:item,
  });

  dialogRef.afterClosed().subscribe(password => {

  
   
  
  });
}

}
