import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-tab-chqcollection-list',
  templateUrl: './tab-chqcollection-list.component.html',
  styleUrls: ['./tab-chqcollection-list.component.css']
})
export class TabChqcollectionListComponent implements OnInit {

  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR:any;
  value1:any;

  S_Date: any;
  E_Date: any;
  job_detail_no : string = '';
  user_type_value : string = '';
  date_and_time : string = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  pet_type_list : any = [];
  pet_type_id : string = '';

  update_button : boolean;
  selectedimgae : any;


  rows1 : any;
  activity_name : any;



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

    this.job_detail_no = '';
    this.user_type_value = '0';
    // this.user_type_img = 'http://18.237.123.253:3000/api/uploads/template.jpg';
    this.pet_type_id = '';
    this.update_button = true;
    this.listpettype();
  }



  listpettype() {
    this._api.tab_chqcollection_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        console.log(this.rows);
      }
    );
  }











    filter_date() {
      if ( this.E_Date != undefined && this.S_Date != undefined) {
        // let yourDate = new Date(this.E_Date.getTime() + (1000 * 60 * 60 * 24));
        let yourDate= this.E_Date.setDate(this.E_Date.getDate() + 1);

        let a = {
          "fromdate":this.datePipe.transform(new Date(this.S_Date),'yyyy-MM-dd'),
          "todate" : this.datePipe.transform(new Date(yourDate),'yyyy-MM-dd')
          }
        console.log(a);
        this._api.tab_chqcollection_filter_date(a).subscribe(
          (response: any) => {
            console.log(response.Data);
            this.rows = response.Data;
          }
        );
      }
      else{
        this.showWarning("Please select the startdate and enddate");
        //alert('Please select the startdate and enddate');
      }

    }
    refersh(){
      this.listpettype();this.E_Date = undefined ; this.S_Date = undefined;
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


    saverange() {
    }


    view_joint_inspe_details(data){
      console.log(data);
      this.storage.set('tab_chqcollection_details',data);
      this.router.navigateByUrl('/admin/tab_chqcollection_view');
    }



}
