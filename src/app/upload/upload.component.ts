import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload-recipe';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  fileToUpload: FileList = null;
  recipe: Upload;
  submitted: boolean;

  //TODO: Handle if there are no photos uploaded into the form
  //TODO: delete dTags and model
  dTags = ['cheese', 'pizza', 'pepperoni', 'olives', 'anchovies'];
  model = new Upload('Bob', 'Curry', ['picture1', 'picture2'], ['spice', 'hot', 'rice']);

  constructor() { }

  ngOnInit() {
    this.submitted = false;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files;
  }

  onSubmit() {
    this.submitted = true;
  }



}
