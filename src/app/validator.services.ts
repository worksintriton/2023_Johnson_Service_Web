import { Injectable } from '@angular/core';
// import * as FileSaver from 'file-saver';  
// import * as XLSX from 'xlsx'; 
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';  
const EXCEL_EXTENSION = '.xlsx'; 
@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor( ) { }
//   exportAsExcelFile(json: any[], excelFileName: string): void {  
//     const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);  
//     const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };  
//     const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });  
//     this.saveAsExcelFile(excelBuffer, excelFileName);  
//   }  
//   saveAsExcelFile(buffer: any, fileName: string): void {  
//      const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});  
//      FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);  
//   }  

mobileValidator(data){
  if (data === undefined || data === '' || data === null) {
       return  true;
  } else if (isNaN(data)){
      return  true;
  }else if (data.length !== 10){
      return  true;
  }else {
      return false;
  }
}
emailValidator(data){
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailCheck = reg.test(data);
  if (!emailCheck) {
       return  true;
  } else {
      return false;
  }
}
stringValidator(data){
  if (data === undefined || data === '' || data === null) {
       return  true;
  } else {
      return false;
  }
}
numberValidator(data){
  if (data === undefined || data === '' || data === null) {
       return  true;
  } else if (isNaN(data)){
      return  true;
  }else {
      return false;
  }
}
 
urlValidator(data){
  let reg = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;;
  let urlCheck = reg.test(data);
  if (!urlCheck) {
       return  true;
  } else {
      return false;
  }
}
}


