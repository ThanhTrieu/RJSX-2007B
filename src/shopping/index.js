import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import configStore from './redux/store';
import { Skeleton, Spin } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const { store, persistor } = configStore({});
const HomeComponent = lazy(() => import('./pages/home/index'));
const CartComponent = lazy(() => import('./pages/cart/index'));


const ShoppingCart = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spin />}
        persistor={persistor}
      >
        <Router>
          <Suspense
            fallback={<Skeleton active />}
          >
            <Switch>
              <Route path="/home">
                <HomeComponent/>
              </Route>
              <Route path="/cart">
                <CartComponent/>
              </Route>
              <Route exact path="/">
                <HomeComponent/>
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  )
}
export default ShoppingCart;