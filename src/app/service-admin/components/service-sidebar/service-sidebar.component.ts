import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-service-sidebar',
  templateUrl: './service-sidebar.component.html',
  styleUrls: ['./service-sidebar.component.css']
})
export class ServiceSidebarComponent implements OnInit {
  RepullJob: boolean = false;
  expanded: boolean = false;
  expand: boolean = false;
  expand1: boolean = false;
  expand2: boolean = false;
  expand3: boolean = false;
  expand4: boolean = false;
  expand5: boolean = false;
  expand9: boolean = false;
  expand10: boolean = false;
  expand11: boolean = false;
  expand25: boolean = false;
  expand12 : boolean = false;
  menu_slider: boolean = false;
  Admin_check:any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    console.log( this.Admin_check)
  }
  formtype() {
    this.saveInLocal('Company_detail', undefined);
    this.saveInLocal('Form_type', 'create');
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  menuslide() {
    this.menu_slider = !this.menu_slider;
  }
}

