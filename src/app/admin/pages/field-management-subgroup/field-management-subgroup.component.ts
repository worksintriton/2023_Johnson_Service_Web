import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-field-management-subgroup',
  templateUrl: './field-management-subgroup.component.html',
  styleUrls: ['./field-management-subgroup.component.css']
})
export class FieldManagementSubgroupComponent implements OnInit {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR:any;
  value1:any;

  S_Date: any;
  E_Date: any;

  service_name : string = '';

  cat_id :  String = '61a8b8752d9a15335c1e511f';
  field_name : String = '';
  field_type : any;
  field_length : String = '';
  field_comments : String = '';
  field_update_reason : String = '';
  date_of_create : String = '';
  date_of_update : String = '';
  created_by : String = 'Admin';
  updated_by : String = 'Admin';
  rows1 = [{diagnosis :"String"},{diagnosis :"Textarea"},{diagnosis :"Number"},{diagnosis :"Dropdown"},{diagnosis :"Date&time"},{diagnosis :"File upload"},{diagnosis :"Signature"},{diagnosis :"Lift"}];
  user_type_value : string = '';
  date_and_time : string = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  pet_type_list : any = [];
  pet_type_id : string = '';

  update_button : boolean;
  selectedimgae : any;
  dropdown_option = [];
  dropdown_text = '';




  group_list = [];
  sb_group_list_name : any;

  group_list_name : any;

group_name = '';

  sub_group_lists = [];
  sub_group_lists_name : any;

  form = false;


  sub_group_name = '';

  @ViewChild('imgType', { static: false }) imgType: ElementRef;

  constructor(
    private toastr:ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute,
    private datePipe: DatePipe,
  ) {


    var datas = this.storage.get('sub_group_detail');
    this.sb_group_list_name = datas;
    this.sub_group_name = this.sb_group_list_name.sub_group_detail_name

   }

  ngOnInit(): void {
    this.field_type = this.rows1[3];
    this.service_name = '';
    this.user_type_value = '0';
    this.field_comments = '';
    // this.user_type_img = 'http://18.237.123.253:3000/api/uploads/template.jpg';
    this.pet_type_id = '';
    this.update_button = true;
    this.listpettype();
    this.group_lists();
    // this.sub_group_list();
  }



  listpettype() {
    // this._api.Field_list().subscribe(
    //   (response: any) => {
    //     console.log(response.Data);
    //     this.rows = response.Data;
    //     this.pet_type_list = response.Data;
    //     console.log(this.pet_type_list);
    //   }
    // );

       let a = {
        sub_group_id : this.sb_group_list_name._id
       }
      this._api.Field_list_by_sub_group(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.pet_type_list = response.Data;
        console.log(this.pet_type_list);
      }
    );

  }


  cancel() {
    this.update_button = true;
    this.service_name= undefined;
  }
  ////// Inserting Data

  Insert_pet_type_details() {
    if(this.field_name == ''){
      //alert("Please enter the pet type")
      this.showWarning("Please enter the Field name")
    }
    else if(this.sb_group_list_name._id == undefined ){
      this.showWarning("Please Select Name or refresh the page")
    }
    else{
    let lifts = [];
    console.log(this.sub_group_lists_name);
    let sub_group_id = '';
    if(this.sub_group_lists_name == undefined){
      sub_group_id = ''
    }else{
      sub_group_id = this.sub_group_lists_name._id;
    }
    if(this.field_type.diagnosis == 'Lift'){
      for(let c = 0 ; c < +this.field_length; c ++ ){
        let temp = c + 1 ;
        let d = {
          "left": "",
          "title":""+c+" - "+ temp,
        }
        lifts.push(d)
      }
    }


  let a = {
  cat_id :  this.cat_id,
  group_id : this.group_list_name._id,
  sub_group_id : this.sb_group_list_name._id,
  field_name : this.field_name,
  field_type : this.field_type.diagnosis,
  field_length : this.field_length,
  field_comments : this.field_comments,
  field_update_reason : this.field_update_reason,
  drop_down : this.dropdown_option,
  date_of_create : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
  date_of_update : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
  created_by : this.created_by,
  updated_by : this.updated_by,
  lift_list : lifts,
      };
    console.log(a);
    this._api.Field_insert(a).subscribe(
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
    let  lifts = [];
    if(this.field_type.diagnosis == 'Lift'){
      for(let c = 0 ; c < +this.field_length; c ++ ){
        let temp = c + 1 ;
        let d = {
          "left": "",
          "title":""+c+" - "+ temp,
        }
        lifts.push(d)
      }
    }
      let a = {
      "field_name" : this.field_name,
      "field_type" : this.field_type.diagnosis,
      "field_length" : this.field_length,
      "field_comments" : this.field_comments,
      "field_update_reason" : this.field_update_reason,
      "drop_down" : this.dropdown_option,
      "lift_list" : lifts,
      '_id' : this.pet_type_id,
     };
    this._api.Field_edit(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      //alert("Updated Successfully");
      this.showSuccess("Updated Successfully")
      this.ngOnInit();
    }
  );
  }



  Deletecompanydetails(data) {
    let a = {
      '_id' : data
     };
    console.log(a);
    this._api.Field_delete(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      //alert('Deleted Successfully');
      this.showSuccess("Deleted Successfully")
      this.ngOnInit();
    }
  );
  }


  Editcompanydetailsdata(data) {
    this.add_form();
    this.pet_type_id = data._id;
    let group_name = {};
    this.group_list.forEach(element => {
      if(element._id == data.group_id){
        group_name = element
      }
    });
    this.update_button = false;
    this.dropdown_option = data.drop_down;
    this.field_name = data.field_name;
    this.field_type = {diagnosis:data.field_type}
    this.field_length = data.field_length;
    this.field_comments = data.field_comments;
    this.field_update_reason = data.field_update_reason;
    this.group_list_name = group_name;

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
        this._api.Field_filter_date(a).subscribe(
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


    add_dropdown(){
      if(this.dropdown_text == '')
      {
       alert("Please enter the dropdown text");
      }else{
        this.dropdown_option.push(this.dropdown_text);
        this.dropdown_text = '';
      }
    }


    delete_dropdown(index){
     this.dropdown_option.splice(index,1);
    }


    group_lists(){
      this._api.groupdetail_list_subgroup().subscribe(
        (response: any) => {
          console.log(response.Data);
          this.group_list = response.Data;
          var datas = this.storage.get('sub_group_detail');
          console.log(datas);
          this.group_list.forEach(element => {
            if(element._id == datas.group_id){
              this.group_name = element.SMU_UKEY_DESCRIPTION;
              this.group_list_name = element;
            }
          });
          // this.group_list_name = datas;
          // console.log(this.group_list_name);
          // this.group_name = this.group_list_name.sub_group_detail_name
        }
      );
    }

    // sub_group_list() {
    //   this._api.sub_groupdetail_list().subscribe(
    //     (response: any) => {
    //       console.log(response.Data);
    //       this.sub_group_lists = response.Data;
    //     }
    //   );
    // }

    add_form(){
      this.form = true;
    }

    hide_form(){
      this.form = false;
    }


}
