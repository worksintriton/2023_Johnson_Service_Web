import { Component, OnInit,Inject } from '@angular/core';
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
  constructor(

    private router: Router,

    private http: HttpClient,

    @Inject(SESSION_STORAGE) private storage: StorageService


  ) { }

  ngOnInit(): void {
    this.date=new Date()
    console.log(this.date)
  }
  showBasicDialog() {
    this.displayBasic = true;
}

logout(){
  this.router.navigateByUrl('');
}
}
