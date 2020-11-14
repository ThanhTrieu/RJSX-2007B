import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configStore = (loadState = {}) => {
  const store = createStore(
    rootReducer,
    loadState,
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  )
  sagaMiddleware.run(rootSaga);
  return { store }
}
export default configStore;