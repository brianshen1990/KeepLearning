import { Injectable } from '@angular/core';
import { EChartOption } from 'echarts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {
  }
  // osscanCount = 0;
  // osscanOption: EChartOption = {
  // }
  getOSScanData(){
    return this.http.get<DashboardOSScanData>('http://localhost:8000/api/dashboard/osscan_stats?date=2020-04-17');
  }
}

export interface DashboardOSScanData {
  total: Number;
  chart_data: Object;
}