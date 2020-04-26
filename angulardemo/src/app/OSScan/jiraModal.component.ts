import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild} from '@angular/core';
import { OSScanJiraDataItem, OSScanService } from '../Services/osscan.service'
import { faCheckCircle, faTimesCircle, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-osscan-jira-modal',
  templateUrl: './jiraModal.component.html'
})

export class OSScanJiraComponent  {
  @Input() 
  set show(show: boolean) {
    if (show && ! this.modalService.hasOpenModals() ) {
      this.open();
    }
  };
  @Input() scan_record_id:string = null;
  @Output() onClose = new EventEmitter();

  pageNumber:number = 1;
  pageSize:number = 5;
  items:Array<OSScanJiraDataItem> = [];
  total:number = 0;

  @ViewChild('content')
  private content: TemplateRef<any>;

  constructor(private modalService: NgbModal,
    private osScanService:OSScanService) {
  }
  
  open() {
    debugger;
    if ( this.scan_record_id ) {
      this.osScanService.getOSScanJiraData(this.scan_record_id).subscribe( (res) => {
        this.total = res.total;
        this.items = res.rows;

        this.modalService.open(this.content, { 
          ariaLabelledBy: 'modal-basic-title',
          size: 'xl',
          beforeDismiss: () => {
            this.onClose.emit(false);
            return true
          }
        });
      }) 
    }
  }
}


