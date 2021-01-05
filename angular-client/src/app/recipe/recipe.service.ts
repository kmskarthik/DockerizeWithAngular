import { ShoppingListService } from './../shopping-list/shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    //recipeSelected = new EventEmitter<Recipe> ();

    recipeSel:Recipe;

    private recipes:Recipe[] = [ 
        new Recipe(1,'French Fries', 
        'Try my new recipe', 'https://live.staticflickr.com/4891/45165261135_69cb589907_b.jpg',
        [
            new Ingredient("Meat", 1),
            new Ingredient("French Fries", 20)
        ]
        ),
        new Recipe(2,'Chicken Burger',
         'Try my another recipe', 'https://live.staticflickr.com/4891/45165261135_69cb589907_b.jpg',
         [
            new Ingredient("Bun", 1),
            new Ingredient("Chicken", 2)
        ]
         )
      ];

    constructor(private shoppingListService:ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients:Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(id:number) {

        this.recipes.slice().forEach(
            (recipe) => {
                if (recipe.id === id) {
                   this.recipeSel = recipe;
                }
            }
        )

        return this.recipeSel;
    }
}