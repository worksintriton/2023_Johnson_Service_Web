import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-country',
  templateUrl: './setting-country.component.html',
  styleUrls: ['./setting-country.component.css']
})
export class SettingCountryComponent implements OnInit {
  country:any;
  countries:any=[];
  @Output() addzone = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  Insert_Agent(){
    if ( this.country.trim() !== '') {
 
      if(!this.countries.includes(this.country)) {
        this.countries.push(this.country)
        this.country='';
    }
  }

  }
 remove(i){
  let dta = this.countries.findIndex((pl:any) => pl=== i);
  
  if (dta > -1) {
     this.countries.splice(dta, 1);
  
  }
 }
 zone(){
  this.addzone.emit();

 }
}
