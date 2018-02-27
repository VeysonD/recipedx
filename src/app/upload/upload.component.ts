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
  tagInput: string = '';
  missingField: Array<string> = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('profile')).email;
    this.recipe = new Upload(user, '', null, false, []);
  }

  handleFileInput(files: FileList): void {
    this.recipe.Photos = files;
  }

  handleTagDelete(index: number): void {
    this.recipe.Tags.splice(index, 1);
  }

  handleTagInput(): void {
    console.log('handle tag input');
    if (this.tagInput.length !== 0) {
      this.recipe.Tags.push(this.tagInput);
      this.tagInput = '';
    }
  }

  onReset() {
    // Reset the upload recipe
    this.recipe.title = '';
    this.recipe.Photos = null;
    this.recipe.isStarred = false;
    this.recipe.Tags = [];
  }

  onSubmit() {
    //TODO: Handle if there are no photos uploaded into the form

    if (this.recipe.Photos !== null && this.recipe.Tags.length !== 0) {
      this.recipeService.postRecipe(this.recipe)
        .subscribe(res => {
          console.log('Uploaded recipe: ', res)
        }, error => {
          console.error('Upload recipe error: ', error);
        });

      this.onReset();
    } else if (this.recipe.Photos === null) {
      this.missingField.push('photos');
      this.showFailModal();
    } else if (this.recipe.Tags.length === 0) {
      this.missingField.push('tags');
      this.showFailModal();
    } else {
      this.missingField.push('photos', 'tags');
      this.showFailModal();
    }
  }

  showFailModal() {
    // const failModal = $('#my-modal-fail');
    // console.log('What is the modal: ', failModal);
    // failModal.modal('show');
  }
}
