import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-zone',
  templateUrl: './setting-zone.component.html',
  styleUrls: ['./setting-zone.component.css']
})
export class SettingZoneComponent implements OnInit {
zone:any;
zones:any=[];
@Output() addstate = new EventEmitter<string>();
@Output() back1 = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  Insert_Agent(){
    if ( this.zone.trim() !== '') {
 
      if(!this.zones.includes(this.zone)) {
        this.zones.push(this.zone)
        this.zone='';
    }
  }

  }
 remove(i){
  let dta = this.zones.findIndex((pl:any) => pl=== i);
  
  if (dta > -1) {
     this.zones.splice(dta, 1);
  
  }
 }
 state(){
  this.addstate.emit();

 }
 back(){
  this.back1.emit();
 }
}
