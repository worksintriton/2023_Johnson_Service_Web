import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-job-tracking',
  templateUrl: './job-tracking.component.html',
  styleUrls: ['./job-tracking.component.css']
})
export class JobTrackingComponent implements OnInit {

   // google maps zoom level
  zoom: number = 8;
  markers: marker[] = []
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  rows:any;
  jobno:any;
  jobtable: boolean = false;
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,) { }

  ngOnInit(){
    
}
job_search()
{
  this.jobtable = true;
  console.log(this.jobno)
 let a={
  "job_no":this.jobno,
 }
 console.log(a);
 

  this._api.job_tracking(a).subscribe(
    (response: any) => {
      console.log(response.Data);
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
    }
  );


}
viewpdf(data){
 

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
  

	  
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  job_no?:string;
  location_text?:string;
  user_mobile_no:number;
}
