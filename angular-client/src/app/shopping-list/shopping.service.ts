
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';
export class ShoppingListService {

    ingredientChanged = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>();

    private  ingredients:Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
      ]
    
    public getIngredients() {
        return this.ingredients.slice();
    }

    public getIngredient(index:number) : Ingredient {
        return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.getIngredients());
    }

    addIngredients(ingredients:Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.getIngredients());
    }

    updateIngredient(index:number, newIngredient:Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.getIngredients());
    }

    deleteIngredient(index:number) {
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.getIngredients());
    }

}