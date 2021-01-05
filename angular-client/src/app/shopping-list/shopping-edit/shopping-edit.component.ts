import { ShoppingListService } from './../shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

//  @ViewChild('nameInput', {static:true}) nameInput:ElementRef;
 // @ViewChild('amountInput', {static:true}) amountInput:ElementRef;

  @ViewChild('shoppingForm', {static:false}) form: NgForm;

 // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  subscription:Subscription;
  editMode:boolean = false;
  editIndex:number;
  editedIngredient:Ingredient;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
    .subscribe((index:number) => {
      this.editMode = true;
      this.editIndex = index;
      this.editedIngredient = this.shoppingListService.getIngredient(index);
      this.form.setValue({
        name: this.editedIngredient.name,
        amount: this.editedIngredient.amount
      })
      console.log("Selected Index:"+this.editIndex)
    })
  }

  onItemAdded(){
    console.log(this.form);
    if(this.form.valid) {
      const ingName = this.form.value.name;
      const ingAmount = this.form.value.amount;
      const ingredient:Ingredient = new Ingredient(ingName, ingAmount);
      if(this.editMode) {
        this.shoppingListService.updateIngredient(this.editIndex, ingredient);
      } else {
        this.shoppingListService.addIngredient(ingredient);
      }
      this.clear();
    }
  }

  onDeleteItem(){
    if(this.editMode) {
      this.shoppingListService.deleteIngredient(this.editIndex);
      this.clear();
    }
  }

  clear(){
    this.form.reset();
    this.editIndex = -1;
    this.editMode = false;
    this.editedIngredient = null;
  }

  //onItemAdded(){
    //const ingName = this.nameInput.nativeElement.value;
    //const ingAmount = this.amountInput.nativeElement.value;
   // const ingredient:Ingredient = new Ingredient(ingName, ingAmount);
   // this.shoppingListService.addIngredient(ingredient);
 // }

}
