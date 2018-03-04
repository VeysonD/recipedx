import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Recipe } from './../../recipe';
import { Upload } from './../../upload-recipe';


@Injectable()
export class RecipeService {
  //TODO: obscure the API endpoint

  private recipeApi = 'http://127.0.0.1:4201/api';
  private httpOptions = null;

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    this.establishHeaders();
    return this.http.get<Recipe[]>(this.recipeApi + '/recipes', this.httpOptions)
      .pipe(
        catchError((error, c) => this.handleError(error))
      );
  }

  postRecipe(recipe: Upload): Observable<any> {
    const isStarred = recipe.isStarred ? 'y': 'n';
    const formData: FormData = new FormData();

    formData.append('user', recipe.user);
    formData.append('title', recipe.title);
    formData.append('isStarred', isStarred);

    for (let i = 0; i < recipe.Photos.length; i++) {
      formData.append('photos', recipe.Photos[i])
    }

    for (let i = 0; i < recipe.Tags.length; i++) {
      formData.append('tags', recipe.Tags[i]);
    }

    console.log('What is the formData photos being sent off:', formData.get('photos'));

    return this.http.post<FormData>(this.recipeApi +'/upload', formData, this.httpOptions)
      .pipe(
        catchError((error, c) => this.handleError(error))
      );
  }

  private establishHeaders(): void {
    const token = localStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
  }

  private handleError (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occured
      console.error('An error occured: ', error.error.message);
    } else {
      // The backend returned an unsccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable
    return new ErrorObservable(
    'There was an error; please try again later.');
  }
}
