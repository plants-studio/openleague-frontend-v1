import axios from 'axios';
import { call, put, takeEvery, delay } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  RELOAD_REQUEST,
  REFRESH_REQUEST,
  REFRESH_SUCCESS,
  REFRESH_FAILURE,
  RELOAD_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../reducer/userReducer';
import Cookies from 'js-cookie';
import { getDecodedAccessTokenData } from '../../utils/decode';
import {
  saveTokensToCookie,
  searchRefreshToken,
  deleteAllTokenInCookie,
} from './../../utils/cookies';

// NOTE SAGA OBSERVATION
export function* userSaga() {
  yield takeEvery(LOGIN_REQUEST, loginRequestSaga);
  yield takeEvery(LOGOUT, logoutSaga);
  yield takeEvery(RELOAD_REQUEST, reloadSaga);
  yield takeEvery(REFRESH_REQUEST, refreshRequestSaga);
  yield takeEvery(SIGNUP_REQUEST, signupRequestSaga);
}

// REVIEW
// NOTE SAGA FUNCTION
function* loginRequestSaga(action) {
  try {
    const response = yield call(
      AauthSignin,
      action.payload.email,
      action.payload.password,
    );
    if (response.status === 200) {
      saveTokensToCookie(response.data.accessToken, response.data.refreshToken);
      const {
        email,
        userName,
        userCode,
        userProfileImage,
        userId,
        isAdmin,
      } = getDecodedAccessTokenData();
      yield put({
        type: LOGIN_SUCCESS,
        payload: {
          email: email,
          userName: userName,
          userCode: userCode,
          userProfileImage: userProfileImage,
          userId: userId,
          isAdmin: isAdmin,
        },
      });
    }
  } catch (e) {
    yield call(asLoginFailed, e);
    yield put({ type: LOGIN_FAILURE });
  }
}

//REVIEW
// NOTE SAGA FUNCTION
function* logoutSaga(action) {
  yield call(AauthRevoke, 'accessToken');
  yield call(AauthRevoke, 'refreshToken');
  yield call(deleteAllTokenInCookie);
}

// NOTE SAGA FUNCTION
function* reloadSaga(action) {
  const refreshToken = yield call(searchRefreshToken);
  if (refreshToken) {
    yield put({ type: REFRESH_REQUEST });
  } else {
    yield put({ type: RELOAD_FAILURE });
  }
}

// NOTE SAGA FUNCTION
function* refreshRequestSaga(action) {
  try {
    const response = yield call(AauthRefresh);
    if (response.status === 200) {
      yield call(AauthRevoke, 'accessToken');
      yield call(AauthRevoke, 'refreshToken');
      saveTokensToCookie(response.data.accessToken, response.data.refreshToken);
      const {
        email,
        userName,
        userCode,
        userProfileImage,
        userId,
        isAdmin,
      } = getDecodedAccessTokenData();
      yield put({
        type: REFRESH_SUCCESS,
        payload: {
          email: email,
          userName: userName,
          userCode: userCode,
          userProfileImage: userProfileImage,
          userId: userId,
          isAdmin: isAdmin,
        },
      });
    }
  } catch (e) {
    yield put({ type: REFRESH_FAILURE });
  }
}

// NOTE SAGA FUNCTION
function* signupRequestSaga(action) {
  try {
    const response = yield call(
      AauthSignup,
      action.payload.name,
      action.payload.email,
      action.payload.password,
    );
    if (response.status === 200) {
      yield put({
        type: SIGNUP_SUCCESS,
      });
    }
  } catch (e) {
    yield call(asSignupFailed, e);
    yield put({ type: SIGNUP_FAILURE });
  }
}

// TODO alert 메소드를 UI로 제대로 구현하기(모달로)
const asLoginFailed = (e) => {
  switch (e.response.status) {
    case 401:
      alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요!');
      break;
    case 404:
      alert('계정이 존재하지 않습니다. 올바른 정보를 입력했는지 확인해주세요!');
      break;
    case 412:
      console.log('Axios : 데이터가 누락되었습니다');
      break;
    default:
      console.log('Axios : 알 수 없는 오류가 발생했습니다.');
      break;
  }
};

const asSignupFailed = (e) => {
  switch (e.response.status) {
    case 409:
      alert('이미 존재하는 계정입니다!');
      break;
    default:
      alert('알수 없는 오류가 발생했습니다.');
      break;
  }
};

function AauthSignin(email: string, password: string) {
  return axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/signin`, {
    email,
    password,
  });
}

function AauthSignup(name: string, email: string, password: string) {
  return axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/signup`, {
    name,
    email,
    password,
  });
}

function AauthRefresh() {
  return axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/refresh`,
    undefined,
    { headers: { Authorization: `Bearer ${Cookies.get('refreshToken')}` } },
  );
}

function AauthRevoke(tokenName: string) {
  return axios
    .post(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/revoke`, undefined, {
      headers: {
        Authorization: `Bearer ${Cookies.get(tokenName)}`,
      },
    })
    .then(() => {
      console.log(`revokeToken : delete ${tokenName} Complete`);
    })
    .catch((e) => {
      console.log(`revokeToken : delete ${tokenName} Fail` + e.response.status);
    });
}
