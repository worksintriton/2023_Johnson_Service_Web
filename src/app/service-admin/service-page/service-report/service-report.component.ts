import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportAttendanceTableComponent } from '../../components/report-attendance-table/report-attendance-table.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-service-report',
  templateUrl: './service-report.component.html',
  styleUrls: ['./service-report.component.css']
})
export class ServiceReportComponent implements OnInit {
  filteredCountries: any[];
  selectedCountry:any;
  firstChild:any;
  dayChild:any;
  countries: any[]= [];
  selectedReport:any;
  branchList:any;
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
      dateReport= ["Since Last login","Today","This week","This Month","This Year","Complete"];
      moreReport=  [ 
       
        {"name": "Attendance Report", },];
      public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
      };
    
        public mbarChartLabels:string[] = ['2012' ];
        public barChartType:string = 'bar';
        public barChartLegend:boolean = true;
      
        public barChartColors:Array<any> = [
        {
          backgroundColor: 'rgba(105,159,177,0.2)',
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
        public barChartData:any[] = [
          {data: [ 80], label: 'Documents Received'},
          {data: [ 66, ], label: 'Documents for Approval'},
          {data: [ 79, 66, ], label: 'Jobs Created'},
          {data: [ 79, 66, 57, 90], label: 'Jobs Pending (Agents)'},
          {data: [ 66, 57, 90], label: 'Jobs Pending (Server)'},
          {data: [90, ], label: 'Job Completed'},
          {data: [75,], label: 'Job Cancelled'},
          {data: [ 90], label: 'Job Paused'},

        ];
  constructor(private router: Router,public dialog: MatDialog,private _api: ApiService,) { }

  ngOnInit(): void {
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
  
  }
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
 dayChange(item){
   this.dayChild=item;
 }
 public chartClicked(e:any):void {
this.router.navigate(['/service-admin/service-report-table'])
 
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
