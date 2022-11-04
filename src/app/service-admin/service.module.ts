import { NgModule,NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceSidebarComponent } from './components/service-sidebar/service-sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChartsModule } from 'ng2-charts';

import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';

import {MultiSelectModule} from 'primeng/multiselect';

import {TabViewModule} from 'primeng/tabview';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgOtpInputModule } from 'ng-otp-input'
import {CheckboxModule} from 'primeng/checkbox';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ServiceRoutingModule } from './service-routing.module';
import { ServiceNavBarComponent } from './components/service-nav-bar/service-nav-bar.component';
import { ServiceDashboardComponent } from './service-page/service-dashboard/service-dashboard.component';
import { ServiceReportComponent } from './service-page/service-report/service-report.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ServiceReportTableComponent } from './service-page/service-report/service-report-table/service-report-table.component';
import { ServiceColumnPopupComponent } from './components/service-column-popup/service-column-popup.component';
import { JobStatusPopupComponent } from './components/job-status-popup/job-status-popup.component';
import { NgxPrintElementModule } from 'ngx-print-element';
import { ServiceAgentComponent } from './service-page/service-agent/service-agent.component';
import { ServiceAddAgentComponent } from './service-page/service-agent/service-add-agent/service-add-agent.component';
import { ServiceSideadminComponent } from './service-page/service-sideadmin/service-sideadmin.component';
import { SeviceAddadminComponent } from './service-page/service-sideadmin/sevice-addadmin/sevice-addadmin.component';
import { ServiceSettingComponent } from './service-page/service-setting/service-setting.component';
import { ServiceServiceComponent } from './service-page/service-service/service-service.component';
import { ServiceAddserviceComponent } from './service-page/service-service/service-addservice/service-addservice.component';
import { SettingCountryComponent } from './components/setting-country/setting-country.component';
import { SettingZoneComponent } from './components/setting-zone/setting-zone.component';
import { SettingStateComponent } from './components/setting-state/setting-state.component';
import { SettingCityComponent } from './components/setting-city/setting-city.component';
import { SettingAreaComponent } from './components/setting-area/setting-area.component';
import { SettingStreetComponent } from './components/setting-street/setting-street.component';
import { ReportAttendanceTableComponent } from './components/report-attendance-table/report-attendance-table.component';
import { AgentManagementComponent } from './components/agent-management/agent-management.component';
import { CurrentLoginComponent } from './components/current-login/current-login.component';
import { JobBreakDownComponent } from './components/job-break-down/job-break-down.component';
import { BreakdownservicePdfComponent } from './components/breakdownservice-pdf/breakdownservice-pdf.component';
@NgModule({
  declarations: [ServiceSidebarComponent,ServiceNavBarComponent, ServiceDashboardComponent, ServiceReportComponent, ServiceReportTableComponent, ServiceColumnPopupComponent, JobStatusPopupComponent, ServiceAgentComponent, ServiceAddAgentComponent, ServiceSideadminComponent, SeviceAddadminComponent, ServiceSettingComponent, ServiceServiceComponent, ServiceAddserviceComponent, SettingCountryComponent, SettingZoneComponent, SettingStateComponent, SettingCityComponent, SettingAreaComponent, SettingStreetComponent, ReportAttendanceTableComponent, AgentManagementComponent, CurrentLoginComponent, JobBreakDownComponent, BreakdownservicePdfComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ServiceRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatDialogModule,
    DialogModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    DragDropModule,
    InputTextModule,
    CalendarModule,
    AutocompleteLibModule,
    NgxPrintElementModule,
    AutoCompleteModule,
    Ng2SearchPipeModule,
    TableModule,
    FileUploadModule,
    TooltipModule,
    MultiSelectModule,
    TabViewModule,
    NgOtpInputModule,
    ChartsModule,
    CheckboxModule,
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9sxe06VnCg13SIyxJjTxq0gd4vj4bA48'
    }),
    GooglePlaceModule,
    FilterPipeModule,
    ReactiveFormsModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    DatePipe
  ],
  exports: [
    ServiceSidebarComponent,
    ServiceNavBarComponent
  ]
})
export class ServiceModule { }
