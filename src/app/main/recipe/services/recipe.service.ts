import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shop-list/services/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipe: Recipe[] = [
    new Recipe('Borger',
      'A delicious borger',
      'https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_1280.jpg',
      [
        new Ingredient("Borger Buns", 2),
        new Ingredient("Borger Lettuce", 1),
        new Ingredient("Borger Onion", 1),
        new Ingredient("Borger Tomato", 1),
        new Ingredient("Borger Beef", 1),
        new Ingredient("Borger Cheese", 1)
      ]),
    new Recipe('Premium Borger',
      'A delicious borger with premium Ingredients',
      'https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_1280.jpg',
      [
        new Ingredient("Borger Sesame Buns", 2),
        new Ingredient("Premium Borger Lettuce", 1),
        new Ingredient("Premium Borger Onion", 1),
        new Ingredient("Premium Borger Tomato", 1),
        new Ingredient("Premium Borger steak cut Beef", 1),
        new Ingredient("Premium Borger Cheese", 1),
        new Ingredient("Fried Egg", 1),
        new Ingredient("Crinkle cut fries", 20)
      ]),
  ];
  constructor(private slService: ShoppingListService) { }

  getrecipes() {
    return this.recipe.slice();
  }
  getRecipe(index: number) {
    return this.recipe[index];
  }
  addIngredientsToShopList(ingredients: Ingredient[]) {
    this.slService.addRecipeIngredientsToList(ingredients);
  }
  addRecipe(recipe: Recipe){
    this.recipe.push(recipe);
    this.recipesChanged.next(this.recipe.slice());
  }
  updateRecipe(index: number, recipe: Recipe){
    this.recipe[index] = recipe;
    this.recipesChanged.next(this.recipe.slice());
  }
  deleteRecipe(index: number){
    this.recipe.splice(index, 1);
    this.recipesChanged.next(this.recipe.slice());
  }
}
