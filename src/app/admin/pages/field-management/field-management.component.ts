import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';



@Component({
  selector: 'app-field-management',
  templateUrl: './field-management.component.html',
  styleUrls: ['./field-management.component.css']
})
export class FieldManagementComponent implements OnInit {
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

  index = 0;
  update_index_change = 0;
  check_index = 0;
  count_down = 0;
  loader_display = false;




  group_list = [];
  group_list_name : any;

group_name = '';

  sub_group_lists = [];
  sub_group_lists_name : any;

  form = false;


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




   }

  ngOnInit(): void {
    this.clear_text();
    this.update_index_change = 0;
    this.rows = [];
    var datas = this.storage.get('group_detail');
    console.log(datas);
    this.group_list_name = datas;
    console.log(this.group_list_name);
    this.group_name = this.group_list_name.group_detail_name


    this.field_type = this.rows1[3];
    this.service_name = '';
    this.user_type_value = '0';
    this.field_comments = '';
    // this.user_type_img = 'http://18.237.123.253:3000/api/uploads/template.jpg';
    this.pet_type_id = '';
    this.update_button = true;
    this.listpettype();
    // this.group_lists();
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
        group_id : this.group_list_name._id
       }
      this._api.Field_list_by_group(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.index = this.rows.length + 1;
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


    if(this.index < this.rows.length){
      this.calculation();
     }
     else
    {
    let numbers = this.index;
    let datas = this.rows;
    let api = this._api;
   console.log(this.group_list_name);
    if(this.field_name == ''){
      //alert("Please enter the pet type")
      this.showWarning("Please enter the Field name")
    }
    else if(this.group_list_name._id == undefined ){
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
        let d = {
          "left": ""
        }
        lifts.push(d)
      }
    }
  let a = {
  cat_id :  this.cat_id,
  index : this.index,
  group_id : this.group_list_name._id,
  sub_group_id : sub_group_id,
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
        this.showSuccess("Added Successfully");
        // this.recall(numbers,datas,api);
      }else {
        //alert(response.Message);
        this.showError(response.Message)
      }
      this.ngOnInit();
    }
  );
    }
  }
  }




  Edit_pet_type_details(){

    if(this.update_index_change == this.index){
      let a = {
      "cat_id" :  this.cat_id,
      "index" : this.index,
      "group_id" : this.group_list_name._id,
      "field_name" : this.field_name,
      "field_type" : this.field_type.diagnosis,
      "field_length" : this.field_length,
      "field_comments" : this.field_comments,
      "field_update_reason" : this.field_update_reason,
      "drop_down" : this.dropdown_option,
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
    this.loader_display = true;
    let numbers = this.index;
    this.rows.splice(this.check_index,1);
    let datas = this.rows;
    let api = this._api;
    let a = {
      "cat_id" :  this.cat_id,
      "index" : this.index,
      "group_id" : this.group_list_name._id,
      "field_name" : this.field_name,
      "field_type" : this.field_type.diagnosis,
      "field_length" : this.field_length,
      "field_comments" : this.field_comments,
      "field_update_reason" : this.field_update_reason,
      "drop_down" : this.dropdown_option,
      '_id' : this.pet_type_id,
     };
    this._api.Field_edit(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      //alert("Updated Successfully");
      this.showSuccess("Updated Successfully")
      this.recall(numbers,datas,api);
      // this.ngOnInit();
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
      this.showSuccess("Deleted Successfully");
      this.rearrange();
      this.ngOnInit();
    }
  );
  }


  Editcompanydetailsdata(data,check_index) {
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
    this.index = data.index;
    this.update_index_change =  data.index;
    this.field_type = {diagnosis:data.field_type}
    this.field_length = data.field_length;
    this.field_comments = data.field_comments;
    this.field_update_reason = data.field_update_reason;
    this.group_list_name = group_name;
    this.check_index = check_index;

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
      this._api.groupdetail_list().subscribe(
        (response: any) => {
          console.log(response.Data);
          this.group_list = response.Data;
          var datas = this.storage.get('group_detail');
          console.log(datas);
          this.group_list_name = datas;
          console.log(this.group_list_name);
          this.group_name = this.group_list_name.group_detail_name
        }
      );
    }

    sub_group_list() {
      this._api.sub_groupdetail_list().subscribe(
        (response: any) => {
          console.log(response.Data);
          this.sub_group_lists = response.Data;
        }
      );
    }

    add_form(){
      this.form = true;
    }

    hide_form(){
      this.form = false;
    }


    recall(numbers,datas,api){
      this.index_value(numbers);
      let temp_value = datas[numbers - 1];
      if(numbers == datas.length){
        let a = {
         '_id' : temp_value._id,
         'index' : numbers + 1
        };
        console.log(a);
       api.Field_edit(a).subscribe(
       (response: any) => {
       // alert('Task Completed');
       this.stop();

       }
     );
      }else{
       let a = {
         '_id' : temp_value._id,
         'index' : numbers + 1
        };
        console.log(a);
       api.Field_edit(a).subscribe(
       (response: any) => {
       numbers = numbers + 1;
       this.recall(numbers,datas,api);
       }
     );
      }
     }

    stop(){
      this.loader_display = false;
      this.showSuccess("Added Successfully");
      this.ngOnInit();
     }
     index_value(value){
      this.count_down = value;
     }


     rearrange(){
       this.loader_display = true;
       let temp = {
        group_id : this.group_list_name._id
       }
      this._api.fielddetail_rearrange(temp).subscribe(
        (response: any) => {
          this.showSuccess("Re-arrange Completed");
          this.loader_display = false;
          this.ngOnInit();
        }
      );
     }



     calculation(){
      {
        let numbers = this.index;
        let datas = this.rows;
        let api = this._api;
       console.log(this.group_list_name);
        if(this.field_name == ''){
          //alert("Please enter the pet type")
          this.showWarning("Please enter the Field name")
        }
        else if(this.group_list_name._id == undefined ){
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
            let d = {
              "left": ""
            }
            lifts.push(d)
          }
        }
      let a = {
      cat_id :  this.cat_id,
      index : this.index,
      group_id : this.group_list_name._id,
      sub_group_id : sub_group_id,
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
            this.showSuccess("Added Successfully");
            this.recall(numbers,datas,api);
          }else {
            //alert(response.Message);
            this.showError(response.Message)
          }
          this.ngOnInit();
        }
      );
        }
      }
     }


     clear_text(){
       this.field_name = '';
       this.field_type = this.rows1[3];
       this.field_length = "";
       this.field_comments = '';
     }


}
