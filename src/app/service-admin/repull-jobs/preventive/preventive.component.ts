import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.css']
})
export class PreventiveComponent implements OnInit {

  rows:any;
  searchQR;
  access_tocken:any
  Admin_check:any;
  user_mobile_no:any;
  constructor(private router:Router,private _api: ApiService,    
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    console.log(this.access_tocken)
    if( this.access_tocken ==null){
      console.log("noo")
       this.router.navigateByUrl('/service-login');
     
    }else{
  
  }
}

getRecords(){
  debugger
  var obj={
    user_mobile_no:this.user_mobile_no
  }
  this._api.preventive_oracel_data(obj).subscribe((response: any) => {
    this.rows=response['Data'];
    console.log( this.rows)
  })
}
  refersh(){
    var obj={
      user_mobile_no:this.user_mobile_no
    }
    this._api.preventive_oracel_data(obj).subscribe((response: any) => {
      this.rows=response['Data'];
      console.log( this.rows)
    })
  }

}
