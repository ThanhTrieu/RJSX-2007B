import { all, call } from 'redux-saga/effects';
import { watchGetDataSaga } from '../pages/home/saga/product-saga';

export default function* rootSaga() {
  yield all([
    call(watchGetDataSaga)
  ])
}