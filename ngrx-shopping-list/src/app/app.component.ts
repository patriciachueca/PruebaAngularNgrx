import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AppState } from './store/models/app-state.model';
import { AddItemAction } from './store/actions/shopping.actions';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shoppingItems: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping);
    //También podríamos haber seleccionado nuestro shoppin
    //this.shoppingItems = this.store.select('shopping');
  }

  addItem() {  //Dispatch un action en la store 
    this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = { id: '', name: '' };
  }
}
