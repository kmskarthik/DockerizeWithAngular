import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //@Output() recipeSelected = new EventEmitter<Recipe>();

  recipes:Recipe[];

  constructor(private recipeService:RecipeService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  /*onRecipeSelection(recipe:Recipe){
    this.recipeService.recipeSelected.emit(recipe);
  }*/

  onNewRecipe(){
    this.router.navigate(["new"], {relativeTo:this.activeRoute})
  }

}
