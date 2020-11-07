import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import AppMovie from './pages/movie';

const { store } = configStore({});

const Movies = () => {
  return (
    <Provider store={store}>
      <AppMovie />
    </Provider>
  )
}
export default Movies;