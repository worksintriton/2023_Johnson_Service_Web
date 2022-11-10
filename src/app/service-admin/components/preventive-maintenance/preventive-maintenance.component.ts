import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';


// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';


@Component({
  selector: 'app-preventive-maintenance',
  templateUrl: './preventive-maintenance.component.html',
  styleUrls: ['./preventive-maintenance.component.css']
})
export class PreventiveMaintenanceComponent implements OnInit {
  rows:any;
  searchQR;
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  // constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getlist_completed_pm().subscribe((response: any) => {
      this.rows=response['Data'];
      console.log( this.rows)
    })
  }
  refersh(){
    this._api.getlist_completed_pm().subscribe((response: any) => {
      this.rows=response['Data'];
      console.log( this.rows)
    })
  }

  viewpdf(data){
    console.log(data);
    this.storage.set('job_detail',data);
    this.router.navigate(['/preventive-maintenance-Pdf'])

  }
}
