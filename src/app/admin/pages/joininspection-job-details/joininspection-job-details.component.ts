import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-joininspection-job-details',
  templateUrl: './joininspection-job-details.component.html',
  styleUrls: ['./joininspection-job-details.component.css']
})
export class JoininspectionJobDetailsComponent implements OnInit {


  job_detail : any;

  job_list_detail : any;
 table_data : any;

  constructor(
    private toastr:ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute,
    private datePipe: DatePipe,
  ) {


    var datas = this.storage.get('joint_inspection_detail');
    console.log(datas);
    this.job_detail = datas;


   }

  ngOnInit(): void {
    let job_id = {
      job_id :  this.job_detail.job_id,
      group_id : this.job_detail.group_id,
      sub_group_id : this.job_detail.sub_group_id._id
    }
    console.log(job_id);
    this._api.Joint_inspection_jobdetail_fetch_by_id(job_id).subscribe(
      (response: any) => {
        console.log("response.Data");
        console.log(response.Data);
        this.job_list_detail = response.Data;
        this.table_data =  this.job_list_detail[0].data_store;
      }
    );
  }

}
