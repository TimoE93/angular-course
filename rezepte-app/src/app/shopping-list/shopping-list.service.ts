import { EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";

export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  constructor() { }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  getIngredients(){
    return this.ingredients;
  }

}
