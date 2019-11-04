import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';


@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;
  constructor(private sLService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.sLService.startedEdit.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.sLService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }
    );
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(
      value.name, value.amount
    )
    if (this.editMode) {
      this.sLService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.sLService.addtoIngredientList(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }
  onDelete(){
    this.sLService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
