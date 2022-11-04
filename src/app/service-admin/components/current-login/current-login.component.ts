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
  time:any;
  status:any;
  constructor(  @Inject(MAT_DIALOG_DATA) data) {
    console.log('{ -----', data);
 this.time="03-04-1995";
 this.status="Active";


   }

  ngOnInit(): void {
console.log(this.status)
  }
}
