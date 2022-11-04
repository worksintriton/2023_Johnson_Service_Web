import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { log } from 'util';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

// import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email_id: string;
  passwords: string;
  phone_number: number;
  data: any;
  selectedAudio1: any;
  Pic: any;



  loginDetails: any;
  userData: any;
  validation = false;

  loginError = false;
  loginErrorMsg: any;

  email: any;
  emailError = false;
  emailErrorMsg: any;


  password: any;
  passwordError = false;
  passwordErrorMsg: any;


  // socialUser: SocialUser;
  isLoggedin: boolean;

  constructor(
    private router: Router,
    private http: HttpClient,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,

    // private socialAuthService: SocialAuthService


  ) {

  }

  ngOnInit() {

  }
  emailValidator() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.email);
    if (this.email === '' || this.email === undefined || this.email === null) {
      this.emailError = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError = false;
    }
  }
  passwordValidator() {
    if (this.password === '' || this.password === undefined || this.password === null) {
      this.passwordError = true;
      this.passwordErrorMsg = 'Password Required.'
    } else {
      this.passwordError = false;
    }
  }

  emailChange(data) {
    //console.log(data);
    this.email = data;
    this.emailValidator();
  }

  passwordChange(data) {
    //console.log(data);
    this.password = data;
    this.passwordValidator();
  }

  validator() {
    this.emailValidator();
    this.passwordValidator();
    if (!this.emailError && !this.passwordError) {
      this.validation = true;
    } else {
      this.validation = false;
    }
  }

  logintest1() {
    this.validator();
    if (this.validation) {
      if ((this.email == 'johnson@gmail.com') && (this.password == '12345')) {
        this.router.navigateByUrl('/admin/dashboard');
      } else {
        alert('Invalid Account');
      }
    }
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }



}

