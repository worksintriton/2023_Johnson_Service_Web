import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service-sideadmin',
  templateUrl: './service-sideadmin.component.html',
  styleUrls: ['./service-sideadmin.component.css']
})
export class ServiceSideadminComponent implements OnInit {
  searchQR:any;
  rows=[{"first_name":"arun","mobile_phone":"8794561230","Email_id":"Arun@gmail.com","user_type":"Admin","user_name":"chennai","password":"Nokia","mobile_make":"HMD","imei":"321546687"}]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  add(){
    this.router.navigate(['/service-admin/service-add-admin'])
  }
  refersh(){

  }

}
