import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-street',
  templateUrl: './setting-street.component.html',
  styleUrls: ['./setting-street.component.css']
})
export class SettingStreetComponent implements OnInit {
street:any;
streetes:any=[];
@Output() addcountry = new EventEmitter<string>();
@Output() back1 = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  Insert_Agent(){
    if ( this.street.trim() !== '') {
 
      if(!this.streetes.includes(this.street)) {
        this.streetes.push(this.street)
        this.street='';
    }
  }

  }
 remove(i){
  let dta = this.streetes.findIndex((pl:any) => pl=== i);
  
  if (dta > -1) {
     this.streetes.splice(dta, 1);
  
  }
 }
 country(){
  this.addcountry.emit();
 }
 back(){
  this.back1.emit();
 }

}
