import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrls: ['./agent-management.component.css']
})
export class AgentManagementComponent implements OnInit {
  rows:any=[];
  rows1:any=[];
  header=["ServiceCode","ServiceName"]
  editEmp:any;
  phoneNumber:any;
  allocation:any=[];
  constructor(private _api: ApiService,private router:Router, ) { }

  ngOnInit(): void {
    this.editEmp =JSON.parse(sessionStorage.getItem('employeeDetail')|| '{}');
    this.phoneNumber=this.editEmp.user_mobile_no;
    console.log(this.phoneNumber)
    let ph={
      "employee_no":this.phoneNumber,
    }
    this._api.service_employee_activity_getlist(ph).subscribe((response: any) => {
     var aa=response['Data']

     aa.map((e:any)=>{
          this.allocation.push({service_code:e.activity_code,check:true,service_name:e.activity_name})
      })
     
    })
    this._api.service_activity_list().subscribe((response: any) => {
      this.rows1=response['Data']
  
    })
    setTimeout(()=> {
    const mergeById = (array1:any, array2:any) =>
array1.map((itm: { service_code: any; }) => ({
...array2.find((item:any) => (item.service_code === itm.service_code) && item),
...itm
}));
this.rows= mergeById(this.rows1,this.allocation);
console.log(this.rows)
    },1000)
  
  }
  toggleVisibility(e:any,item:any){
    let a={
        "employee_no": this.phoneNumber,
        "activity_code": item.service_code,
        "activity_name" : item.service_name,
        "date_and_time" : new Date()
    
    }
    if(e.target.checked==true){
      this._api.service_employee_activity(a).subscribe((response: any) => {
        console.log(response)
      })
    }
    else{
      let b={
        "employee_no": this.phoneNumber,
        "activity_code": item.service_code,
    }
    this._api.service_employee_activity_delete(b).subscribe((response: any) => {
      console.log(response)
    })
    }
  

  }
  back(){
    this.router.navigate(['/service-admin/service-employee'])
  }

}
