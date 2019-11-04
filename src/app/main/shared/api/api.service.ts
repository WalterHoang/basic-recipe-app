import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../../recipe/services/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService) {

  }
  storeRecipes() {
    console.log('saving recipes');
    const recipes = this.recipeService.getrecipes();
    // this.http.post will post 1 recipe
    // this put works with firebase
    //this.http.put(some url here, recipes).subscribe(response =>{console.log(response)});
    console.log('recipes saved!');
  }
  fetchRecipes(){
    console.log('Getting recipes');
    //const recipes = this.http.get(some url)
    //.subscribe(recipes => {})
    console.log('Get successful!');
    //overwrite array of recipes in recipe service
  }
}
