import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';


// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-breakdownservice-pdf',
  templateUrl: './breakdownservice-pdf.component.html',
  styleUrls: ['./breakdownservice-pdf.component.css']
})
export class BreakdownservicePdfComponent implements OnInit {

  rows:any;

  storaged_data : any;

  
  
  searchQR;

  iso_number = '';
  branch_name = '';

  job_no = '';
  customer_name = '';
  location = '';
  date = '';
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
  customer_signature = '';
  signature_date  = '';






  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService, @Inject(SESSION_STORAGE) private storage: StorageService) { }




  ngOnInit(): void {
    let job_detail = this.storage.get('job_detail');
    console.log(job_detail);
    let datas = {
      job_id : job_detail.SMU_SCH_JOBNO
    }
    this._api.breakdown_data_details(datas).subscribe((response: any) => {
      console.log(response.Data);
      this.storaged_data = response.Data;
    })

    let a = {
      ISO_DRH_MODULE : 'BREAKDOWN',
      ISO_DRH_LETYPE : 'L'
    }
    this._api.fetch_iso_number(a).subscribe((response: any) => {
      console.log(response.Data);
      this.iso_number = response.Data[0].ISO_DRH_DOCNO;
    })



    this._api.fetch_branch_address(datas).subscribe((response: any) => {
      console.log(response.Data);
      this.branch_name = response.Data[0].BRANCNAME;
    })


    this._api.fetch_breakdown_job_detail(datas).subscribe((response: any) => {
      console.log(response.Data);

      this.job_no = response.Data.SMU_SCH_JOBNO;
      this.customer_name = response.Data.SMU_SCH_CUSNAME;
      this.location = response.Data.SMU_SCH_CUSADD1 + "," + response.Data.SMU_SCH_CUSADD2 + "," + response.Data.SMU_SCH_CUSADD3 + "," + response.Data.SMU_SCH_CUSADD4 + "," + response.Data.SMU_SCH_CUSCODE;
      this.date = response.Data.SMU_SCH_CRTDT;


      this.nature_of_contract = response.Data.SMU_SCH_AMCTYPE;
      this.breakdown_no = response.Data.SMU_SCH_COMPNO;
      this.tech_name = response.Data.SMU_SCH_MECHANIC;
      this.employee_no = response.Data.SMU_SCH_EMPCODE;
      this.time_reported = response.Data.JOB_START_TIME;
      this.time_left = response.Data.JOB_END_TIME;


      this.type_of_bd = response.Data.SMU_SCH_BRKDOWNTYPE;
      this.bd_status = this.storaged_data.breakdown_service;
      this.areas_of_bd = 'Breakdown , Breakdown1 , Break Down 3';
      this.remarks = this.storaged_data.feedback_remark_text

      this.tech_signature = this.storaged_data.tech_signature;
      this.customer_signature = this.storaged_data.customer_acknowledgemnet;
      this.signature_date  = this.storaged_data.date_of_submission;



      

    })


    

    


  }




  printComponent(cmpName) {
     let printContents = document.getElementById(cmpName).innerHTML;
     let originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
     window.location.reload();
}



}
