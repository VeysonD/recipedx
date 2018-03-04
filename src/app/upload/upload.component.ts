import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Upload } from '../upload-recipe';
import { UploadModalFailComponent } from '../upload-modal-fail/upload-modal-fail.component';
import { UploadModalSuccessComponent } from '../upload-modal-success/upload-modal-success.component';

import { RecipeService } from'../services/api/recipe.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  closeResult: string;
  recipe: Upload;
  tagInput: string = '';
  modalError: string = '';

  constructor(
    private recipeService: RecipeService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('profile')).email;
    this.recipe = new Upload(user, '', null, false, []);
  }

  checkTagLength(): boolean {
    return this.recipe.Tags.length < 12;
  }
  handleFileInput(files: FileList): void {
    this.recipe.Photos = files;
  }

  handleTagDelete(index: number): void {
    this.recipe.Tags.splice(index, 1);
  }

  handleTagInput(): void {
    console.log('handle tag input: ', this.tagInput);
    if (this.tagInput.length !== 0 && this.recipe.Tags.length < 12) {
      this.recipe.Tags.push(this.tagInput);
      this.tagInput = '';
    }
  }

  onReset(form: any): void {
    // Reset the upload recipe
    this.recipe.title = '';
    this.recipe.Photos = null;
    this.recipe.isStarred = false;
    this.recipe.Tags = [];
    form.reset();
  }

  onSubmit(form: any): void {
    if (this.recipe.Photos !== null && this.recipe.Tags.length !== 0) {
      this.recipeService.postRecipe(this.recipe)
        .subscribe(res => {
          console.log('Uploaded recipe: ', res);
          this.showSuccessModal();
        }, error => {
          console.error('Upload recipe error: ', error);
          this.modalError = 'api';
          this.showFailModal();
        });
      this.onReset(form);
    } else {
      this.modalError = 'miss';
      this.showFailModal();
    }
  }

  showFailModal(): void {
    const modalRef = this.modalService.open(UploadModalFailComponent);
    modalRef.componentInstance.errorType = this.modalError;

    modalRef.result.then(result => {
      this.closeResult = `Closed with: ${result}`;
      console.log('Fail modal close: ', this.closeResult);
    }, reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('Fail modal close: ', this.closeResult);
    });

    this.modalError = '';
  }

  showSuccessModal(): void {
    this.modalService.open(UploadModalSuccessComponent).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
      console.log('Success modal close: ', this.closeResult);
    }, reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('Success modal close: ', this.closeResult);
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
