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
import { PreventiveMaintenanceComponent } from './components/preventive-maintenance/preventive-maintenance.component';
import { PreventiveMaintenancePdfComponent } from './components/preventive-maintenance-pdf/preventive-maintenance-pdf.component';
import { LrServiceComponent } from './components/lr-service/lr-service.component';
import { LrServicePdfComponent } from './components/lr-service-pdf/lr-service-pdf.component';
import { PartsReplacementAckComponent } from './components/parts-replacement-ack/parts-replacement-ack.component';
import { PartsReplacementAckPdfComponent } from './components/parts-replacement-ack-pdf/parts-replacement-ack-pdf.component';
import { AdminAccessComponent } from './components/admin-access/admin-access.component';
import { AddAdminUserComponent } from './components/add-admin-user/add-admin-user.component';
import { SubAdmnEmployeeComponent } from './sub-admn-employee/sub-admn-employee.component';
import { SubAdminBreakdownServiceComponent } from './components/sub-admin-breakdown-service/sub-admin-breakdown-service.component';
import { SubAdminPreventiveMaintenanceComponent } from './components/sub-admin-preventive-maintenance/sub-admin-preventive-maintenance.component';
import { SubAdminLRServiceComponent } from './components/sub-admin-lr-service/sub-admin-lr-service.component';
import { SubAdminPartsReplacementComponent } from './components/sub-admin-parts-replacement/sub-admin-parts-replacement.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AttendanceSubAdminComponent } from './components/attendance-sub-admin/attendance-sub-admin.component';
import { ReportBreakdownComponent } from './report-breakdown/report-breakdown.component';
import { ReportLrComponent } from './report-lr/report-lr.component';
import { ReporePreventiveMaintenanceComponent } from './repore-preventive-maintenance/repore-preventive-maintenance.component';
import { ReportPartsRepComponent } from './report-parts-rep/report-parts-rep.component';
import { ResubmitBreakdownComponent } from './resubmit-breakdown/resubmit-breakdown.component';
import { ResubmitPrimitiveComponent } from './resubmit-primitive/resubmit-primitive.component';
import { ResubmitLRComponent } from './resubmit-lr/resubmit-lr.component';
import { ResubmitPartsreplacementComponent } from './resubmit-partsreplacement/resubmit-partsreplacement.component';

import { AuditComponent } from './repull-jobs/audit/audit.component';
import { BreakeDownComponent } from './repull-jobs/breake-down/breake-down.component';
import { LrComponent } from './repull-jobs/lr/lr.component';
import { MrBreakeDownComponent } from './repull-jobs/mr-breake-down/mr-breake-down.component';
import { MrPreventiveComponent } from './repull-jobs/mr-preventive/mr-preventive.component';
import { PartReplacementComponent } from './repull-jobs/part-replacement/part-replacement.component';
import { PreventiveComponent } from './repull-jobs/preventive/preventive.component';
import { NotificationPopSendComponent } from './components/notification-pop-send/notification-pop-send.component';

const routes: Routes = [
  { path: '', redirectTo: 'service-dashboard', pathMatch: 'full' },
  { path: 'service-dashboard', component: ServiceDashboardComponent },
  { path: 'Attendance-sub-admin', component: AttendanceSubAdminComponent },
  { path: 'service-report', component: ServiceReportComponent },
  { path: 'Attendance-report', component: AttendanceComponent },
  { path: 'service-report-table', component: ServiceReportTableComponent },
  { path: 'Resubmit-BD', component: ResubmitBreakdownComponent },
  { path: 'Resubmit-pr', component: ResubmitPrimitiveComponent },
  { path: 'Resubmit-LR', component: ResubmitLRComponent },
  { path: 'Resubmit-paertsreplacement', component: ResubmitPartsreplacementComponent },
  { path: 'service-employee', component: ServiceAgentComponent },
  { path: 'service-agent/service-add-employee', component: ServiceAddAgentComponent },
  { path: 'service-admin', component: ServiceSideadminComponent },
  { path: 'service-add-admin', component: SeviceAddadminComponent },
  { path: 'service-setting', component: ServiceSettingComponent },
  { path: 'service-service', component: ServiceServiceComponent },
  { path: 'service-add', component: ServiceAddserviceComponent },
  { path: 'service-agent', component: AgentManagementComponent },
  { path: 'service-job_details/break_down', component: JobBreakDownComponent },
  { path: 'Breakdownservice-Pdf', component: BreakdownservicePdfComponent },
  { path: 'AdminAccess', component: AdminAccessComponent },
  { path: 'Add-AdminAccess', component: AddAdminUserComponent },
  { path: 'sub-breakdown', component: SubAdminBreakdownServiceComponent },
  { path: 'sub-preventivemaintenance', component: SubAdminPreventiveMaintenanceComponent },
  { path: 'sub-lr', component: SubAdminLRServiceComponent },
  { path: 'sub-partsrep', component: SubAdminPartsReplacementComponent },

  { path: 'preventive-maintenance', component: PreventiveMaintenanceComponent },
  { path: 'preventive-maintenance-Pdf', component: PreventiveMaintenancePdfComponent },

  { path: 'lr-service', component: LrServiceComponent },
  { path: 'lr-service-Pdf', component: LrServicePdfComponent },

  { path: 'parts-ack', component: PartsReplacementAckComponent },
  { path: 'parts-ack-pdf', component: PartsReplacementAckPdfComponent },
  { path: 'sub-admin-employee', component: SubAdmnEmployeeComponent },
  { path: 'ReportBreakdownComponent', component: ReportBreakdownComponent },
  { path: 'ReportLrComponent', component: ReportLrComponent },
  { path: 'ReporePreventiveMaintenanceComponent', component: ReporePreventiveMaintenanceComponent },
  { path: 'ReportPartsRepComponent', component: ReportPartsRepComponent },


    //Repull-jobs
    { path: 'Audit', component: AuditComponent },
    { path: 'BreakeDown', component: BreakeDownComponent },
    { path: 'Lr', component: LrComponent },
    { path: 'MrBreakeDown', component: MrBreakeDownComponent },
    { path: 'MrPreventive', component: MrPreventiveComponent },
    { path: 'PartReplacement', component: PartReplacementComponent },
    { path: 'Preventive', component: PreventiveComponent },
    
    { path: 'service_notification', component: NotificationPopSendComponent },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
