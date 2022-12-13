import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';


// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-preventive-maintenance-pdf',
  templateUrl: './preventive-maintenance-pdf.component.html',
  styleUrls: ['./preventive-maintenance-pdf.component.css']
})
export class PreventiveMaintenancePdfComponent implements OnInit {
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
  areas_of_pm = '';
  remarks = '';
  tech_signature = '';
  customer_signature = '';
  signature_date  = '';






  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService, @Inject(SESSION_STORAGE) private storage: StorageService) { }




  ngOnInit(): void {
    let job_detail = this.storage.get('job_detail');
    console.log(job_detail);
    let datas = {
      job_id : job_detail.SMU_SCH_JOBNO,
      key_value:job_detail.SMU_SCH_COMPNO
    }
    this._api.preventive_data_management(datas).subscribe((response: any) => {
      console.log(response.Data);
      this.storaged_data = response.Data;
      this. areas_of_pm = response.Data.preventive_check;
      this.remarks = response.Data.action_req_customer;
      this.customer_signature =response.Data.customer_signature;
      this.bd_status = response.Data.pm_status;
      this.tech_signature =response.Data.tech_signature;
      
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
      this.signature_date  = response.Data.JOB_END_TIME;
      this.job_no = response.Data.SMU_SCH_JOBNO;
      this.customer_name = response.Data.SMU_SCH_CUSNAME;
      this.location = response.Data.SMU_SCH_CUSADD1 ||""+ "," + response.Data.SMU_SCH_CUSADD2||"" + "," + response.Data.SMU_SCH_CUSADD3||"" + "," + response.Data.SMU_SCH_CUSADD4||"" + "," + response.Data.SMU_SCH_CUSCODE||"";
      this.date = response.Data.SMU_SCH_CRTDT;


      this.nature_of_contract = response.Data.SMU_SCH_AMCTYPE;
      this.breakdown_no = response.Data.SMU_SCH_COMPNO;
      this.tech_name = response.Data.SMU_SCH_MECHANIC;
      this.employee_no = response.Data.SMU_SCH_EMPCODE;
      this.time_reported = response.Data.JOB_START_TIME;
      this.time_left = response.Data.JOB_END_TIME;


      this.type_of_bd = response.Data.SMU_SCH_BRKDOWNTYPE;
     
      this.areas_of_bd =this.storaged_data. pm_status;
   

      
    



      

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
