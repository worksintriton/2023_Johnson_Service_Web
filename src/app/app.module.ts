import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { AgmCoreModule } from '@agm/core';

import { MatStepperModule } from '@angular/material/stepper';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgOtpInputModule } from 'ng-otp-input';
import { ChartsModule } from 'ng2-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HomeComponent } from './home/home.component';
import { ServiceLoginComponent } from './service-login/service-login.component';
import { ServiceAdminComponent } from './service-admin/service-admin.component';
import { ServiceNavBarComponent } from './service-admin/components/service-nav-bar/service-nav-bar.component';
import { ServiceModule } from './service-admin/service.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxPrintElementModule } from 'ngx-print-element';
import { ServiceLocationComponent } from './service-login/service-location/service-location.component';
import { TabViewModule } from 'primeng/tabview';











@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    ServiceLoginComponent,
    ServiceAdminComponent,
    ServiceLocationComponent,
    // ServiceNavBarComponent,

  ],
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    DragDropModule,
    AdminModule,
    ServiceModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    MatButtonModule,
    NgxPrintElementModule,
    RadioButtonModule, TableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9sxe06VnCg13SIyxJjTxq0gd4vj4bA48'
    }),
    GooglePlaceModule,
    MatStepperModule,
    CalendarModule,
    MultiSelectModule,
    MatStepperModule,
    ChartsModule,
    NgOtpInputModule,
    DialogModule,
    ButtonModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
