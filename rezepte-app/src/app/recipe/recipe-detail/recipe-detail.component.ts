import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shopping-list/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((data:Recipe) => {
      this.selectedRecipe = data;
    });
  }

  onAddToList(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

}
