import { allowedNodeEnvironmentFlags } from 'process';
import { userSaga } from './userSAGA';
import { all } from 'redux-saga/effects';

// saga 함수들을 rootSaga에 포함시킴
export default function* rootSaga() {
  yield all([userSaga()]);
}
