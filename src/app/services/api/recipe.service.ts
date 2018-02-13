import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Recipe } from './../../recipe';


@Injectable()
export class RecipeService {
  private recipeApi = 'http://127.0.0.1:4201/api';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    
    return this.http.get<Recipe[]>(this.recipeApi + '/recipes', httpOptions)
      .pipe(
        catchError(this.handleError('getRecipes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
