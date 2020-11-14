import { combineReducers } from 'redux';
import { productReducer } from '../pages/home/reducers/product-reducer';

const rootReducer = combineReducers({
  productReducer
});
export default rootReducer;