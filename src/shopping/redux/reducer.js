import { combineReducers } from 'redux';
import { productReducer } from '../pages/home/reducers/product-reducer';
import { cartReducer } from '../pages/cart/reducers/cart-reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { connectRouter } from 'connected-react-router';

const configPersistCart = {
  key: 'cart-persist',
  storage,
  whitelist:['cartItems','sumMoney','countItem']
}
const rootReducer = ( history) => combineReducers({
  productReducer,
  cartReducer: persistReducer(configPersistCart, cartReducer),
  router: connectRouter(history)
});
export default rootReducer;