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
  getOSScanData(offset: number=0, pageSize: number=10, pagenumber: number=1, date:string='1992-11-7' ){
    return this.http.get<OSScanData>(`http://localhost:8000/api/osscan/history?offset=${offset}&pageSize=${pageSize}&pagenumber=${pagenumber}&date=${date}`);
  }
}

export interface OSScanDataItem {
  end_time?: string;
  flag_bit?: number;
  jira_count?: number;
  pass_count?: number;
  pending_count?: number;
  reason?: string;
  reject_count?: number;
  repulse_count?: number;
  scan_record_id: number;
  status?: string;
  updated_time?: string;

  // action_record_id: number;
  // jira_id: string;
  // jira_module_name?: string;
  // jira_module_ver?: string;
  // jira_updated_status?: number;
  // scan_record_id?: number;
  // tip_details?: {
  //   issue?: string,
  //   CnvdNvd_url?: string
  // };
  // tip_severity?: {
  //   severity?: string, 
  //   status?: number}
  // updated_time?: string
}

export interface OSScanData {
  total: number;
  rows: Array<OSScanDataItem>;
}