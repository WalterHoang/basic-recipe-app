import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './main/recipe/recipe.component';
import { ShopListComponent } from './main/shop-list/shop-list.component';
import { RecipeStartComponent } from './main/recipe/recipe-start/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './main/recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './main/recipe/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipeComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShopListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}