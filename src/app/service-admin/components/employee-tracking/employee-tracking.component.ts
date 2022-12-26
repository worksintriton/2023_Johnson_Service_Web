import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeTrackingeditComponent } from '../../employee-trackingedit/employee-trackingedit.component';
@Component({
  selector: 'app-employee-tracking',
  templateUrl: './employee-tracking.component.html',
  styleUrls: ['./employee-tracking.component.css']
})
export class EmployeeTrackingComponent implements OnInit {
 // google maps zoom level
 zoom: number = 8;
 markers: marker[] = []
 // initial center position for the map
 lat: number = 51.673858;
 lng: number = 7.815982;
 rows:any;
 usermobileno:any;
 jobno:any;
 employeetable;

 origin = { lat: 24.799448, lng: 120.979021 };
 destination = { lat: 24.799524, lng: 120.975017 };

 public dirs: Array<any> = [{
  origin: { lat: 6.8403134, lng: 80.0021128 },
  destination: { lat: 6.71532762, lng: 80.06215197 },
  renderOptions: { polylineOptions: { strokeColor: '#f00' } },
}, {
  origin: { lat: 6.4319639, lng: 79.9983415 },
  destination: { lat: 6.73906232, lng: 80.15640132 },
  renderOptions: { polylineOptions: { strokeColor: '#0f0' } },
}];



 constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService, public dialog: MatDialog) { }

  ngOnInit(){

  this.origin = { lat: 24.799448, lng: 120.979021 };
  this.destination = { lat: 24.799524, lng: 120.975017 };

    console.log(this.dirs);
  }
employee_search()
{
	this.employeetable=true;
	console.log(this.usermobileno)
	let a={
		"user_mobile_no":this.usermobileno,
	}
	console.log(a);

this._api.employee_tracking(a).subscribe(
	(response: any) => {
		console.log(response.Data);
		this.rows = response.Data;
		this.rows = response.Data;
		this.rows.map((e:any)=>{
		  this.markers.push({
			lat: e.loc_lat,
			lng: e.loc_long,
			job_no:e.job_no,
			location_text:e.location_text,
			user_mobile_no:e.user_mobile_no
		   })
		})
		console.log(this.markers);
	});

	
}



  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  employeepopup(item) {
    console.log(item);
    const dialogRef = this.dialog.open(EmployeeTrackingeditComponent, {
      width: '300px',
      data: item,
    });

    dialogRef.afterClosed().subscribe(password => {




    });
  }
}
 

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	job_no?:string;
  location_text?:string;
  user_mobile_no:number;
	
	
}

