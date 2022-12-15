import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ReportAttendanceTableComponent } from '../components/report-attendance-table/report-attendance-table.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-report-lr',
  templateUrl: './report-lr.component.html',
  styleUrls: ['./report-lr.component.css']
})
export class ReportLrComponent implements OnInit {

  filteredCountries: any[];
  selectedCountry:any;
  firstChild:any;
  dayChild:any;
  countries: any[]= [];
  selectedReport:any;
  branchList:any;
  access_tocken:any
  data:any;
  todaydate:any;
  newdate:any;
  rows:any;
  Admin_check:any
  barChartData:any=[];
    reportSide= [ 
      {"name": "Material Request"}, 
      {"name": "StockManagement"}, 
      {"name": "Customer Feed"}, 
      {"name": "Breakdown Service"}, 
      {"name": "LR Service"}, 
      {"name": "Preventive Replacement"},
      {"name": "Parts Replacement"},
      {"name": "MR for Breakdown "},
      {"name": "MR for Prevent "}, ];
      dateReport= ["Today","This week","This Month","This Year"];
      moreReport=  [ 
       
        {"name": "Attendance Report", },];
        
      public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true,
        plugins: {
          tooltip: {
            enabled: false // <-- this option disables tooltips
          }
        },
     
    
      };
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            enabled: false // <-- this option disables tooltips
          }
        }
      }
        public mbarChartLabels:string[] = ['Breakdown Service Reports'];
        public barChartType:string = 'bar';
      public barChartLegend:boolean = true;
      
        public barChartColors:Array<any> = [
        {
          backgroundColor: 'rgba(241,111,32,1)',
          borderColor: 'rgba(105,159,177,1)',
          pointBackgroundColor: 'rgba(105,159,177,1)',
          pointBorderColor: '#fafafa',
          pointHoverBackgroundColor: '#fafafa',
          pointHoverBorderColor: 'rgba(105,159,177)'
        },
        { 
          backgroundColor: 'rgba(77,20,96,0.3)',
          borderColor: 'rgba(77,20,96,1)',
          pointBackgroundColor: 'rgba(77,20,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,20,96,1)'
        }
      ];
  Not_Started: any;
  Job_Submitted: any;
  Job_Paused: any;
  Job_Started:any;
  firstday:any
  lastday:any
  reportsrange:any;
  monthfirstDay: Date;
  monthlastDay: Date;
  start: Date;
  end: Date;
 

      
  constructor(private router: Router,public dialog: MatDialog,private _api: ApiService,) { }

  ngOnInit(): void {
    sessionStorage.removeItem('reportsrange');
    this.firstChild=='Today';
console.log(new Date)
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
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    console.log(this.access_tocken)
    this.newdate = new Date();
    this.todaydate = new Date();
     this.newdate.setDate( this.newdate.getDate() + 1)
    console.log("one", this.newdate)
    console.log( "two",this.todaydate)
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );

    this. data = {
      "start_date":new DatePipe('en-US').transform(this.todaydate,'yyyy-MM-dd') ,
      "end_date": new DatePipe('en-US').transform(this.newdate,'yyyy-MM-dd'),
      "user_type" : "",
      "access_location":[],
    }
    if(this.Admin_check == null){
      this.data.user_type = "Admin"
      this.data.access_location = [];
    }else{
      var access_loc = JSON.parse(sessionStorage.getItem('access_loc') );
      this.data.user_type = "SubAdmin"
      this.data.access_location = access_loc;
    }


      this._api.lr_chart(this.data).subscribe((response: any) => {
        this.rows = response['Data'];
        this.Not_Started=this.rows.Not_Started;
        this.Job_Started=this.rows.Job_Started;
        this.Job_Submitted=this.rows.Job_Submitted;
       
        this.Job_Paused=this.rows.Job_Paused;
        console.log(this.rows)
        this.barChartData = [
       
          {data:[this.rows.Not_Started], label: 'Not Started'},
          {data:[this.rows.Job_Paused], label: 'Job Paused'},
          {data:[this.rows.Job_Started], label: 'Job Started'},
          {data:[this.rows.Job_Submitted], label:'Job Submitted'},
        
  
        ];
      })


    if( this.access_tocken ==null){
      console.log("noo")
       this.router.navigateByUrl('/service-login');
     
    }else{
   this.firstChild=this.reportSide[0].name;
   this.dayChild=this.dateReport[0];
   this._api.getBranchList().subscribe((response: any) => {
    this.branchList=response['Data'];
    this.branchList.forEach((key, value) => {
      // 👇️ name Tom, country Chile
      this.countries.push(key.branch_name)
      
    });
    console.log(this.countries);
  })
  
  }}

  
  filterCountry(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }




  reportChange(item){
    this.firstChild=item.name;
    if(this.firstChild=='Material Request'){
      this.barChartData = [
        {data: [ 80], label: 'Documents Received'},
        {data: [ 66, ], label: 'Documents for Approval'},
        {data: [ 79, 66, ], label: 'Jobs Created'},
        {data: [ 79, 66, 57, 90], label: 'Jobs Pending (Agents)'},
        {data: [ 66, 57, 90], label: 'Jobs Pending (Server)'},
        {data: [90, ], label: 'Job Completed'},
        {data: [75,], label: 'Job Cancelled'},
        {data: [ 90], label: 'Job Paused'},

      ];
     }
    else if(this.firstChild=='StockManagement'){
     this.barChartData = [
        {data: [ 10], label: 'Documents Received'},
        {data: [ 66, ], label: 'Documents for Approval'},
        {data: [  66, ], label: 'Jobs Created'},
        {data: [ , 90], label: 'Jobs Pending (Agents)'},
        {data: [ 66,], label: 'Jobs Pending (Server)'},
        {data: [70, ], label: 'Job Completed'},
        {data: [60,], label: 'Job Cancelled'},
        {data: [ 90], label: 'Job Paused'},

      ];
    }
 }
 range(e:any,data) {
  console.log(data)
this.reportsrange =data;
this.firstChild=this.reportsrange;
sessionStorage.setItem("reportsrange",data);

if(this.reportsrange=='Today'){
  console.log("one", this.newdate)
  console.log( "two",this.todaydate)
  this. data = {
    "start_date":new DatePipe('en-US').transform(this.todaydate,'yyyy-MM-dd') ,
    "end_date": new DatePipe('en-US').transform(this.newdate,'yyyy-MM-dd'),
 
  }
}
if(this.reportsrange=='This Week'){
  console.log(this.firstday,this.lastday)
  this. data = {
    "start_date":new DatePipe('en-US').transform(this.firstday,'yyyy-MM-dd') ,
    "end_date": new DatePipe('en-US').transform(this.lastday,'yyyy-MM-dd'),
 
  }
}
if(this.reportsrange=='This Month'){
  console.log(this.monthfirstDay,this.monthlastDay )
  this. data = {
    "start_date":new DatePipe('en-US').transform(this.monthfirstDay,'yyyy-MM-dd') ,
    "end_date": new DatePipe('en-US').transform(this.monthlastDay,'yyyy-MM-dd'),
 
  }
}
if(this.reportsrange=='This Year'){
  this. data = {
    "start_date":new DatePipe('en-US').transform(this.start,'yyyy-MM-dd') ,
    "end_date": new DatePipe('en-US').transform(this.end,'yyyy-MM-dd'),
 
  }
}


this._api.lr_chart(this.data).subscribe((response: any) => {
  this.rows = response['Data'];
  this.Not_Started=this.rows.Not_Started;
  this.Job_Submitted=this.rows.Job_Submitted;
  this.Job_Started=this.rows.Job_Started;
  this.Job_Paused=this.rows.Job_Paused;
  console.log(this.rows)
  this.barChartData = [
 
    {data:[this.rows.Not_Started], label: 'Not Started'},
    {data:[this.rows.Job_Paused], label: 'Job Paused'},
    {data:[this.rows.Job_Started], label: 'Job Started'},
    {data:[this.rows.Job_Submitted], label:'Job Submitted'},
  

  ];
})
 }
 clickdata(e:any,data) {
  console.log(data)
  sessionStorage.setItem("Job_Type",data);
  sessionStorage.setItem("chart_page",'lr');
  // this.router.navigate(['/service-admin/service-report-table'],{queryParams: {part: 'breakdown' }})
  this.router.navigate(['/service-admin/service-report-table'])
 }
 dayChange(item){
   this.dayChild=item;
 }
 public chartClicked(e:any):void {
  console.log(e)


 
}

public chartHovered(e:any):void {

}

public randomize():void {
  let data = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    (Math.random() * 100),
    Math.round(Math.random() * 100),
    (Math.random() * 100),
    Math.round(Math.random() * 100)];
  let clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = data;
  this.barChartData = clone;
}
onChange(e:any){
  console.log(e.value.name)
if(e.value.name=="Attendance Report"){
  const dialogRef = this.dialog.open(ReportAttendanceTableComponent, {
    width: '1500px',
 
  });

  dialogRef.afterClosed().subscribe(password => {
this.ngOnInit();
this.selectedReport='';
  });
}

}
onSelect(e:any){
  console.log("sad",e)
  if(e.name=="Afghanistan"){
    this.barChartData = [
      {data: [ 10], label: 'Documents Received'},
      {data: [ 66, ], label: 'Documents for Approval'},
      {data: [  66, ], label: 'Jobs Created'},
      {data: [  90], label: 'Jobs Pending (Agents)'},
      {data: [ 66,], label: 'Jobs Pending (Server)'},
      {data: [70, ], label: 'Job Completed'},
      {data: [60,], label: 'Job Cancelled'},
      {data: [ 90], label: 'Job Paused'},

    ];
  }
}

}
