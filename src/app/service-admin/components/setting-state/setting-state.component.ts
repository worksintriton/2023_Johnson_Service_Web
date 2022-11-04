import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-state',
  templateUrl: './setting-state.component.html',
  styleUrls: ['./setting-state.component.css']
})
export class SettingStateComponent implements OnInit {
state:any;
states:any=[];
@Output() addcity = new EventEmitter<string>();
@Output() back1 = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  Insert_Agent(){
    if ( this.state.trim() !== '') {
 
      if(!this.states.includes(this.state)) {
        this.states.push(this.state)
        this.state='';
    }
  }

  }
 remove(i){
  let dta = this.states.findIndex((pl:any) => pl=== i);
  
  if (dta > -1) {
     this.states.splice(dta, 1);
  
  }
 }
 city(){
  this.addcity.emit();

 }
 back(){
  this.back1.emit();
 }

}
