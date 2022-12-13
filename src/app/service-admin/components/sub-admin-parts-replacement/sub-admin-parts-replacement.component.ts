import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';


// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-sub-admin-parts-replacement',
  templateUrl: './sub-admin-parts-replacement.component.html',
  styleUrls: ['./sub-admin-parts-replacement.component.css']
})
export class SubAdminPartsReplacementComponent implements OnInit {
  rows:any;
  searchQR;
  access_loc:any=[];
  data:any;
  access_tocken:any
  Admin_check:any
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  // constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    console.log(this.access_tocken)
    if( this.access_tocken ==null){
      console.log("noo")
       this.router.navigateByUrl('/service-login');
     
    }else{
    this.access_loc = JSON.parse(sessionStorage.getItem('access_loc') );
    this.data ={
        "access_location":this.access_loc
      }
    this._api.parts_rep_dataget_subadmin(this.data).subscribe((response: any) => {
      this.rows=response['Data'];
      console.log( this.rows)
    })
  }
}
  refersh(){
    this._api.parts_rep_dataget_subadmin(this.data).subscribe((response: any) => {
      this.rows=response['Data'];
      console.log( this.rows)
    })
  }

  viewpdf(data){
    console.log(data);
    this.storage.set('job_detail',data);
    this.router.navigate(['/service-admin/parts-ack-pdf'])

  }
}
