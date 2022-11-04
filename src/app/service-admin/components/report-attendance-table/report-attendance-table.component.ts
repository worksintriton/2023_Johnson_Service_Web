import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { CurrentLoginComponent } from '../../components/current-login/current-login.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-report-attendance-table',
  templateUrl: './report-attendance-table.component.html',
  styleUrls: ['./report-attendance-table.component.css']
})
export class ReportAttendanceTableComponent implements OnInit {
  S_Date:any;
  E_Date:any;
  rows:any;
  search:any;
  // rows=[{"LoginId":"1","AgentId":"2001","agentname":"Arun","logintime":"02-02-2022","logouttime":"23-26-2022","worktime":"2hrs","jobcount":"3","status":"active","reason":"Leave"}]
  header=["Agent Name","Login Time","Logout Time","Phone Number","Working Time","Status","Logout Reason"]
  constructor(private _api: ApiService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this._api.agent_attendence().subscribe((data:any)=>{
  this.rows=data['Data']
   console.log(this.rows)
    });
  }
  refersh(){
    (<HTMLInputElement>document.getElementById("search")).value='';
    (<HTMLInputElement>document.getElementById("search1")).value='';
    (<HTMLInputElement>document.getElementById("search2")).value='';
    (<HTMLInputElement>document.getElementById("search3")).value='';
    (<HTMLInputElement>document.getElementById("search4")).value='';
    (<HTMLInputElement>document.getElementById("search5")).value='';
    (<HTMLInputElement>document.getElementById("search6")).value='';
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
}
