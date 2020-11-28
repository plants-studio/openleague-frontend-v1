import axios from 'axios';
import { call, put, takeEvery, delay } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../reducer/userReducer';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

// NOTE SEGA OBSERVATION
export function* userSaga() {
  yield takeEvery(LOGIN_REQUEST, requestUserSaga);
  yield takeEvery(LOGIN_FAILURE, loginFailureSaga);
  yield takeEvery(LOGOUT, logoutSaga);
}

// REVIEW
// NOTE SEGA FUNCTION
function* requestUserSaga(action) {
  try {
    const response = yield call(
      requestUserAxios,
      action.payload.email,
      action.payload.password,
    );
    if (response.status === 200) {
      console.log('Axios : success');
      Cookies.set('accessToken', response.data.accessToken, { expires: 7 });
      Cookies.set('refreshToken', response.data.refreshToken, {
        expires: 7,
        HttpOnly: true,
      });
      const decoded: {
        user: {
          name: string;
          email: string;
        };
      } = jwtDecode(Cookies.get('accessToken'));

      const splitedName = decoded.user.name.split('#');
      yield put({
        type: LOGIN_SUCCESS,
        payload: {
          email: decoded.user.email,
          userName: splitedName[0],
          userCode: splitedName[1],
        },
      });
    }
  } catch (e) {
    switch (e.response.status) {
      case 401:
        //TODO
        alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요!');
        break;
      case 404:
        //TODO
        alert(
          '계정이 존재하지 않습니다. 올바른 정보를 입력했는지 확인해주세요!',
        );
        break;
      case 412:
        //TODO
        console.log('Axios : 데이터가 누락되었습니다');
        break;
      default:
        //TODO
        console.log('Axios : 알 수 없는 오류가 발생했습니다.');
        break;
    }
    yield put({ type: LOGIN_FAILURE });
  }
}

// REVIEW
// NOTE SEGA FUNCTION
function* loginFailureSaga(action) {}

//REVIEW
// NOTE SEGA FUNCTION
function* logoutSaga(action) {
  yield call(revokeToken);
  yield call(deleteCookie);
  console.log('logoutSaga : Logout completed');
}

function requestUserAxios(email: string, password: string) {
  return axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/signin`, {
    email,
    password,
  });
}

function revokeToken() {
  return axios
    .post(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/revoke`, undefined, {
      headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
      },
    })
    .then(() => {
      console.log('revokeToken : delete AccessToken Complete');
    })
    .catch((e) => {
      console.log('revokeToken : delete AccessToken Fail' + e.response.status);
    });
}

function deleteCookie() {
  try {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  } catch (e) {
    console.log('deleteCookie : Cookies Delete Failed');
  }
}
