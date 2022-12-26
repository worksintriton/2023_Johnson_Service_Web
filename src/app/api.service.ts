import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  constructor(private http: HttpClient) { }



  ////User type API//////
  user_type_list() {
    return this.http.get(this.apiUrl + 'usertype/admin/getlist');
  }
  user_type_insert(data) {
    return this.http.post(this.apiUrl + 'usertype/create', data);
  }
  user_type_edit(data) {
    return this.http.post(this.apiUrl + 'usertype/edit', data);
  }
  user_type_delete(data) {
    return this.http.post(this.apiUrl + 'usertype/admin_delete', data);
  }
  user_type_filter_date(data) {
    return this.http.post(this.apiUrl + 'usertype/filter_date', data);
  }

  //////////////


  ////Service Management API//////
  service_list() {
    return this.http.get(this.apiUrl + 'service_management/getlist');
  }
  service_insert(data) {
    return this.http.post(this.apiUrl + 'service_management/create', data);
  }
  service_edit(data) {
    return this.http.post(this.apiUrl + 'service_management/edit', data);
  }
  service_delete(data) {
    return this.http.post(this.apiUrl + 'service_management/admin_delete', data);
  }
  service_filter_date(data) {
    return this.http.post(this.apiUrl + 'service_management/filter_date', data);
  }

  //////////////


  ////Field Management API//////
  Field_list() {
    return this.http.get(this.apiUrl + 'field_management/getlist');
  }
  Field_insert(data) {
    return this.http.post(this.apiUrl + 'field_management/create', data);
  }
  Field_edit(data) {
    return this.http.post(this.apiUrl + 'field_management/edit', data);
  }
  Field_delete(data) {
    return this.http.post(this.apiUrl + 'field_management/admin_delete', data);
  }
  Field_filter_date(data) {
    return this.http.post(this.apiUrl + 'field_management/filter_date', data);
  }
  Field_list_by_group(data) {
    return this.http.post(this.apiUrl + 'field_management/getlist_by_group_id',data);
  }



  Field_list_by_sub_group(data){
    return this.http.post(this.apiUrl + 'field_management/getlist_by_sub_group_id',data);
  }

  //////////////




    ////Active Details Management API//////
    activedetail_list() {
      return this.http.get(this.apiUrl + 'activedetail_management/getlist');
    }
    activedetail_insert(data) {
      return this.http.post(this.apiUrl + 'activedetail_management/create', data);
    }
    activedetail_edit(data) {
      return this.http.post(this.apiUrl + 'activedetail_management/edit', data);
    }
    activedetail_delete(data) {
      return this.http.post(this.apiUrl + 'activedetail_management/admin_delete', data);
    }
    activedetail_filter_date(data) {
      return this.http.post(this.apiUrl + 'activedetail_management/filter_date', data);
    }




    ////Job Management API//////
    jobdetail_list() {
      return this.http.get(this.apiUrl + 'job_no_managment/getlist');
    }
    jobdetail_insert(data) {
      return this.http.post(this.apiUrl + 'job_no_managment/create', data);
    }
    jobdetail_edit(data) {
      return this.http.post(this.apiUrl + 'job_no_managment/edit', data);
    }
    jobdetail_delete(data) {
      return this.http.post(this.apiUrl + 'job_no_managment/admin_delete', data);
    }
    jobdetail_filter_date(data) {
      return this.http.post(this.apiUrl + 'job_no_managment/filter_date', data);
    }

    jobdetail_fetch_by_id(data) {
      return this.http.post(this.apiUrl + 'job_no_managment/fetch_by_id', data);
    }



    oracel_update_emp(data) {
      return this.http.post(this.apiUrl + 'service_userdetails/oracel_update_emp', data);
    }

    oracel_create_emp(data) {
      return this.http.post(this.apiUrl + 'service_userdetails/oracel_create_emp', data);
    }


    breakdown_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/breakdown_oracel_data',data);
    }
    
    preventive_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/preventive_oracel_data',data);
    }
    
    lr_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/lr_oracel_data',data);
    }
    
    pr_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/pr_oracel_data',data);
    }
    
    audit_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/audit_oracel_data',data);
    }
    
    mr_bd_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/mr_bd_oracel_data',data);
    }
    
    mr_pm_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/mr_pm_oracel_data',data);
    }
    



    ////Group Management API//////
     groupdetail_list() {
      return this.http.get(this.apiUrl + 'group_detail_managment/getlist');
    }
    groupdetail_insert(data) {
      return this.http.post(this.apiUrl + 'group_detail_managment/create', data);
    }
    groupdetail_edit(data) {
      return this.http.post(this.apiUrl + 'group_detail_managment/edit', data);
    }
    groupdetail_delete(data) {
      return this.http.post(this.apiUrl + 'group_detail_managment/admin_delete', data);
    }
    groupdetail_filter_date(data) {
      return this.http.post(this.apiUrl + 'group_detail_managment/filter_date', data);
    }

    groupdetail_fetch_by_id(data) {
      return this.http.post(this.apiUrl + 'group_detail_managment/fetch_by_id', data);
    }
    groupdetail_rearrange() {
      return this.http.get(this.apiUrl + 'group_detail_managment/reload_data');
    }

    groupdetail_list_subgroup() {
      return this.http.get(this.apiUrl + 'new_group_detail_managment/groupdetail_list_subgroup1');
    }



    fielddetail_rearrange(data) {
      return this.http.post(this.apiUrl + 'field_management/reload_data',data);
    }


      ////Sub Group Management API//////
       sub_groupdetail_list() {
        return this.http.get(this.apiUrl + 'sub_group_detail_managment/getlist');
      }
      sub_groupdetail_insert(data) {
        return this.http.post(this.apiUrl + 'sub_group_detail_managment/create', data);
      }
      sub_groupdetail_edit(data) {
        return this.http.post(this.apiUrl + 'sub_group_detail_managment/edit', data);
      }
      sub_groupdetail_delete(data) {
        return this.http.post(this.apiUrl + 'sub_group_detail_managment/admin_delete', data);
      }
      sub_groupdetail_filter_date(data) {
        return this.http.post(this.apiUrl + 'sub_group_detail_managment/filter_date', data);
      }

      sub_groupdetail_fetch_by_id(data) {
        return this.http.post(this.apiUrl + 'sub_group_detail_managment/fetch_by_id', data);
      }


    ////Data Entry Detail/////


    data_entry_detail_list() {
      return this.http.get(this.apiUrl + 'data_store_management/getlist');
    }

    fetch_entry_detail_list(data) {
      return this.http.post(this.apiUrl + 'data_store_management/fetch_data', data);
    }

    entry_detail_delete(data) {
      return this.http.post(this.apiUrl + 'data_store_management/admin_delete', data);
    }

    fetch_entry_detail_activity_list(data) {
      return this.http.post(this.apiUrl + 'data_store_management/activity_list', data);
    }



    getlist_userdetail() {
      return this.http.get(this.apiUrl + 'user_management/getlist');
    }
    userdetail_insert(data) {
      return this.http.post(this.apiUrl + 'user_management/create', data);
    }
    userdetail_edit(data) {
      return this.http.post(this.apiUrl + 'user_management/edit', data);
    }
    userdetail_delete(data) {
      return this.http.post(this.apiUrl + 'user_management/admin_delete', data);
    }
    userdetail_filter_date(data) {
      return this.http.post(this.apiUrl + 'user_management/filter_date', data);
    }


 ////// Tab Details////
    tab_getlist_userdetail() {
      return this.http.get(this.apiUrl + 'tab_usermanager/getlist');
    }
    tab_userdetail_insert(data) {
      return this.http.post(this.apiUrl + 'tab_usermanager/create', data);
    }
    tab_userdetail_edit(data) {
      return this.http.post(this.apiUrl + 'tab_usermanager/edit', data);
    }
    tab_userdetail_delete(data) {
      return this.http.post(this.apiUrl + 'tab_usermanager/admin_delete', data);
    }
    tab_userdetail_filter_date(data) {
      return this.http.post(this.apiUrl + 'tab_usermanager/filter_date', data);
    }



        ////Attendance Details Management API//////
        attendance_list() {
          return this.http.get(this.apiUrl + 'attendance/getlist');
        }
        attendance_insert(data) {
          return this.http.post(this.apiUrl + 'attendance/create', data);
        }
        attendance_edit(data) {
          return this.http.post(this.apiUrl + 'attendance/edit', data);
        }
        attendance_delete(data) {
          return this.http.post(this.apiUrl + 'attendance/admin_delete', data);
        }
        attendance_filter_date(data) {
          return this.http.post(this.apiUrl + 'attendance/filter_date', data);
        }




  ////Job Management API//////
    Joint_inspection_jobdetail_list() {
      return this.http.get(this.apiUrl + 'joininspection/getlist');
    }
    Joint_inspection_jobdetail_insert(data) {
      return this.http.post(this.apiUrl + 'joininspection/create', data);
    }
    Joint_inspection_jobdetail_edit(data) {
      return this.http.post(this.apiUrl + 'joininspection/edit', data);
    }
    Joint_inspection_jobdetail_delete(data) {
      return this.http.post(this.apiUrl + 'joininspection/admin_delete', data);
    }
    Joint_inspection_jobdetail_filter_date(data) {
      return this.http.post(this.apiUrl + 'joininspection/filter_date', data);
    }
    Joint_inspection_jobdetail_fetch_by_id(data) {
      return this.http.post(this.apiUrl + 'joininspection/fetch_by_id', data);
    }

    Joint_inspection_jobdetail_sub_group_list(data) {
      return this.http.post(this.apiUrl + 'joininspection/getlist_subgroup_list',data);
    }




    ///////Oracle Data /////



    ////New Group Management API//////
    new_groupdetail_list() {
      return this.http.get(this.apiUrl + 'new_group_detail_managment/getlist');
    }

    fetch_data_activity() {
      return this.http.get(this.apiUrl + 'new_group_detail_managment/fetch_data_activity');
    }







    pull_and_upload_datas(data) {
      return this.http.post(this.apiUrl + 'new_group_detail_managment/pull_and_upload_datas', data);
    }



    new_groupdetail_insert(data) {
      return this.http.post(this.apiUrl + 'new_group_detail_managment/create', data);
    }
    new_groupdetail_edit(data) {
      return this.http.post(this.apiUrl + 'new_group_detail_managment/edit', data);
    }
    new_groupdetail_delete(data) {
      return this.http.post(this.apiUrl + 'new_group_detail_managment/admin_delete', data);
    }
    new_groupdetail_filter_date(data) {
      return this.http.post(this.apiUrl + 'new_group_detail_managment/filter_date', data);
    }

    new_groupdetail_fetch_by_id(data) {
      return this.http.post(this.apiUrl + 'new_group_detail_managment/fetch_by_id', data);
    }
    new_groupdetail_rearrange() {
      return this.http.get(this.apiUrl + 'new_group_detail_managment/reload_data');
    }

    new_groupdetail_list_subgroup() {
      return this.http.get(this.apiUrl + 'new_group_detail_managment/groupdetail_list_subgroup');
    }




      ////Form 3 //////
      tab_chqcollection_list() {
        return this.http.get(this.apiUrl + 'tab_form_three/getlist');
      }
      tab_chqcollection_insert(data) {
        return this.http.post(this.apiUrl + 'tab_form_three/create', data);
      }
      tab_chqcollection_edit(data) {
        return this.http.post(this.apiUrl + 'tab_form_three/edit', data);
      }
      tab_chqcollection_delete(data) {
        return this.http.post(this.apiUrl + 'tab_form_three/admin_delete', data);
      }
      tab_chqcollection_filter_date(data) {
        return this.http.post(this.apiUrl + 'tab_form_three/filter_date', data);
      }
      tab_chqcollection_fetch_by_id(data) {
        return this.http.post(this.apiUrl + 'tab_form_three/fetch_by_id', data);
      }
      
      ///sub admin login
Sub_admin_login(data) {
  return this.http.post(this.apiUrl + 'admin_access/admin/login', data);
}
      //service employee
    
      service_employee(data){
        return this.http.post(this.apiUrl + 'service_userdetails/create', data);
      }
      service_employee_list() {
        return this.http.get(this.apiUrl + 'service_userdetails/getlist');
      }
      subadmin_employee_list(data) {
        return this.http.post(this.apiUrl + 'service_userdetails/getlist_by_usertype',data);
      }
      Admin_list() {
        return this.http.get(this.apiUrl + 'admin_access/getlist');
      }
      employee_delete(data) {
        return this.http.post(this.apiUrl + 'service_userdetails/delete', data);
      }
     Admin_delete(data) {
        return this.http.post(this.apiUrl + 'admin_access/delete', data);
      }
      employee_edit(data) {
        return this.http.post(this.apiUrl + 'service_userdetails/edit', data);
      }


       search_service_employee(data){
        return this.http.post(this.apiUrl + 'service_userdetails/search_service_employee', data);
      }





//attendance
agent_attendence() {
  return this.http.get(this.apiUrl + 'service_attendance/getlist');
}
attendence(data) {
  return this.http.post(this.apiUrl + 'service_attendance/admin_attendance_detail',data);
}
sub_attendence(data) {
  return this.http.post(this.apiUrl + 'service_attendance/sub_admin_attendance_detail',data);
}

//service_activity service_activity/create
service_activity(data){
  return this.http.post(this.apiUrl + 'service_activity/create', data);
}
service_activity_list() {
  return this.http.get(this.apiUrl + 'service_activity/getlist');
}
Admin_activity_list() {
  return this.http.get(this.apiUrl + 'admin_access/getlist');
}
service_activity_delete(data) {
  return this.http.post(this.apiUrl + 'service_activity/delete', data);
}

service_activity_edit(data) {
  return this.http.post(this.apiUrl + 'service_activity/edit', data);
}
// service agent 
service_employee_activity(data){
  return this.http.post(this.apiUrl + 'service_employee_activity_allocation/create', data);
}
service_employee_activity_delete(data){
  return this.http.post(this.apiUrl + 'service_employee_activity_allocation/delete', data);
}
service_employee_activity_getlist(data) {
  return this.http.post(this.apiUrl + 'service_employee_activity_allocation/fetch_allocation',data);
}
//location mappinggetlist_completed_lr
getBranchList(){
  return this.http.get(this.apiUrl +'iot_branch_code/getlist');
}
//break down 
getbreak_down(){
  return this.http.get(this.apiUrl +'breakdown_management/getlist_completed_bd');
}
getbreak_down_subadmin(data){
  return this.http.post(this.apiUrl +'breakdown_management/getlist_completed_bd_location',data);
}

getbreak_down_chart(data){
  return this.http.post(this.apiUrl +'breakdown_management/report/breakdown_detail_graph',data);
}
preventive_chart(data){
  return this.http.post(this.apiUrl +'preventive_data_management/report/preventive_detail_graph',data);
}
lr_chart(data){
  return this.http.post(this.apiUrl +'lr_service_data_management/report/lr_detail_graph',data);
}
pack_chart(data){
  return this.http.post(this.apiUrl +'part_replacement/report/part_detail_graph',data);
}



getbreak_down_reports(data){
  return this.http.post(this.apiUrl +'breakdown_management/report/breakdown_detail_list',data);
}
preventive_reports(data){
  return this.http.post(this.apiUrl +'preventive_data_management/report/preventive_detail_list',data);
}
lr_reports(data){
  return this.http.post(this.apiUrl +'lr_service_data_management/report/lr_detail_list',data);
}
partsack_reports(data){
  return this.http.post(this.apiUrl +'part_replacement/report/part_detail_list',data);
}
lr_dataget(){
  return this.http.get(this.apiUrl + 'lr_service_data_management/getlist_completed_lr');
}
lr_dataget_subadmin(data){
  return this.http.post(this.apiUrl + 'lr_service_data_management/getlist_completed_lr_location',data);
}
parts_rep_dataget(){
  return this.http.get(this.apiUrl + 'part_replacement/getlist_completed_prt_rep');
}
parts_rep_dataget_subadmin(data){
  return this.http.post(this.apiUrl + 'part_replacement/getlist_completed_prt_rep_location',data);
}
//resubmit
getlist_bd_resubmit(){
  return this.http.get(this.apiUrl +'breakdown_data_management/getlist');
}
//getlist_completed_pm 
getlist_completed_pm(){
  return this.http.get(this.apiUrl +'breakdown_management/getlist_completed_pm');
}
getlist_completed_pm_subadmin(data){
  return this.http.post(this.apiUrl +'breakdown_management/getlist_completed_pm_location',data);
}
lr_data_details(data){
  return this.http.post(this.apiUrl + 'lr_service_data_management/fetch_job_id', data);
}
breakdown_data_details(data){
  return this.http.post(this.apiUrl + 'breakdown_data_management/fetch_job_id', data);
}

parts_rep_data_details(data){
  return this.http.post(this.apiUrl + 'part_replacement/fetch_job_id', data);
}

preventive_data_management(data){
  return this.http.post(this.apiUrl + 'preventive_data_management/fetch_job_id', data);
}

fetch_iso_number(data){
  return this.http.post(this.apiUrl + 'service_userdetails/fetch_iso_number', data);
}


fetch_branch_address(data){
  return this.http.post(this.apiUrl + 'service_userdetails/fetch_branch_address', data);
}

fetch_lr_service_detail(data){
  return this.http.post(this.apiUrl + 'lr_service_data_management/fetch_job_submit_data', data);
}

fetc_parts_rep_mat_detail(data){
  return this.http.post(this.apiUrl + 'part_replacement/service_prtrpmt_marterial_list', data);
}
fetch_sumbmitted_data_partrep(data){
  return this.http.post(this.apiUrl + 'part_replacement/fetch_sumbmitted_data', data);
}
fetch_breakdown_job_detail(data){
  return this.http.post(this.apiUrl + 'service_userdetails/fetch_breakdown_job_detail', data);
}



//Add Admin ( Role Access To )
getEmpDetails(data) {
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/fetch_data"
  return this.http.post(this.apiUrl + 'service_sub_admin/fetch_data', data);
}
getadminDetails(data) {
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/fetch_data"
  return this.http.post(this.apiUrl + 'admin_access/fetch_data', data);
}
createservice_sub_admin(data){
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/create"
  return this.http.post(this.apiUrl + 'service_sub_admin/create', data);
}

updateservice_sub_admin(data){
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/edit"
  return this.http.post(this.apiUrl + 'service_sub_admin/edit', data);
}
update_admin(data){
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/edit"
  return this.http.post(this.apiUrl + 'admin_access/edit', data);
}
create_admin(data){
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/create"
  return this.http.post(this.apiUrl + 'admin_access/create', data);
}



send_pop_up(data){
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/create"
  return this.http.post(this.apiUrl + 'pop_notification/create', data);
}


send_pop_up_list() {
  return this.http.get(this.apiUrl + 'pop_notification/getlist');
}


send_pop_up_delete(data) {
  return this.http.post(this.apiUrl + 'pop_notification/delete',data);
}
getEmpName_view(data) {
  return this.http.post(this.apiUrl + 'service_userdetails/fetch_view_status', data);
}
job_tracking(data){
  return this.http.post(this.apiUrl +'location_tracking_job_wise/list_tracking_job_wise', data);
}
employee_tracking(data){
  return this.http.post(this.apiUrl +'location_tracking_job_wise/list_tracking_user_wise', data);
}
}

