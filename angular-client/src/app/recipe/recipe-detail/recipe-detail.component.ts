import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Routes, Router } from '@angular/router';

@Component({
    "selector": "app-recipe-detail",
    "templateUrl": "./recipe-detail.component.html",
    "styleUrls": ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit{

   // @Input() recipe:Recipe;
   recipe:Recipe;
   id:number;

    constructor(private recipeService:RecipeService, private activeRoute:ActivatedRoute, private route:Router) {

        this.activeRoute.params.subscribe((params:Params) => {
            console.log("Subscribe Recipe Id {}", params["id"]);
           this.recipe = this.recipeService.getRecipe(+params["id"]);
       })
      
       if(this.recipe === undefined) {
          console.log(this.recipe);
          this.route.navigate([""]);
       }
    }

    ngOnInit() {
       
       
    }

    addToShoppingList(){
        this.recipeService.addToShoppingList(this.recipe.ingredients);
    }

    onEditRecipe() {
        this.route.navigate(["edit"], {relativeTo:this.activeRoute});
    }
}