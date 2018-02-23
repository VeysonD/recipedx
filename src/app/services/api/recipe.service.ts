import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Recipe } from './../../recipe';


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

  postRecipe(files: FileList): Observable<any> {
    //TODO:  fit the formData into an object along with the username, and tags

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      })
    };
    const formData: FormData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('photoKey', files[i])
    }

    console.log('What is the formData being sent off:', formData.get('photoKey'));

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
