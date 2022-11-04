import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-groupdetails',
  templateUrl: './groupdetails.component.html',
  styleUrls: ['./groupdetails.component.css']
})
export class GroupdetailsComponent implements OnInit {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR:any;
  value1:any;

  loader_display = false;

  S_Date: any;
  E_Date: any;
  group_detail_name : string = '';
  user_type_value : string = '';
  date_and_time : string = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  pet_type_list : any = [];
  pet_type_id : string = '';

  update_button : boolean;
  selectedimgae : any;


  rows1 : any;
  index = 0;
  count_down = 0;

  update_index_change = 0;
  check_index = 0;




  activitiy_list = [];
  activity_name : any;

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
    {status : "Approval"},
    {status : "RM Form"}
  ]
  form_type_name : any

  activity_lists = [];
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
  ) {
   }

  ngOnInit(): void {
    this.loader_display = false;
    this.gorup_status_name = this.group_status[0];
    this.form_type_name = this.form_type[0];
    this.group_detail_name = '';
    this.user_type_value = '0';
    // this.user_type_img = 'http://18.237.123.253:3000/api/uploads/template.jpg';
    this.pet_type_id = '';
    this.update_button = true;
    // this.activity_list();
    // this.job_no_lists();
    this.group_list();
    this.index = 0;
    this.count_down = 0;
  }



  group_list() {
    this._api.new_groupdetail_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.index = this.rows.length + 1;
        this.rows.sort((a, b) => (a.SMU_DEPT > b.SMU_DEPT) ? 1 : -1)
        // this.list_data();
      }
    );
  }


  cancel() {
    this.update_button = true;
    this.group_detail_name= undefined;
  }
  ////// Inserting Data

  Insert_pet_type_details() {
    if(this.index < this.rows.length){
     this.calculation()
    }else{
    if(this.group_detail_name == ''){
      //alert("Please enter the pet type")
      this.showWarning("Please enter the pet type")
    }else{


     console.log(this.activity_name);
     let form_type = '1';
     if(this.form_type_name.status == 'Input Type'){
      form_type = '1';
     }
     if(this.form_type_name.status == 'Image'){
      form_type = '2';
     }
     if(this.form_type_name.status == 'Table'){
      form_type = '3';
     }
     if(this.form_type_name.status == 'Approval'){
      form_type = '4';
     }
     if(this.form_type_name.status == 'RM Form'){
      form_type = '5';
     }
    let a = {
     'activity_id' : this.activity_name._id,
     'index': this.index,
     'job_detail_id' : this.job_no_name._id,
     'sub_group_status' : this.gorup_status_name.status,
     'group_detail_name': this.group_detail_name,
     'group_detail_created_at' : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
     'group_detail_update_at' : "",
     'group_detail_created_by' : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
     'group_detail_updated_by' : "",
     'form_type': form_type
      };
    console.log(a);
    this._api.groupdetail_insert(a).subscribe(
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


  }


  Edit_pet_type_details(){
    if(this.group_detail_name == ''){
      //alert("Please enter the pet type")
      this.showWarning("Please enter the group name");
    }else{
    if(this.update_index_change == this.index){
      let a = {
        '_id' : this.pet_type_id,
        'group_detail_name' : this.group_detail_name,
       };
      this._api.groupdetail_edit(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        //alert("Updated Successfully");
        this.showSuccess("Updated Successfully")
        this.ngOnInit();
      }
    );
    }else{
      this.loader_display = true;
      let numbers = this.index;
      this.rows.splice(this.check_index,1);
      let datas = this.rows;
      let api = this._api;
      let a = {
        '_id' : this.pet_type_id,
        'index' : this.index,
        'group_detail_name' : this.group_detail_name,
       };
      this._api.groupdetail_edit(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        //alert("Updated Successfully");
        this.showSuccess("Updated Successfully")
        this.recall(numbers,datas,api);
        // this.ngOnInit();
      }
    );


    }



    }
  }



  Deletecompanydetails(data) {
    let a = {
      '_id' : data
     };
    console.log(a);
    this._api.groupdetail_delete(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      //alert('Deleted Successfully');
      this.showSuccess("Deleted Successfully");
      this.rearrange();
    }
  );
  }


  Editcompanydetailsdata(data,check_index) {
    this.update_button = false;
    this.pet_type_id = data._id;
    this.group_detail_name = data.group_detail_name ;
    this.index = data.index;
    this.update_index_change =  data.index;
    this.gorup_status_name = {status:data.sub_group_status};
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
      console.log(this.activity_name);
      let a  = {
        activedetail__id : this.activity_name._id
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



    activity_list() {
      this._api.activedetail_list().subscribe(
        (response: any) => {
          console.log("response.Data");
          console.log(response.Data);
          this.activitiy_list = response.Data;
          this.activity_name = this.activitiy_list[0];
        }
      );
    }

    job_no_lists(){
      this._api.jobdetail_list().subscribe(
        (response: any) => {
          console.log("response.Data");
          console.log(response.Data);
          this.job_no_list = response.Data;
          this.job_no_name = this.job_no_list[0];
        }
      );
    }



    // list_data(){
    //   this.activity_lists = [];
    //   this.job_list = [];
    //   this._api.activedetail_list().subscribe(
    //     (response: any) => {
    //       console.log(response.Data);
    //       this.activity_lists = response.Data;
    //     }
    //   );


    //   // this._api.jobdetail_list().subscribe(
    //   //   (response: any) => {
    //   //     console.log(response.Data);
    //   //     this.job_list = response.Data;
    //   //   }
    //   // );
    //   }


      calculation(){
        this.loader_display = true;
        let numbers = this.index;
        let datas = this.rows;
        let api = this._api;
        console.log(this.activity_name);
        let form_type = '1';
        if(this.form_type_name.status == 'Input Type'){
         form_type = '1';
        }
        if(this.form_type_name.status == 'Image'){
         form_type = '2';
        }
        if(this.form_type_name.status == 'Table'){
         form_type = '3';
        }
        if(this.form_type_name.status == 'Approval'){
         form_type = '4';
        }
        if(this.form_type_name.status == 'RM Form'){
         form_type = '5';
        }
       let a = {
        'activity_id' : this.activity_name._id,
        'index': this.index,
        'job_detail_id' : this.job_no_name._id,
        'sub_group_status' : this.gorup_status_name.status,
        'group_detail_name': this.group_detail_name,
        'group_detail_created_at' : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
        'group_detail_update_at' : "",
        'group_detail_created_by' : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
        'group_detail_updated_by' : "",
        'form_type': form_type
         };
       console.log(a);
       this._api.groupdetail_insert(a).subscribe(
       (response: any) => {
         console.log(response.Data);
         if ( response.Code === 200 ) {
           //alert('Added Successfully');
           this.recall(numbers,datas,api);
         }else {
           //alert(response.Message);
           this.showError(response.Message)
         }
       }
     );
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
         api.groupdetail_edit(a).subscribe(
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
         api.groupdetail_edit(a).subscribe(
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
        this._api.groupdetail_rearrange().subscribe(
          (response: any) => {
            this.showSuccess("Re-arrange Completed");
            this.loader_display = false;
            this.ngOnInit();
          }
        );
       }




       add_field(data){
        console.log(data);
        let temp = {
         "activity_id": "61c55f858bc953743afdaa52",
         "form_type": ""+data.SMU_FORMTYPE,
         "group_detail_created_at": "1/20/2022, 3:53:36 PM",
         "group_detail_created_by": "1/20/2022, 3:53:36 PM",
         "group_detail_name": data.SMU_UKEY_DESCRIPTION,
         "group_detail_update_at": "",
         "group_detail_updated_by": "",
         "index": data.SMU_SEQNO,
         "job_detail_id": "61c561a83c5cfc7d49dfa1fc",
         "sub_group_status": "false",
         "__v": 0,
         "_id": data._id,
        }
        this.storage.set('group_detail',temp);
        //this.storage.set('group_detail',data);
        this.router.navigateByUrl('/admin/field_management');
       }


       update_disble(data){
        let a = {
          '_id' : data._id,
          'delete_status' : false
         };
         console.log(a);
        this._api.groupdetail_edit(a).subscribe(
        (response: any) => {
          this.showSuccess('Updated');
          this.ngOnInit();
        }
      );
      }

      update_enable(data){
        let a = {
          '_id' : data._id,
          'delete_status' : true
         };
         console.log(a);
        this._api.groupdetail_edit(a).subscribe(
        (response: any) => {
          this.showSuccess('Updated');
          this.ngOnInit();
        }
      );
      }


  pull_and_upload_data(data){
    console.log(data);
    let a = {
      seq_no : data
    }
    this._api.pull_and_upload_datas(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.showSuccess("Fetch data from Oracel Updated");
        this.ngOnInit();
      }
    );
  }


    fetch_from_orcal(){
    this._api.fetch_data_activity().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.showSuccess("Fetch data from Oracel Updated");
        this.ngOnInit();
      }
    );
  }



}
