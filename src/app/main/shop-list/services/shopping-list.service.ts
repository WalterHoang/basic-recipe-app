import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  iListUpdated = new Subject<Ingredient[]>();
  startedEdit = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Pound of Beef', 1),
    new Ingredient('Tomato', 2),
    new Ingredient('Onion', 2),
    new Ingredient('Block of Cheese', 1)
  ];
  constructor() { }

  getingredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addtoIngredientList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.iListUpdated.next(this.ingredients.slice());
  }
  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.iListUpdated.next(this.ingredients.slice());
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.iListUpdated.next(this.ingredients.slice());
  }
  addRecipeIngredientsToList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.iListUpdated.next(this.ingredients.slice());
  }
}
