import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-area',
  templateUrl: './setting-area.component.html',
  styleUrls: ['./setting-area.component.css']
})
export class SettingAreaComponent implements OnInit {
area:any;
areaes:any=[];
@Output() back1 = new EventEmitter<string>();
@Output() addstreet = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  Insert_Agent(){
    if ( this.area.trim() !== '') {
 
      if(!this.areaes.includes(this.area)) {
        this.areaes.push(this.area)
        this.area='';
    }
  }

  }
 remove(i){
  let dta = this.areaes.findIndex((pl:any) => pl=== i);
  
  if (dta > -1) {
     this.areaes.splice(dta, 1);
  
  }
 }
 street(){
  this.addstreet.emit();

 }
 back(){
  this.back1.emit();
 }
}
