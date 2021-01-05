import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoRecipeDetailComponent } from './recipe/recipe-detail/no-recipe-detail.component';

const routes:Routes = [
    {path:"", redirectTo:"/recipes", pathMatch:"full"},
    {path:"recipes", component:RecipeComponent, children:[
        {path:"", component:NoRecipeDetailComponent, pathMatch:"full"},
        {path:":id", component:RecipeDetailComponent},
    ]},
    {path:"shopping-list", component:ShoppingListComponent},
    {path:"**", redirectTo:"/recipes"}
]

@NgModule({
    imports:[RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}