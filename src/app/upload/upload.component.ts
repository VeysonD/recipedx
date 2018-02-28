import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Upload } from '../upload-recipe';

import { RecipeService } from'../services/api/recipe.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  //TODO: Clean up variables that are not used
  closeResult: string;
  recipe: Upload;
  tagInput: string = '';
  missingField: Array<string> = [];

  constructor(
    private recipeService: RecipeService,
    private modalService: NgbModal
  ) { }

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
    //TODO: Handle the failModals and success modals as if opening a new component

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
      // this.showFailModal(fail);
    } else if (this.recipe.Tags.length === 0) {
      this.missingField.push('tags');
      // this.showFailModal(fail);
    } else {
      this.missingField.push('photos', 'tags');
      // this.showFailModal(fail);
    }
  }

  showFailModal(fail) {
    //TODO: Refactor fail argument to component

    this.modalService.open(fail).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    }, reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
