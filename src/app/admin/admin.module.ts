import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminSidebarComponent } from './component/admin-sidebar/admin-sidebar.component';


import { HttpClientModule } from '@angular/common/http';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';




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


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';

import {MultiSelectModule} from 'primeng/multiselect';

import {TabViewModule} from 'primeng/tabview';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { ActivityLogComponent } from './pages/activity-log/activity-log.component';

import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { FilterPipeModule } from 'ngx-filter-pipe';


import { NgOtpInputModule } from 'ng-otp-input'
import {CheckboxModule} from 'primeng/checkbox';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DiagnosisComponent } from './pages/diagnosis/diagnosis.component';
import { SubDiagnosisComponent } from './pages/sub-diagnosis/sub-diagnosis.component';
import { ServiceManagementComponent } from './pages/service-management/service-management.component';
import { RollManagementComponent } from './pages/roll-management/roll-management.component';
import { JobNoManagmentComponent } from './pages/job-no-managment/job-no-managment.component';
import { CategoriesManagementComponent } from './pages/categories-management/categories-management.component';
import { FieldManagementComponent } from './pages/field-management/field-management.component';
import { GroupdetailsComponent } from './pages/groupdetails/groupdetails.component';
import { SubGroupdetailsComponent } from './pages/sub-groupdetails/sub-groupdetails.component';
import { DataentryDetailComponent } from './pages/dataentry-detail/dataentry-detail.component';
import { SingleDataentryDetailComponent } from './pages/single-dataentry-detail/single-dataentry-detail.component';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';
import { FieldManagementSubgroupComponent } from './pages/field-management-subgroup/field-management-subgroup.component';
import { AttendanceMangementComponent } from './pages/attendance-mangement/attendance-mangement.component';
import { JoininspectionJobListComponent } from './pages/joininspection-job-list/joininspection-job-list.component';
import { JoininspectionJobDetailsComponent } from './pages/joininspection-job-details/joininspection-job-details.component';
import { JoininspectionJobSubGroupListComponent } from './pages/joininspection-job-sub-group-list/joininspection-job-sub-group-list.component';
import { JoininspectionJobGroupListComponent } from './pages/joininspection-job-group-list/joininspection-job-group-list.component';
import { NewgroupdetailsComponent } from './pages/oracal/newgroupdetails/newgroupdetails.component';
import { NewjoblistdetailsComponent } from './pages/oracal/newjoblistdetails/newjoblistdetails.component';
import { TabChqcollectionListComponent } from './pages/tab_page/tab-chqcollection-list/tab-chqcollection-list.component';
import { TabChqcollectionViewComponent } from './pages/tab_page/tab-chqcollection-view/tab-chqcollection-view.component';
import { TabUsermanagmentComponent } from './pages/tab_page/tab-usermanagment/tab-usermanagment.component';
import { BreakdownpdfComponent } from '../service-admin/service-page/breakdownpdf/breakdownpdf.component';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSidebarComponent,
    DashboardComponent,
    ActivityLogComponent,
    DiagnosisComponent,
    SubDiagnosisComponent,
    ServiceManagementComponent,
    RollManagementComponent,
    JobNoManagmentComponent,
    CategoriesManagementComponent,
    FieldManagementComponent,
    GroupdetailsComponent,
    SubGroupdetailsComponent,
    DataentryDetailComponent,
    SingleDataentryDetailComponent,
    UsermanagementComponent,
    FieldManagementSubgroupComponent,
    AttendanceMangementComponent,
    JoininspectionJobListComponent,
    JoininspectionJobDetailsComponent,
    JoininspectionJobSubGroupListComponent,
    JoininspectionJobGroupListComponent,
    NewgroupdetailsComponent,
    NewjoblistdetailsComponent,
    TabChqcollectionListComponent,
    TabChqcollectionViewComponent,
    TabUsermanagmentComponent,
    BreakdownpdfComponent




  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
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
    InputTextModule,
    CalendarModule,
    AutocompleteLibModule,
    Ng2SearchPipeModule,
    TableModule,
    FileUploadModule,
    TooltipModule,
    MultiSelectModule,
    TabViewModule,
    NgOtpInputModule,
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
    AdminHeaderComponent,
    AdminSidebarComponent
  ]
})
export class AdminModule { }
