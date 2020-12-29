import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
    //Ponerlo entre paréntesis indica que esta acción es parte del SHOPPING state 
    ADD_ITEM = '[SHOPPING] Add Item',
    DELETE_ITEM = '[SHOPPING] Delete Item'
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM; //Type: tipo de accion que vamos a dispatchear a la Store

    constructor(public payload: ShoppingItem) { } //Payload (Opcional): datos que van junto con la accion
}

export class DeleteItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM; //Type: tipo de accion que vamos a dispatchear a la Store

    constructor(public payload: string) { } //Payload (Opcional): datos que van junto con la accion
}

export type ShoppingAction = AddItemAction | DeleteItemAction;
