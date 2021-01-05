import { ShoppingListService } from './shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients:Ingredient[];
  private subscription:Subscription;

  constructor(private shoppingListService:ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  editItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

 /* onIngredientAdded(ingredient:Ingredient) {
    this.shoppingListService.addIngredients(ingredient);
  }*/

}
