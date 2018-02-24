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
  recipe = new Upload('', '', [], []);
  submitted: boolean;


  //TODO: Delete dTags and model
  dTags = ['cheese', 'pizza', 'pepperoni', 'olives', 'anchovies'];
  model = new Upload('Bob', 'Curry', ['picture1', 'picture2'], ['spice', 'hot', 'rice']);

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.submitted = false;
  }

  handleFileInput(files: FileList): void {
    this.recipe.photos = files;
  }

  handleTagInput(tag: string): void {

  }

  onSubmit() {
    //TODO: Handle if there are no photos uploaded into the form
    //TODO: Add username to the recipe class
    this.submitted = true;
    this.recipeService.postRecipe(this.recipe)
      .subscribe(res => {
        console.log('Uploaded recipe: ', res)
      }, error => {
        console.error('Upload recipe error: ', error);
      });
  }



}
