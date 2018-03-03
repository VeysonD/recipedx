import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload-modal-fail',
  templateUrl: './upload-modal-fail.component.html',
  styleUrls: ['./upload-modal-fail.component.css']
})
export class UploadModalFailComponent implements OnInit {
  @Input() errorType;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
