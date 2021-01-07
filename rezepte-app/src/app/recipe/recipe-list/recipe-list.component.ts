import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shopping-list/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Rezept1', 'Beschreibung erstes Rezept', 'https://www.gernekochen.de/wp-content/uploads/2018/09/rigatoni-auflauf-rezept-gernekochen-hauptgericht.jpg', [new Ingredient('Zutat1', 10), new Ingredient('Zutat2', 10)]),
    new Recipe('Rezept2', 'Beschreibung zweites Rezept', 'https://www.gernekochen.de/wp-content/uploads/2018/09/rigatoni-auflauf-rezept-gernekochen-hauptgericht.jpg', [new Ingredient('Zutat1', 10), new Ingredient('Zutat2', 10)]),
    new Recipe('Rezept3', 'Beschreibung drittes Rezept', 'https://www.gernekochen.de/wp-content/uploads/2018/09/rigatoni-auflauf-rezept-gernekochen-hauptgericht.jpg', [new Ingredient('Zutat1', 10), new Ingredient('Zutat2', 10)])
  ]
  
  
    @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe:Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
