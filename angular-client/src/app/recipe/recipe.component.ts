import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {

  /*@Input()*/ recipeSel:Recipe;

  constructor(private recipeService: RecipeService) { 
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe:Recipe) => {
    //     this.recipeSel = recipe;
    //   }
    // )
  }

  ngOnInit() {
  }

}
