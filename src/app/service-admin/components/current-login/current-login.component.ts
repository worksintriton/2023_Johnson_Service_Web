import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-current-login',
  templateUrl: './current-login.component.html',
  styleUrls: ['./current-login.component.css']
})
export class CurrentLoginComponent implements OnInit {
  rows=[];
  logintime:any;
  logoutime:any;
  reason:any;
  values:any;
  constructor(  @Inject(MAT_DIALOG_DATA) data) {
    console.log('{ -----', data);
    this.values=data;
 this.logintime=data.INTIME;
 this.logoutime=data.OUTTIME;
 this.reason=data.LOGOUTREASON
 ;
 



   }

  ngOnInit(): void {

  }
}
