import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { RecipeService } from '../services/api/recipe.service';
import { AuthService } from './../services/auth/auth.service';
import { Recipe } from './../recipe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() onSearch = new EventEmitter<Recipe>();
  recipes$: Observable<Recipe[]>;
  private searchTerms = new Subject<string>();

  constructor(
    public authService: AuthService,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.recipes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.recipeService.searchRecipes(term))
    )
  }

  handleSearch(term: string): void {
    this.searchTerms.next(term);
  }

  changeRecipe(recipe: Recipe): void {
    this.onSearch.emit(recipe);
  }

}
