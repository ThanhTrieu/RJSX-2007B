import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import configStore from './redux/store';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const { store } = configStore({});
const HomeComponent = lazy(() => import('./pages/home/index'));

const ShoppingCart = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense
          fallback={<Skeleton active />}
        >
          <Switch>
            <Route path="/home">
              <HomeComponent/>
            </Route>
            <Route exact path="/">
              <HomeComponent/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  )
}
export default ShoppingCart;