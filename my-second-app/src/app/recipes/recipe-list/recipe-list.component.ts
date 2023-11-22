import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.foodandwine.com/thmb/gMQmtA0djv1T93uDazHumXG0Ss4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Gnocchi-Parisienne-FT-RECIPE0523-a2ca65b48ffc4569adf8baafd009dfaa.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.foodandwine.com/thmb/gMQmtA0djv1T93uDazHumXG0Ss4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Gnocchi-Parisienne-FT-RECIPE0523-a2ca65b48ffc4569adf8baafd009dfaa.jpg'),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
