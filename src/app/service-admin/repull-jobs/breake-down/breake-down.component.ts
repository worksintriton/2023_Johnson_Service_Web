import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-breake-down',
  templateUrl: './breake-down.component.html',
  styleUrls: ['./breake-down.component.css']
})
export class BreakeDownComponent implements OnInit {
  rows:any;
  searchQR;
  access_tocken:any
  Admin_check:any;
  user_mobile_no:any;
  constructor(private router:Router,private _api: ApiService,    
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit(): void {

     
    
// const hexString6 = '6c87';
// console.log("hexString 6c87",hex2Bin(hexString6));

   
// const hexString = '3807';
// console.log("hexString 3807",hex2Bin(hexString));

// const hexString1 = '0040';
// console.log("hexString 0040",hex2Bin(hexString1));

// const hexString2 = '6985';
// console.log("hexString 6985",hex2Bin(hexString2));

// const hexString4 = '6a85';
// console.log("hexString 6a85",hex2Bin(hexString4));

// const hexString5 = '6b85';
// console.log("hexString 6b85",hex2Bin(hexString5));


// const hexString3 = '3802';
// console.log("hexString 3802",hex2Bin(hexString3));


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
  this._api.breakdown_oracel_data(obj).subscribe((response: any) => {
    this.rows=response['Data'];
    console.log( this.rows)
  })
}
  refersh(){
    var obj={
      user_mobile_no:this.user_mobile_no
    }
    this._api.breakdown_oracel_data(obj).subscribe((response: any) => {
      this.rows=response['Data'];
      console.log( this.rows)
    })
  }

}
