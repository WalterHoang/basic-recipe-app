import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecipeComponent } from './main/recipe/recipe.component';
import { ShopListComponent } from './main/shop-list/shop-list.component';
import { RecipeDetailComponent } from './main/recipe/recipe-detail/recipe-detail.component';
import { ShopListEditComponent } from './main/shop-list/shop-list-edit/shop-list-edit.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { RecipeItemComponent } from './main/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './main/recipe/recipe-list/recipe-list.component';
import { DropdownDirective } from './main/shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './main/recipe/recipe-start/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './main/recipe/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ShopListComponent,
    RecipeDetailComponent,
    ShopListEditComponent,
    NavigationComponent,
    RecipeItemComponent,
    RecipeListComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
