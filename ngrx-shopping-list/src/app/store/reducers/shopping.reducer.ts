/* import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

//El reducer toma parte en gestionar el paso de State X a State Y
//Estado inicial
const initialState: Array<ShoppingItem> = [
    {
        id: "1775935f-36fd-467e-a667-09f95b917f6d",
        name: 'Diet Coke',
    }
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
} */