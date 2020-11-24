import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const configRootPersist = {
  key: 'root-persist-config',
  storage,
  whitelist: ['cartReducer']
}

const rootReducerPersist = persistReducer(configRootPersist, rootReducer);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configStore = (loadState = {}) => {
  const store = createStore(
    rootReducerPersist,
    loadState,
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  )
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor }
}
export default configStore;