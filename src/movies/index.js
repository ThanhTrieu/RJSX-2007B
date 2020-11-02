import React, { lazy, Suspense } from 'react';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const HomeComponent = lazy(() => import('./pages/home'));
const UpcomingComponent = lazy(() => import('./pages/up-coming'));
const SearchComponent = lazy(() => import('./pages/search'));
const DetailComponent = lazy(() => import('./pages/detail'));
const LoginComponent = lazy(() => import('./pages/login'));

const Movies = () => {
  return(
    <Router>
      <Suspense
        fallback={<Skeleton active />}
      >
        <Switch>
          <Route path="/home">
            <HomeComponent />
          </Route>
          <Route path="/up-coming">
            <UpcomingComponent />
          </Route>
          <Route path="/search">
            <SearchComponent />
          </Route>
          {/* localhost:3000/movie/batman~100 */}
          <Route path="/movie/:name~:id">
            <DetailComponent/>
          </Route>
          <Route path="/login">
            <LoginComponent/>
          </Route>
          <Route exact path="/">
            <HomeComponent/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}
export default Movies;