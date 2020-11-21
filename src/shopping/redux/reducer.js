import { combineReducers } from 'redux';
import { productReducer } from '../pages/home/reducers/product-reducer';
import { cartReducer } from '../pages/cart/reducers/cart-reducer';

const rootReducer = combineReducers({
  productReducer,
  cartReducer
});
export default rootReducer;