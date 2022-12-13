import { Component, OnInit,Inject ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-service-nav-bar',
  templateUrl: './service-nav-bar.component.html',
  styleUrls: ['./service-nav-bar.component.css']
})
export class ServiceNavBarComponent implements OnInit {

date:any;
  displayBasic: boolean;
  Admin_check:any;
  User_name:any;
  constructor(

    private router: Router,

    private http: HttpClient,

    @Inject(SESSION_STORAGE) private storage: StorageService


  ) { }

  ngOnInit(): void {
    this.User_name = JSON.parse(sessionStorage.getItem('User Name') );
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.date=new Date()
    console.log(this.date)
  }
  showBasicDialog() {
    this.displayBasic = true;
}

logout(){
  if(this.Admin_check==true) {
    this.router.navigateByUrl('sub-admin-login');
  sessionStorage.setItem("Sub_Admin_login", 'false');
 
  } else {
    this.router.navigateByUrl('service-login');
    sessionStorage.setItem("Sub_Admin_login", 'false');
 
  }
}
}
