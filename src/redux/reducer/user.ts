import axios from 'axios';
import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { authSignin } from './../../api/auth';
import { DefaultLoginProps } from '../../types/authType';
import { stat } from 'fs';

const LOGIN = 'user/LOGIN' as const;
const LOGOUT = 'user/LOGOUT' as const;

export const login = (diff: DefaultLoginProps) => ({
  type: LOGIN,
  payload: diff,
});
export const logout = () => ({ type: LOGOUT });

type UserAction = ReturnType<typeof login> | ReturnType<typeof logout>;

type UserState = {
  isLogin: boolean;
  email: string;
  password: string;
};

const initialState: UserState = {
  isLogin: false,
  email: 'non-login-email',
  password: 'non-login-password',
};

function* getUserSaga(action) {
  console.log('Saga 로그인 진입');
  try {
    const response = yield call(
      authSignin,
      action.payload.email,
      action.payload.password,
    );
    yield put({ type: LOGIN, payload: response });
  } catch (e) {
    console.log('로그인 실패(saga에서 호출)');
    //yield put({type:})
  }
}

function* logoutSaga(action) {
  yield delay(3000);
  console.log('로그아웃 성공');
}

export function* userSaga() {
  yield takeEvery(LOGIN, getUserSaga);
  yield takeEvery(LOGOUT, logoutSaga);
}

function user(state = initialState, action: UserAction) {
  switch (action.type) {
    case LOGIN:
      return {
        isLogin: true,
        email: action.payload.email,
        password: action.payload.password,
      };
    case LOGOUT:
      return { isLogin: false, email: '', password: '' };
    default:
      return state;
  }
}

export default user;
