import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-sub-groupdetails',
  templateUrl: './sub-groupdetails.component.html',
  styleUrls: ['./sub-groupdetails.component.css']
})
export class SubGroupdetailsComponent implements OnInit {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR:any;
  value1:any;

  S_Date: any;
  E_Date: any;
  sub_group_detail_name : string = '';
  user_type_value : string = '';
  date_and_time : string = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  pet_type_list : any = [];
  pet_type_id : string = '';

  update_button : boolean;
  selectedimgae : any;


  rows1 : any;
  sub_group_name : any



  group_lists = [];
  group_list_name : any;

  job_no_list = [];
  job_no_name : any;

  group_status = [
    {status : "false"},
    {status : "true"}
  ]
  gorup_status_name : any

  form_type = [
    {status : "Input Type"},
    {status : "Image"},
    {status : "Table"},
    {status : "Approval"}
  ]
  form_type_name : any

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
    this.gorup_status_name = this.group_status[0];
    this.form_type_name = this.form_type[0];
    this.sub_group_detail_name = '';
    this.user_type_value = '0';
    // this.user_type_img = 'http://18.237.123.253:3000/api/uploads/template.jpg';
    this.pet_type_id = '';
    this.update_button = true;
    this.group_list();
    this.sub_group_list();

  }



  group_list() {
    this._api.groupdetail_list_subgroup().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.group_lists = response.Data;
        this.group_list_name = this.group_lists[0];
      }
    );
  }



  sub_group_list() {
    this._api.sub_groupdetail_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
      }
    );
  }



  cancel() {
    this.update_button = true;
    this.sub_group_detail_name= undefined;
  }
  ////// Inserting Data

  Insert_pet_type_details() {


    if(this.sub_group_detail_name == ''){
      //alert("Please enter the pet type")
      this.showWarning("Please enter the pet type")
    }else{
     console.log(this.group_list_name);
    let a = {
     'group_id' : this.group_list_name._id,
     'sub_group_detail_name': this.sub_group_detail_name,
     'sub_group_detail_created_at' : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
     'sub_group_detail_update_at' : "",
     'sub_group_detail_created_by' : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
     'sub_group_detail_updated_by' : "",
     'form_type':'1'
      };
    console.log(a);
    this._api.sub_groupdetail_insert(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      if ( response.Code === 200 ) {
        //alert('Added Successfully');
        this.showSuccess("Added Successfully")
      }else {
        //alert(response.Message);
        this.showError(response.Message)
      }
      this.ngOnInit();
    }
  );
    }
  }


  Edit_pet_type_details(){
    if(this.sub_group_detail_name == ''){
      //alert("Please enter the pet type")
      this.showWarning("Please enter the pet type")
    }else{
    let a = {
      '_id' : this.pet_type_id,
      'sub_group_detail_name' : this.sub_group_detail_name,
     };
    this._api.sub_groupdetail_edit(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      //alert("Updated Successfully");
      this.showSuccess("Updated Successfully")
      this.ngOnInit();
    }
  );
    }
  }



  Deletecompanydetails(data) {
    let a = {
      '_id' : data
     };
    console.log(a);
    this._api.sub_groupdetail_delete(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      //alert('Deleted Successfully');
      this.showSuccess("Deleted Successfully")
      this.ngOnInit();
    }
  );
  }


  Editcompanydetailsdata(data) {
    this.update_button = false;
    this.pet_type_id = data._id;
    this.sub_group_detail_name = data.sub_group_detail_name ;
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
        this._api.groupdetail_filter_date(a).subscribe(
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
      this.group_list();this.E_Date = undefined ; this.S_Date = undefined;
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


    selected_activity() {
      console.log(this.sub_group_name);
      let a  = {
        activedetail__id : this.sub_group_name._id
      }
      this._api.jobdetail_fetch_by_id(a).subscribe(
        (response: any) => {
          console.log("response.Data");
          console.log(response.Data);
          this.job_no_list = [];
          this.job_no_list = response.Data;
          this.job_no_name = this.job_no_list[0];
        }
      );
    }
    selected_job_no(){
      console.log(this.job_no_name);
    }

    savesubgroupstatus()
    {

    }


      add_field(data){
         this.storage.set('sub_group_detail',data);
        this.router.navigateByUrl('/admin/sub_field_management');
       }












}
