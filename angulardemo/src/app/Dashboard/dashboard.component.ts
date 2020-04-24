import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgModule } from '@angular/core';
import { DashboardService } from '../Services/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  osscanCount: Number;
  osscanOption: EChartOption;
  constructor(
    private dashboardService: DashboardService
  ) {
  }
  ngOnInit() {
    this.dashboardService.getOSScanData().subscribe( (res) => {
      this.osscanCount = res.total;
      this.osscanOption = {
        xAxis: {
          type: 'category',
          data: Object.keys(res.chart_data)
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: Object.keys(res.chart_data).map( item => {
            const _mapping = {
              '通过': "green",
              '拒绝': "red",
              '人工评审': 'orange',
              '待定': 'gray'
            }; 
            return {
              value: res.chart_data[item],
              itemStyle: {
                color: _mapping[item]
              }
            }
          }),
          type: 'bar'
        }]
      };
    })
  }
}

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class _DashboardModule {

}
