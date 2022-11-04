import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDashboardComponent } from './service-page/service-dashboard/service-dashboard.component';
import { ServiceReportComponent } from './service-page/service-report/service-report.component';
import { ServiceReportTableComponent } from './service-page/service-report/service-report-table/service-report-table.component';
import { ServiceAgentComponent } from './service-page/service-agent/service-agent.component';
import { ServiceAddAgentComponent } from './service-page/service-agent/service-add-agent/service-add-agent.component';
import { ServiceSideadminComponent } from './service-page/service-sideadmin/service-sideadmin.component';
import { SeviceAddadminComponent } from './service-page/service-sideadmin/sevice-addadmin/sevice-addadmin.component';
import { ServiceSettingComponent } from './service-page/service-setting/service-setting.component';
import { ServiceServiceComponent } from './service-page/service-service/service-service.component';
import { ServiceAddserviceComponent } from './service-page/service-service/service-addservice/service-addservice.component';
import { AgentManagementComponent } from './components/agent-management/agent-management.component';
import { JobBreakDownComponent } from './components/job-break-down/job-break-down.component';
import { BreakdownservicePdfComponent } from './components/breakdownservice-pdf/breakdownservice-pdf.component';
const routes: Routes = [
  { path: '', redirectTo: 'service-dashboard', pathMatch: 'full' },
  { path: 'service-dashboard', component: ServiceDashboardComponent },
  { path: 'service-report', component: ServiceReportComponent },
  { path: 'service-report-table', component: ServiceReportTableComponent },
  { path: 'service-employee', component: ServiceAgentComponent },
  { path: 'service-agent/service-add-employee', component: ServiceAddAgentComponent },
  { path: 'service-admin', component: ServiceSideadminComponent },
  { path: 'service-add-admin', component: SeviceAddadminComponent },
  { path: 'service-setting', component: ServiceSettingComponent },
  { path: 'service-service', component: ServiceServiceComponent },
  { path: 'service-add', component: ServiceAddserviceComponent },
  { path: 'service-agent', component: AgentManagementComponent },
  { path: 'service-job_details/break_down', component: JobBreakDownComponent },
  { path: 'Breakdownservice-Pdf', component: BreakdownservicePdfComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
