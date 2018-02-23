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

  //TODO: delete dTags and model
  dTags = ['cheese', 'pizza', 'pepperoni', 'olives', 'anchovies'];
  model = new Upload('Bob', 'Curry', ['picture1', 'picture2'], ['spice', 'hot', 'rice']);

  constructor() { }

  ngOnInit() {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
  }

  //TODO: Handle if there are no photos uploaded into the form

}
