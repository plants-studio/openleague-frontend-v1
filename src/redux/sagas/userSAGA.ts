import axios from 'axios';
import { call, put, takeEvery, delay } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './../reducer/user';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

function requestUserAxios(email: string, password: string) {
  return axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/signin`, {
    email,
    password,
  });
}

function* requestUserSaga(action) {
  try {
    const response = yield call(
      requestUserAxios,
      action.payload.email,
      action.payload.password,
    );
    if (response.status === 200) {
      console.log('Axios : success');
      Cookies.set('accessToken', response.data.accessToken);
      Cookies.set('refreshToken', response.data.refreshToken);
      const decoded: {
        user: {
          name: string;
          email: string;
        };
      } = jwtDecode(Cookies.get('accessToken'));
      Cookies.set('email', decoded.user.email);
      Cookies.set('name', decoded.user.name);

      yield put({
        type: LOGIN_SUCCESS,
        payload: { email: decoded.user.email, name: decoded.user.name },
      });
    }
  } catch (e) {
    switch (e.response.status) {
      case 401:
        console.log('Axios : 비밀번호가 일치하지 않습니다.');
        break;
      case 404:
        console.log('Axios : 계정이 존재하지 않습니다.');
        break;
      case 412:
        console.log('Axios : 데이터가 누락되었습니다');
        break;
      default:
        console.log('Axios : 알 수 없는 오류가 발생했습니다.');
        break;
    }
    yield put({ type: LOGIN_FAILURE });
  }
}

function* loginFailureSaga(action) {
  console.log('login fail');
}

function* logoutSaga(action) {
  yield delay(3000);
  console.log('로그아웃 성공');
}

export function* userSaga() {
  yield takeEvery(LOGIN_REQUEST, requestUserSaga);
  yield takeEvery(LOGIN_FAILURE, loginFailureSaga);
  yield takeEvery(LOGOUT, logoutSaga);
}
