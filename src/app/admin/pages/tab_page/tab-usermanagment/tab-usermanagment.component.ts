import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-tab-usermanagment',
  templateUrl: './tab-usermanagment.component.html',
  styleUrls: ['./tab-usermanagment.component.css']
})
export class TabUsermanagmentComponent implements OnInit {

  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR:any;
  value1:any;

  S_Date: any;
  E_Date: any;
  activedetail_name : string = '';
  user_type_value : string = '';
  date_and_time : string = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  pet_type_list : any = [];
  pet_type_id : string = '';

  update_button : boolean;
  selectedimgae : any;

  user_id :any;
  user_name :any;
  user_email_id :any;
  user_password :any;
  user_designation :any;
  user_type :any;
  user_status :any;
  user_role : any;
  reg_date_time = ""+new Date();


  user_location :any;
  user_agent_code :any;
  user_status_us_on_date :any;
  user_imei_no :any;




  user_type_list = [
    {status : "Mobile"},
    {status : "Desktop"},
    {status : "Mobile & Desktop"},
   ];

   user_status_list = [
    {status : "Available"},
    {status : "Not Available"}
   ];

   user_designation_list  =
   [
    {status : "Admin"},
    {status : "Manager"},
    {status : "Field Visit"},
    {status : "Operation"},
    {status : "Mobile User"}
   ];

    user_role_list  =
   [
    {status : "ESPD"},
    {status : "OP"}
   ];





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

    this.activedetail_name = '';
    this.user_type_value = '0';
    // this.user_type_img = 'http://18.237.123.253:3000/api/uploads/template.jpg';
    this.pet_type_id = '';
    this.update_button = true;
    this.listpettype();
  }



  listpettype() {
    this._api.tab_getlist_userdetail().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        console.log(this.pet_type_list);
      }
    );
  }


  cancel() {
    this.update_button = true;
    this.activedetail_name= undefined;
    this.clear_data();
  }
  ////// Inserting Data

  Insert_pet_type_details() {
    if(this.user_id == ''){
      //alert("Please enter the pet type")
      this.showWarning("Please enter the user id")
    }else{
    let a = {
      'user_id'  : ""+this.user_id,
      'user_name'  : this.user_name,
      'user_password'  : this.user_password,
      'user_location' : this.user_location,
      'user_agent_code'  : this.user_agent_code,
      'user_status'  : this.user_status,
      'user_status_us_on_date' : ""+new Date(),
      'user_imei_no'  : this.user_imei_no,
      };
    console.log(a);
    this._api.tab_userdetail_insert(a).subscribe(
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
      this.clear_data();
    }
  );
    }
  }


  Edit_pet_type_details(){
    let a = {
      '_id' : this.pet_type_id,
      'user_id'  : ""+this.user_id,
      'user_name'  : this.user_name,
      'user_password'  : this.user_password,
      'user_location' : this.user_location,
      'user_agent_code'  : this.user_agent_code,
      'user_status'  : this.user_status,
      'user_status_us_on_date' : ""+new Date(),
      'user_imei_no'  : this.user_imei_no,
     };
    this._api.tab_userdetail_edit(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      //alert("Updated Successfully");
      this.showSuccess("Updated Successfully");
      this.clear_data();
      this.ngOnInit();
    }
  );
  }



  Deletecompanydetails(data) {
    let a = {
      '_id' : data
     };
    console.log(a);
    this._api.tab_userdetail_delete(a).subscribe(
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
      this.user_id = data.user_id;
      this.user_name =  data.user_name;
      this.user_password=  data.user_password;
      this.user_location=  data.user_location;
      this.user_agent_code=  data.user_agent_code;
      this.user_status=  data.user_status;
      this.user_status_us_on_date =  ""+new Date();
      this.user_imei_no = data.user_imei_no
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
        this._api.userdetail_filter_date(a).subscribe(
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

    clear_data(){
      this.user_id = "";
      this.user_name =  "";
      this.user_password=  "";
      this.user_location=  "";
      this.user_agent_code=  "";
      this.user_status= "";
      this.user_status_us_on_date =  ""+new Date();
      this.user_imei_no = "";
    }

}
