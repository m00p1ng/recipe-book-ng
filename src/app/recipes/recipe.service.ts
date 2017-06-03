import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'http://www.foodtolove.com.au/assets/images/badge-collection.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
     new Recipe(
      'A Test Recipe2',
      'This is simply a test',
      'http://www.foodtolove.com.au/assets/images/badge-collection.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Moo', 20)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}