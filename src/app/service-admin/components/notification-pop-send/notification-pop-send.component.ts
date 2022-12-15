import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl, } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-notification-pop-send',
  templateUrl: './notification-pop-send.component.html',
  styleUrls: ['./notification-pop-send.component.css']
})
export class NotificationPopSendComponent implements OnInit {
  adminForm: FormGroup;
  searchQR: any;
  searchQR1: any;
  user = [
    { "name": "HO", },
    { "name": "BRANCH", },
  ];
  setAccess = [
    { "access": "Service Management", "status": true, check: false },
    { "access": "Report Management", "status": true, check: false },
  ];
  setagent = [{ "access": "Admin ", "status": true, },
  { "access": "New Agent ", "status": true, },
  { "access": "Agent ", "status": true, },
  { "access": "New Service ", "status": true, },
  { "access": "Service ", "status": true, },
  { "access": "Report ", "status": true, },
  { "access": "Agent  Report", "status": true, },
  { "access": "Document ", "status": true, },
  { "access": "Settings ", "status": true, },
  { "access": "Location ", "status": true, },
  { "access": "Data ", "status": true, },
  { "access": "Dashboard", "status": true, },]
  editEmp: any;
  empList: any = [];
  serviceList: any;
  Report: boolean = false;
  Service: boolean = false;
  employee_detail: any = [];
  service_detail: any = [];
  editTrue: boolean = false;
  filterEmpValue: any;
  filterServiceValue: any;
  employeeChecked: boolean =false;
  serviceChecked: boolean =false;
  Admin_check:any;
  img_path : any;
  selectedimgae: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;


  constructor(private router: Router, private formBuilder: FormBuilder, private toastr: ToastrManager,
    private _api: ApiService,  private http: HttpClient) {
    this.adminForm = this.formBuilder.group({
      _id: [''],
    })
  }

  async ngOnInit(): Promise<void> {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.editEmp = JSON.parse(sessionStorage.getItem('employeeDetail') || '{}');
   await this.getEmp();
   await this.getService();

    await this._api.getEmpDetails({ mobile_no: this.editEmp.user_mobile_no }).subscribe(
      (response: any) => {

        console.log("response", response);

        if (response.Message == "No Details Found") {
          this.editTrue = false;
        } else {
          this.editTrue = true;

          if (response && response.Data.employee_detail.length == 0) {
            this.setAccess[1].check = false
            this.Report = false;
          } else {
            this.setAccess[1].check = true;
            this.Report = true;
          }
          if (response && response.Data.access_live.length == 0) {
            this.setAccess[0].check = false;
            this.Service = false;
          } else {
            this.setAccess[0].check = true;
            this.Service = true;
          }
          console.log("one",this.empList)
          console.log("two",response.Data.employee_detail)
          this.empList && this.empList.forEach(ele => {
            response.Data.employee_detail && response.Data.employee_detail.forEach(ele2 => {
              if (ele._id == ele2._id) {
                ele.check = true;
                ele2.check = true;
              }
            });
          });
          console.log("welcome",this.serviceList )
          this.serviceList && this.serviceList.forEach(ele => {
            response.Data.access_live && response.Data.access_live.forEach(ele2 => {
              if (ele._id == ele2._id) {
                ele.check = true;
                ele2.check = true;
              }
            });
          });

// console.log((this.empList && this.empList.length) == (response.Data.employee_detail && response.Data.employee_detail.length))
          if((this.empList && this.empList.length) == (response.Data.employee_detail && response.Data.employee_detail.length)){
            this.employeeChecked = true;
          }else{
            this.employeeChecked = false;
          }


          if((this.serviceList && this.serviceList.length) == (response.Data.access_live && response.Data.access_live.length)){
            this.serviceChecked = true;
          }else{
            this.serviceChecked = false;
          }

          this.adminForm.patchValue({
            _id: response.Data._id,
          })

          this.employee_detail = response.Data.employee_detail
          this.service_detail = response.Data.access_live
        }
      }
    );

    this.adminForm.patchValue({
      firstname: this.editEmp.user_name,
      // lastname:this.editEmp.lastname, 
      email_id: this.editEmp.user_email,
      mobile_no: this.editEmp.user_mobile_no,
      user_name: this.editEmp.user_name,
      password: this.editEmp.user_password,
      confirm_password: this.editEmp.user_password,
      // status:this.editEmp.status 
    })
  }
  cancel1() {
    this.router.navigate(['/service-admin/sub-admin-employee'])
  }

  cancel() {
    this.router.navigate(['/service-admin/service-employee'])
  }

  async getEmp() {
   await this._api.service_employee_list().subscribe((data: any) => {
      console.log("emplist", data)
      this.empList = data['Data'];
      // this.empList = this.empList.filter((ele) => ele.user_name !== 'Divagar');
      // this.empList = this.empList.filter((ele) => ele.emp_type == 'Mechanic');
      this.filterEmpValue = this.empList;
      console.log("emplist1", this.empList)
    });
  }

  async getService() {
   await this._api.service_activity_list().subscribe(async (response: any) => {
      this.serviceList = response['Data'];
      console.log("this.serviceList", this.serviceList);
      this.filterServiceValue = this.serviceList;


     await this.service_detail && this.service_detail.forEach(ele => {
        this.serviceList && this.serviceList.forEach(ele2 => {
          if (ele._id == ele2._id) {
            ele2.check = true;
          }
        });
      });
    })
  }

  checkValue(event: any, item) {
    if (item.access == "Service Management" && event.currentTarget.checked) {
      this.Service = true;
    } else if (item.access == "Report Management" && event.currentTarget.checked) {
      this.Report = true;
    }

    if (item.access == "Service Management" && !event.currentTarget.checked) {
      this.Service = false;
    } else if (item.access == "Report Management" && !event.currentTarget.checked) {
      this.Report = false;
    }

  }


  checkEmployeeValue(event: any, item) {
    if (event.currentTarget.checked) {
      item.check = true;
      this.employee_detail.push(item);
      console.log(this.employee_detail);
    } else {
      item.check = false;
      this.employee_detail = this.employee_detail.filter((ele) => ele._id !== item._id);
    }
    // console.log("employee_detail", this.employee_detail);
    // console.log("empList", this.empList)

    if((this.empList && this.empList.length) == (this.employee_detail && this.employee_detail.length)){
      this.employeeChecked = true;
    }else{
      this.employeeChecked = false;
    }

  }


  checkAllEmployee(event: any) {
    if (event.currentTarget.checked) {
      this.empList.forEach(element => {
        element.check = true;
      });
      this.employee_detail = this.empList;
    } else {
      this.empList.forEach(element => {
        element.check = false;
      });
      this.employee_detail = [];
    }

    
  }


  checkAllService(event: any) {
    if (event.currentTarget.checked) {
      this.serviceList.forEach(element => {
        element.check = true;
      });
      this.service_detail = this.serviceList;
    } else {
      this.serviceList.forEach(element => {
        element.check = false;
      });
      this.service_detail = [];
    }
  }


  checkServiceValue(event: any, item) {

    if (event.currentTarget.checked) {
      item.check = true;
      var obj = {
        "check": true,
        "menu_name": item.service_name,
        "_id": item._id
      }
      this.service_detail.push(obj);
    } else {
      this.service_detail = this.service_detail.filter((ele) => ele._id !== item._id);
    }
    console.log("service_detail", this.service_detail);
    if((this.serviceList && this.serviceList.length) == (this.service_detail && this.service_detail.length)){
      this.serviceChecked = true;
    }else{
      this.serviceChecked = false;
    }
  }

  save() {
    var enteredData = this.adminForm.value;
    enteredData.employee_detail = this.employee_detail;
    console.log(enteredData.employee_detail);
    for(let a  = 0 ; a < enteredData.employee_detail.length;a++){
     let values = {
      "user_mobile_no": enteredData.employee_detail[a].user_mobile_no,
      "code" : "12345",
      "status" :  "Not View",
      "image_path" :  this.img_path,
      "date_of_create" : ""+new Date()
       }   
       console.log(values);
      this._api.send_pop_up(values).subscribe((data: any) => {
         console.log(data);
      });
      if(a == enteredData.employee_detail.length - 1){
        this.toastr.successToastr("Send Successfully");
        this.router.navigate(['/service-admin/service_notification_list'])
      }
    }

    
    
    // this.toastr.errorToastr(msg);
  }


  filterByText(initial: string) {

    this.empList = this.filterEmpValue;
    this.empList = this.empList.filter((i: any) => i.user_name.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
    console.log(this.empList);
  }

  filterByService(initial: string) {

    this.serviceList = this.filterServiceValue;
    this.serviceList = this.serviceList.filter((i: any) => i.service_name.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
    console.log(this.empList);
  }


    fileupload(event, str) {
    console.log("this.width")
    this.selectedimgae = event.target.files[0];
    console.log(this.selectedimgae.size / 100000);
    let fr = new FileReader();
    fr.onload = () => { // when file has loaded
      var img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        console.log(width, height);
          let d = this.selectedimgae.size / 100000;
          console.log(d);
          if (d < 21) {
            this.addfiles(str);
          } else {
            alert('Please upload the file below 1 MB');
            this.imgType.nativeElement.value = "";
          }
      };
      img.src = fr.result as string; // The data URL
    };
    fr.readAsDataURL(this.selectedimgae);
    // clear the value after upload
  }

  addfiles(data: any) {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://smart.johnsonliftsltd.com:3000/upload' , fd)
      .subscribe((res: any) => {
        console.log(res);
        this.img_path = res.Data;
      });
  }


  view_send_notificationview(){
    this.router.navigate(['/service-admin/service_notification_list'])

    
  }
}
