import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-dataentry-detail',
  templateUrl: './dataentry-detail.component.html',
  styleUrls: ['./dataentry-detail.component.css']
})
export class DataentryDetailComponent implements OnInit {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR:any;
  value1:any;

  S_Date: any;
  E_Date: any;
  Diagnosis : string = '';
  user_type_value : string = '';
  date_and_time : string = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  pet_type_list : any = [];
  pet_type_id : string = '';

  update_button : boolean;
  selectedimgae : any;


  user_list = [];
  activity_list = [];
  job_list = [];





  @ViewChild('imgType', { static: false }) imgType: ElementRef;

  constructor(
    private toastr:ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {

    this.Diagnosis = '';
    this.user_type_value = '0';
    // this.user_type_img = 'http://18.237.123.253:3000/api/uploads/template.jpg';
    this.pet_type_id = '';
    this.update_button = true;
    this.listpettype();
    this.list_data();
  }


  list_data(){
  this.user_list = [];
  this.activity_list = [];
  this.job_list = [];

  this._api.getlist_userdetail().subscribe(
    (response: any) => {
      console.log(response.Data);
      this.user_list = response.Data;
    }
  );

  this._api.new_groupdetail_list().subscribe(
    (response: any) => {
      console.log(response.Data);
      this.activity_list = response.Data;
    }
  );


  this._api.jobdetail_list().subscribe(
    (response: any) => {
      console.log(response.Data);
      this.job_list = response.Data;
    }
  );




  }



  listpettype() {
    var temp = [];
    this._api.data_entry_detail_list().subscribe(
      (response: any) => {

        response.Data.forEach(element => {
          if(element.work_status == 'Submitted'){
            temp.push(element);
          }
        });
        const ids = temp.map(o => o.job_id)
        const filtered = temp.filter(({job_id}, index) => !ids.includes(job_id, index + 1))
        this.rows = filtered;
        console.log(this.rows);
      }
    );
  }


  cancel() {
    this.update_button = true;
    this.Diagnosis= undefined;
  }
  ////// Inserting Data





  move_to_next(data){
    console.log(data);
    this.router.navigate(['/admin/singledataentry_detail/'+data._id]);
  }











    showSuccess(msg) {
      this.toastr.successToastr(msg);
    }

    showError(msg) {
        this.toastr.errorToastr(msg);
    }

    showWarning(msg) {
        this.toastr.warningToastr(msg);
    }



    Deletecompanydetails(data) {
      let a = {
        '_id' : data
       };
      console.log(a);
      this._api.entry_detail_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        //alert('Deleted Successfully');
        this.showSuccess("Deleted Successfully")
        this.ngOnInit();
      }
    );
    }


}
