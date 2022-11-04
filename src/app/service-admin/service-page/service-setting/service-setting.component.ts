import { Component, OnInit,ViewChild } from '@angular/core';
import { AbstractControl,FormBuilder, FormGroup, Validators ,FormArray, FormControl,} from '@angular/forms';
import { ApiService } from '../../../api.service';
import { Table } from "primeng/table";
@Component({
  selector: 'app-service-setting',
  templateUrl: './service-setting.component.html',
  styleUrls: ['./service-setting.component.css']
})
export class ServiceSettingComponent implements OnInit {
  @ViewChild("tt") table: Table;
  activeIndex1: number = 0;

  activeIndex2: number = 0;
location=["Country","Zone","State","City","Area","Street"]

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));
rows=[{"Name":"Arun","FrequencyType":"1","FrequencyValue":"5","Status":"Started","re_run":"02-06-2022"}]
  header=["Name","Frequency Type","Frequency Value","Status","Re-Run"];
  locationhead=["Country","Zone","State","City","Area","Street"]
  branchList:any;
  submitted:boolean=false;
  firstChild:any;
  branchForm:FormGroup;
  searchQR:any;
  tabdata:boolean=true;
  constructor( private formBuilder: FormBuilder,private _api: ApiService) {
    this.branchForm = this.formBuilder.group({
      _id:[''],
      branch_code:['',Validators.required],
      branch_name:['',Validators.required],
      branch_lat:['',Validators.required],
      branch_long:['',Validators.required],
     
    
      updated_at:new Date(),
  
         })
   }

  ngOnInit(): void {
    this._api.getBranchList().subscribe((response: any) => {
      this.branchList=response['Data'];
      console.log( this.branchList)
    })

  }
  get f(): { [key: string]: AbstractControl } {
    return this.branchForm.controls;
  }
  refersh(){
 this.searchQR='';

  }

  Insert_employee(){

  }
  keyPressAlphanumeric(event) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  onChange1(e:any){
    
 if(e.index==0){
  this.tabdata=true;
 }
 else{
  this.tabdata=false;
 }
  }
 

}
