import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from './../recipe';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Output() onRecipe = new EventEmitter<Recipe>();

  constructor() { }

  changeRecipe(recipe: Recipe): void {
    this.onRecipe.emit(recipe);
  }

  ngOnInit() {
  }

}
