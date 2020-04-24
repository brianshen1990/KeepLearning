import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OSScanService {
  constructor(private http: HttpClient) {
  }
  // osscanCount = 0;
  // osscanOption: EChartOption = {
  // }
  getOSScanData(offset: Number=0, pageSize: Number=10, pageNumber: Number=1 ){
    return this.http.get<OSScanData>(`http://localhost:8000/api/osscan/jira/history?offset=${offset}&pageSize=${pageSize}&pageNumber=${pageNumber}`);
  }
}

export interface OSScanDataItem {
  action_record_id: Number;
  jira_id: String;
  jira_module_name?: String;
  jira_module_ver?: String;
  jira_updated_status?: Number;
  scan_record_id?: Number;
  tip_details?: {
    issue?: String,
    CnvdNvd_url?: String
  };
  tip_severity?: {
    severity?: String, 
    status?: Number}
  updated_time?: String
}

export interface OSScanData {
  total: Number;
  rows: Array<OSScanDataItem>;
}