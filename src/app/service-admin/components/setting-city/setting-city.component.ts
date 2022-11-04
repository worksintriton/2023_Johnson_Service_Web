import { Component,OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-setting-city',
  templateUrl: './setting-city.component.html',
  styleUrls: ['./setting-city.component.css']
})
export class SettingCityComponent implements OnInit {
city:any;
cityes:any=[];
@Output() addarea = new EventEmitter<string>();
@Output() back1 = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  Insert_Agent(){
    if ( this.city.trim() !== '') {
 
      if(!this.cityes.includes(this.city)) {
        this.cityes.push(this.city)
        this.city='';
    }
  }

  }
 remove(i){
  let dta = this.cityes.findIndex((pl:any) => pl=== i);
  
  if (dta > -1) {
     this.cityes.splice(dta, 1);
  
  }
 }
 area(){
  this.addarea.emit();

 }
 back(){
  this.back1.emit();
 }
}
