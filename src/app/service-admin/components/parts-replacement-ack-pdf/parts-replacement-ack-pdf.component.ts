import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';


// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-parts-replacement-ack-pdf',
  templateUrl: './parts-replacement-ack-pdf.component.html',
  styleUrls: ['./parts-replacement-ack-pdf.component.css']
})
export class PartsReplacementAckPdfComponent implements OnInit {
  mat_data:any;
  rows:any;

  storaged_data : any;

  
  
  searchQR;
  comp_number = '';
  mr_number = '';
  ref_number = '';
  branch_name = '';
address1 ='';
address2 ='';
address3 ='';
address4 ='';
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
  mec_sign = '';
  signature_date  = '';
  pin = '';
  serv_type = '';
  mat_id = '';
  mat_quan = '';
  mat_seq_no = '';






  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService, @Inject(SESSION_STORAGE) private storage: StorageService) { }




  ngOnInit(): void {
    let job_detail = this.storage.get('job_detail');
    console.log(job_detail);
    this.comp_number=job_detail.SMU_ACK_COMPNO;
    let datas = {
      job_id : job_detail.SMU_ACK_JOBNO,
      key_value: job_detail.SMU_ACK_COMPNO
    }
    let datas1 = {

      SMU_ACK_COMPNO: job_detail.SMU_ACK_COMPNO
    }
    // form format
    this._api.parts_rep_data_details(datas).subscribe((response: any) => {
      console.log(response.Data,"one");
      this.storaged_data = response.Data;
      this.customer_name =response.Data.SMU_ACK_ENGRNAME;
      this.tech_name = response.Data.SMU_ACK_ENGRNAME;
      this.job_no = response.Data.SMU_ACK_JOBNO;
      this.address1 = response.Data.SMU_ACK_ADDRESS1;
      this.address2 = response.Data.SMU_ACK_ADDRESS2;
      this.address3 = response.Data.SMU_ACK_ADDRESS3;
      this.address4 = response.Data.SMU_ACK_ADDRESS4;
      this.pin = response.Data.SMU_ACK_APINCODE;
      this.date = response.Data.SMU_ACK_DCDT;
      this.time_reported = response.Data.JOB_START_TIME;
      this.time_left = response.Data.JOB_END_TIME;
      this.serv_type = response.Data.SMU_ACK_SERTYPE;
      this.mr_number = response.Data.SMU_ACK_REQNO;
      this.ref_number  = response.Data.SMU_ACK_MRSEQNO;

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

// form sub
    this._api.fetc_parts_rep_mat_detail(datas1).subscribe((response: any) => {
      

this.mat_data=response.Data;
console.log(this.mat_data,"two");
  


     
  
      this.location = response.Data.SMU_SCH_CUSADD1 + "," + response.Data.SMU_SCH_CUSADD2 + "," + response.Data.SMU_SCH_CUSADD3 + "," + response.Data.SMU_SCH_CUSADD4 + "," + response.Data.SMU_SCH_CUSCODE;



      this.nature_of_contract = response.Data.SMU_SCH_AMCTYPE;
      this.breakdown_no = response.Data.SMU_SCH_COMPNO;
      
      this.employee_no = response.Data.SMU_SCH_EMPCODE;
   


      this.type_of_bd = response.Data.SMU_SCH_BRKDOWNTYPE;
      this.bd_status = this.storaged_data.breakdown_service;
      this.areas_of_bd = 'Breakdown , Breakdown1 , Break Down 3';
      this.remarks = this.storaged_data.feedback_remark_text

      this.tech_signature = this.storaged_data.tech_signature;
   
      this.signature_date  = this.storaged_data.date_of_submission;



      

    })


    this._api.fetch_sumbmitted_data_partrep(datas).subscribe((response: any) => {
      console.log(response.Data);
      this.customer_signature = response.Data.customerAcknowledgement;
      this.mec_sign = response.Data.techSignature;
  
    })


  }




  printComponent(cmpName) {
     let printContents = document.getElementById(cmpName).innerHTML;
     let originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     document.title = this.mr_number;
     window.print();
     document.body.innerHTML = originalContents;
     window.location.reload();
}



}
