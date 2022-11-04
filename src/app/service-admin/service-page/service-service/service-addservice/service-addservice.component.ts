import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl, } from '@angular/forms';
@Component({
  selector: 'app-service-addservice',
  templateUrl: './service-addservice.component.html',
  styleUrls: ['./service-addservice.component.css']
})
export class ServiceAddserviceComponent implements OnInit {
  group = [
    { "name": "Add New", },];
  job = [
    { "name": "Disabled", },
    { "name": "Enabled", }];
  admin= [
    { "name": "Requierd", },
    { "name": "Not Requierd", }];
  imei = [
      { "name": "Disabled", },
      { "name": "Enabled", }];

  serviceForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.serviceForm = this.formBuilder.group({
      _id: [''],
      service_Name: ['', Validators.required,],
      Description: ['', Validators.required,],
      group_name: ['', Validators.required,],
      approval: ['', Validators.required,],
      verfication: ['', Validators.required,],
      file: ['', Validators.required,],
      job_list:['',Validators.required,]

    })
  }

  ngOnInit(): void {
  }
  Insert_Agent() {
    this.router.navigate(['/service-admin/service-service']);
  }
}
