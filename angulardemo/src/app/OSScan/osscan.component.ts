import { Component, OnInit} from '@angular/core';
import { OSScanDataItem, OSScanService } from '../Services/osscan.service'
import { faCheckCircle, faTimesCircle, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-osscan',
  templateUrl: './osscan.component.html',
  styleUrls: ['./osscan.component.css']
})
export class OSScanComponent implements OnInit{
  faListAlt=faListAlt;
  faTimesCircle=faTimesCircle;
  faCheckCircle=faCheckCircle;
  title = 'OSScan';
  total:number = 0;
  items:Array<OSScanDataItem> = [];
  timeSelect:number = 1;
  pageNumber:number = 1;
  pageSize:number = 10;

  radioGroupForm: FormGroup;

  constructor(private osScanService: OSScanService,
    private formBuilder: FormBuilder) {

  }
  
  ngOnInit() {
    this.refreshData();
    this.radioGroupForm = this.formBuilder.group({
      'model': 1
    });
  }
  
  refreshData() {
    const offset:number = ( this.pageNumber -1 ) * this.pageSize;
    this.osScanService.getOSScanData( 
      offset,
      this.pageSize,
      this.pageNumber
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
}


