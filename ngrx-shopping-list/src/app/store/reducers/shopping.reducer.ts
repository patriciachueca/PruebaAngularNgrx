import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

//El reducer toma parte en gestionar el paso de State X a State Y
//Estado inicial
const initialState: Array<ShoppingItem> = [
    {
        id: "1775935f-36fd-467e-a667-09f95b917f6d",
        name: 'Diet Coke',
    }
];

//El reducer tiene 2 parámetros, 
    //state: Estado actual
    //action: Acción para cambiar el estado
export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
    switch (action.type) {
        // si la accion es añadir item, devuelve todos los action anteriores y le añades el payload al final
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}