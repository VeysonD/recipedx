import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Recipe } from './../../recipe';
import { Upload } from './../../upload-recipe';


@Injectable()
export class RecipeService {
  //TODO: obscure the API endpoint

  private recipeApi = 'http://127.0.0.1:4201/api';
  private token = null;
  private httpOptions = null;

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<Recipe[]>(this.recipeApi + '/recipes', httpOptions)
      .pipe(
        catchError(this.handleError('getRecipes', []))
      );
  }

  postRecipe(recipe: Upload): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
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

    return this.http.post<FormData>(this.recipeApi +'/upload', formData, httpOptions)
      .pipe(
        catchError(this.handleError('postRecipe', []))
      );
  }

  //TODO: Initialize this service's headers after the auth service finishes successfully

  private establishHeaders(): void {
    this.token = localStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    }
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
