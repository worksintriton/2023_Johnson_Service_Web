import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-job-status-popup',
  templateUrl: './job-status-popup.component.html',
  styleUrls: ['./job-status-popup.component.css']
})
export class JobStatusPopupComponent implements OnInit {
  rows=[];
  time:any;
  status:any;
  constructor(  @Inject(MAT_DIALOG_DATA) data) {
    console.log('{ -----', data);
 this.time=data.AgentId;
 this.status=data.Status;


   }

  ngOnInit(): void {
console.log(this.status)
  }

}
