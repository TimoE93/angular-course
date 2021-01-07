import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping-list/ingredient.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes:Recipe[] = [
    new Recipe('Rezept1', 'Beschreibung erstes Rezept', 'https://www.gernekochen.de/wp-content/uploads/2018/09/rigatoni-auflauf-rezept-gernekochen-hauptgericht.jpg', [new Ingredient('Zutat1', 10), new Ingredient('Zutat2', 10)]),
    new Recipe('Rezept2', 'Beschreibung zweites Rezept', 'https://www.gernekochen.de/wp-content/uploads/2018/09/rigatoni-auflauf-rezept-gernekochen-hauptgericht.jpg', [new Ingredient('Zutat1', 10), new Ingredient('Zutat2', 10)]),
    new Recipe('Rezept3', 'Beschreibung drittes Rezept', 'https://www.gernekochen.de/wp-content/uploads/2018/09/rigatoni-auflauf-rezept-gernekochen-hauptgericht.jpg', [new Ingredient('Zutat1', 10), new Ingredient('Zutat2', 10)])
  ]

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  pushSelectedRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
