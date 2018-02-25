import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload-recipe';

import { RecipeService } from'../services/api/recipe.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  //TODO: Clean up variables that are not used
  recipe: Upload;
  submitted: boolean;

  //TODO: Delete dTags
  dTags = ['cheese', 'pizza', 'pepperoni', 'olives', 'anchovies'];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('profile')).email;
    this.recipe = new Upload(user, '', '', false, []);

    this.submitted = false;
  }

  handleFileInput(files: FileList): void {
    this.recipe.Photos = files;
  }

  handleTagInput(tag: string): void {

  }

  onSubmit() {
    //TODO: Handle if there are no photos uploaded into the form

    this.submitted = true;
    this.recipeService.postRecipe(this.recipe)
      .subscribe(res => {
        console.log('Uploaded recipe: ', res)
      }, error => {
        console.error('Upload recipe error: ', error);
      });
  }
}
