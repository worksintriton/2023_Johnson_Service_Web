import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


///Banner//

import { ActivityLogComponent } from './pages/activity-log/activity-log.component';
import { AttendanceMangementComponent } from './pages/attendance-mangement/attendance-mangement.component';
import { CategoriesManagementComponent } from './pages/categories-management/categories-management.component';
import { DataentryDetailComponent } from './pages/dataentry-detail/dataentry-detail.component';
import { FieldManagementSubgroupComponent } from './pages/field-management-subgroup/field-management-subgroup.component';
import { FieldManagementComponent } from './pages/field-management/field-management.component';
import { GroupdetailsComponent } from './pages/groupdetails/groupdetails.component';
import { JobNoManagmentComponent } from './pages/job-no-managment/job-no-managment.component';
import { JoininspectionJobDetailsComponent } from './pages/joininspection-job-details/joininspection-job-details.component';
import { JoininspectionJobListComponent } from './pages/joininspection-job-list/joininspection-job-list.component';
import { JoininspectionJobSubGroupListComponent } from './pages/joininspection-job-sub-group-list/joininspection-job-sub-group-list.component';
import { NewgroupdetailsComponent } from './pages/oracal/newgroupdetails/newgroupdetails.component';
import { NewjoblistdetailsComponent } from './pages/oracal/newjoblistdetails/newjoblistdetails.component';
import { RollManagementComponent } from './pages/roll-management/roll-management.component';
import { ServiceManagementComponent } from './pages/service-management/service-management.component';
import { SingleDataentryDetailComponent } from './pages/single-dataentry-detail/single-dataentry-detail.component';
import { SubGroupdetailsComponent } from './pages/sub-groupdetails/sub-groupdetails.component';
import { TabChqcollectionListComponent } from './pages/tab_page/tab-chqcollection-list/tab-chqcollection-list.component';
import { TabChqcollectionViewComponent } from './pages/tab_page/tab-chqcollection-view/tab-chqcollection-view.component';
import { TabUsermanagmentComponent } from './pages/tab_page/tab-usermanagment/tab-usermanagment.component';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:name', component: DashboardComponent },



  ///Master ////
  /////////Banners//////



  // { path: 'user_management', component: ActivityLogComponent },
  { path: 'roll_management', component: RollManagementComponent },
  { path: 'categories_management', component: CategoriesManagementComponent },
  { path: 'field_management', component: FieldManagementComponent },
  { path: 'Job_no_managment', component: JobNoManagmentComponent },
  { path: 'service_management', component: ServiceManagementComponent},



  { path: 'activity_detail', component: ActivityLogComponent},

  { path: 'groupdetail', component: GroupdetailsComponent},
  { path: 'subgroupdetail', component: SubGroupdetailsComponent},

  { path: 'dataentry_detail', component: DataentryDetailComponent},
  { path: 'singledataentry_detail/:id', component: SingleDataentryDetailComponent},
  { path: 'user_managment', component: UsermanagementComponent},
  { path: 'sub_field_management', component: FieldManagementSubgroupComponent },

  { path: 'attendance', component: AttendanceMangementComponent },

  { path: 'joininspection_details', component: JoininspectionJobDetailsComponent },
  { path: 'joininspection_job_list', component: JoininspectionJobListComponent },
  { path: 'joininspection_job_sub_group_list', component: JoininspectionJobSubGroupListComponent },


  

  /////Oracel//////
  { path: 'oracel_new_groupdetail', component: NewgroupdetailsComponent},
  { path: 'oracel_new_jobdetail', component: NewjoblistdetailsComponent},

    /////Table//////
    { path: 'tab_chqcollection_list', component: TabChqcollectionListComponent},
    { path: 'tab_chqcollection_view', component: TabChqcollectionViewComponent},
    { path: 'tab_usermanagement', component: TabUsermanagmentComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
