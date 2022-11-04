import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';


// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';




@Component({
  selector: 'app-job-break-down',
  templateUrl: './job-break-down.component.html',
  styleUrls: ['./job-break-down.component.css']
})
export class JobBreakDownComponent implements OnInit {
  rows:any;
  searchQR;
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  // constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getbreak_down().subscribe((response: any) => {
      this.rows=response['Data'];
      console.log( this.rows)

  
    })
  }
  refersh(){
  }

  viewpdf(data){
    console.log(data);
    this.storage.set('job_detail',data);
    this.router.navigate(['/service-admin/Breakdownservice-Pdf'])

  }
}
