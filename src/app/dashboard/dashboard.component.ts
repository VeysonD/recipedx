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

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe(recipes => {
        console.log('What are the recipes:', recipes);
        this.recipes = recipes;
      });
  }

  public recipeClick(recipe): void {
    this.selectedRecipe = recipe;
  }

}
