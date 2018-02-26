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
  tagInput: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('profile')).email;
    this.recipe = new Upload(user, '', null, false, []);
    this.tagInput = '';
  }

  handleFileInput(files: FileList): void {
    this.recipe.Photos = files;
  }

  handleTagDelete(index: number): void {
    this.recipe.Tags.splice(index, 1);
  }

  handleTagInput(): void {
    //TODO: Handle if there are no Tags (need at least one and up to 12)
    console.log('handle tag input');
    if (this.tagInput.length !== 0) {
      this.recipe.Tags.push(this.tagInput);
      this.tagInput = '';
    }
  }

  onSubmit() {
    //TODO: Handle if there are no photos uploaded into the form

    this.recipeService.postRecipe(this.recipe)
      .subscribe(res => {
        console.log('Uploaded recipe: ', res)
      }, error => {
        console.error('Upload recipe error: ', error);
      });

    // Reset the upload recipe
    this.recipe.title = '';
    this.recipe.Photos = null;
    this.recipe.isStarred = false;
    this.recipe.Tags = [];
  }
}
