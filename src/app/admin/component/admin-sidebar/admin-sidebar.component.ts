import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
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
  expand12 : boolean = false;
  menu_slider: boolean = false;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
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
