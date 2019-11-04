import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private igChangeSub: Subscription;
  constructor(private sLService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sLService.getingredients();
  this.igChangeSub = this.sLService.iListUpdated.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }
  onEditItem(index: number){
    this.sLService.startedEdit.next(index);
  }
  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }
}
