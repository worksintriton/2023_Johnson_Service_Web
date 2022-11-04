import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-tab-chqcollection-view',
  templateUrl: './tab-chqcollection-view.component.html',
  styleUrls: ['./tab-chqcollection-view.component.css']
})
export class TabChqcollectionViewComponent implements OnInit {

  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR:any;
  value1:any;

  details : any;

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

    this.details = this.storage.get('tab_chqcollection_details');
    console.log(this.details);


    this.update_button = true;
  }


  viewimage(data){
    window.open(data);
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








    printComponent(cmpName) {
      let printContents = document.getElementById(cmpName).innerHTML;
      let originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
 }


}
