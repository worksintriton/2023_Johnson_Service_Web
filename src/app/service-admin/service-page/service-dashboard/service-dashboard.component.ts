import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css']
})
export class ServiceDashboardComponent implements OnInit {
  access_tocken:any
  Admin_check:any

  constructor(
    private router: Router,
    private routes: ActivatedRoute
  ) { }

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
}
