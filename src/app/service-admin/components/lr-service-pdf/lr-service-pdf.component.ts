import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';


// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-lr-service-pdf',
  templateUrl: './lr-service-pdf.component.html',
  styleUrls: ['./lr-service-pdf.component.css']
})
export class LrServicePdfComponent implements OnInit {


  rows: any;

  storaged_data: any;



  searchQR;
  lr_number = '';
  iso_number = '';
  branch_name = '';
  address1 = '';
  address2 = '';
  address3 = '';
  address4 = '';
  pin = '';
  job_no = '';
  customer_name = '';
  location = '';
  date = '';
  serv_type = ';'
  nature_of_contract = '';
  breakdown_no = '';
  tech_name = '';
  employee_no = '';
  time_reported = '';
  time_left = '';
  type_of_bd = '';
  bd_status = '';
  areas_of_bd = '';
  remarks = '';
  tech_signature = '';
  tecn_name = '';
  customer_signature = '';
  signature_date = '';
  customer_num = '';
  qo_num = '';
  cus_signature ='';



  constructor(private router: Router, private toastr: ToastrManager, private _api: ApiService, @Inject(SESSION_STORAGE) private storage: StorageService) { }




  ngOnInit(): void {
    let job_detail = this.storage.get('job_detail');
    console.log(job_detail, "one");
    let datas = {
      job_id: job_detail.SMU_SCQH_JOBNO,
      key_value: job_detail.SMU_SCQH_QUOTENO
    }
    //this
    this._api.lr_data_details(datas).subscribe((response: any) => {
      console.log(response.Data, "two");
      this.storaged_data = response.Data;

      this.address1 = response.Data.SMU_SED_ADDRESS1;
      this.address2 = response.Data.SMU_SED_ADDRESS2;
      this.address3 = response.Data.SMU_SED_ADDRESS3;
      this.address4 = response.Data.SMU_SED_ADDRESS4;
      this.pin = response.Data.SMU_SED_PINCODE;
      this.job_no = response.Data.SMU_SCQH_JOBNO;
      this.date = response.Data.SMU_SCQH_QUOTEDT;
      this.serv_type = response.Data.SMU_SED_SERTYPE;
      this.time_left = response.Data.JOB_END_TIME;
      this.time_reported = response.Data.JOB_START_TIME;
      this.tecn_name = response.Data.SMU_SCAH_MECHANIC;
      this.qo_num=response.Data.SMU_SCQH_QUOTENO;
      this.lr_number=response.Data.SMU_SCQH_LRNO;
      console.log( this.time_left )
    })

    // let a = {
    //   ISO_DRH_MODULE : 'BREAKDOWN',
    //   ISO_DRH_LETYPE : 'L'
    // }
    // this._api.fetch_iso_number(a).subscribe((response: any) => {
    //   console.log(response.Data);
    //   this.iso_number = response.Data[0].ISO_DRH_DOCNO;
    // })



    this._api.fetch_branch_address(datas).subscribe((response: any) => {
      console.log(response.Data);
      this.branch_name = response.Data[0].BRANCNAME;
    })

    //this
    this._api.fetch_lr_service_detail(datas).subscribe((response: any) => {
      console.log(response.Data,"service");
     
      this.tech_signature =response.Data.techSignature;
      this.cus_signature =response.Data.customerAcknowledgement;
      this.remarks = response.Data.remarks;
      this.customer_name = response.Data.customerName;
      this.customer_num = response.Data.customerNo;
      this.location = response.Data.SMU_SCH_CUSADD1 + "," + response.Data.SMU_SCH_CUSADD2 + "," + response.Data.SMU_SCH_CUSADD3 + "," + response.Data.SMU_SCH_CUSADD4 + "," + response.Data.SMU_SCH_CUSCODE;
      


      this.nature_of_contract = response.Data.SMU_SCH_AMCTYPE;
      this.breakdown_no = response.Data.SMU_SCH_COMPNO;
      
      this.employee_no = response.Data.SMU_SCH_EMPCODE;
     
    
      
      this.type_of_bd = response.Data.SMU_SCH_BRKDOWNTYPE;
      this.bd_status = this.storaged_data.breakdown_service;
      this.areas_of_bd = 'Breakdown , Breakdown1 , Break Down 3';
      

  
      this.customer_signature = this.storaged_data.customer_acknowledgemnet;
      this.signature_date = this.storaged_data.date_of_submission;





    })







  }




  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    document.title = this.lr_number;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }



}
