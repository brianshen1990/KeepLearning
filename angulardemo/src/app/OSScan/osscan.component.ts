import { Component, OnInit} from '@angular/core';
import { OSScanDataItem, OSScanService } from '../Services/osscan.service'
import { faCheckCircle, faTimesCircle, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-osscan',
  templateUrl: './osscan.component.html'
})
export class OSScanComponent implements OnInit{
  faListAlt=faListAlt;
  faTimesCircle=faTimesCircle;
  faCheckCircle=faCheckCircle;
  title = 'OSScan';
  total:number = 0;
  items:Array<OSScanDataItem> = [];
  timeSelect:string = "1";
  pageNumber:number = 1;
  pageSize:number = 10;

  radioGroupForm: FormGroup;

  constructor(private osScanService: OSScanService,
    private formBuilder: FormBuilder) {

  }
  
  ngOnInit() {
    this.refreshData();
    this.radioGroupForm = this.formBuilder.group({
      'model': "1"
    });
  }
  
  refreshData() {
    
    let dateUrl:string = null;
    if ( this.timeSelect === "1" ) {
      dateUrl = '1992-11-7';
    } else if ( this.timeSelect === "2") {
      // today
      dateUrl = `${moment().format('YYYY-MM-DD')}`
    } else if ( this.timeSelect === "3"){
      // 3d
      dateUrl = `${moment().subtract(3, 'days').format('YYYY-MM-DD')}`
    } else if ( this.timeSelect === "4"){
      dateUrl = `${moment().subtract(7, 'days').format('YYYY-MM-DD')}`
    } else {
      // 7d
      dateUrl = '1992-11-7';
    }

    const offset:number = ( this.pageNumber -1 ) * this.pageSize;
    this.osScanService.getOSScanData( 
      offset,
      this.pageSize,
      this.pageNumber,
      dateUrl
    ).subscribe( (res) => {
      this.total = res.total;
      this.items = res.rows;
    });
  }
  openModal(event, scan_record_id:number) {
     debugger;
  }
  pageChange(pageNumber:number){
    this.pageNumber = pageNumber;
    this.refreshData()
  }
  timeChange(val){
    this.timeSelect = val.model;
    this.refreshData()
  }
}


