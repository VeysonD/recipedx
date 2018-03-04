import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/api/recipe.service';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;
  upload: boolean;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe(recipes => {
        console.log('What are the recipes:', recipes);
        this.recipes = recipes;
      });
    this.upload = false;
  }

  public recipeClick(recipe): void {
    this.selectedRecipe = recipe;
    this.upload = false;
  }

  public uploadClick(): void {
    console.log('Upload has been clicked');
    this.upload = !this.upload;
  }

}
