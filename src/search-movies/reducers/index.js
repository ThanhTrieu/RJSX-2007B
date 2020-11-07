import { combineReducers } from 'redux';
import { searchMovieReducer } from './search-reducer';

const rootReducer = combineReducers({
  searchMovie: searchMovieReducer
});
export default rootReducer;