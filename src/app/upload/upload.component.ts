import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload-recipe';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  recipe: Upload;
  submitted: boolean;

  dTags = ['cheese', 'pizza', 'pepperoni', 'olives', 'anchovies'];

  constructor() { }

  ngOnInit() {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
  }

}
