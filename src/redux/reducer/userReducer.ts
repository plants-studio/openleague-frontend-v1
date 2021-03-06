import { stat } from 'fs';
import { DefaultLoginProps, DefaultSignupProps } from '../../types/authType';

// NOTE ACTION TYPE
export const LOGIN_REQUEST = 'user/LOGIN_REQUEST' as const;
export const LOGOUT = 'user/LOGOUT' as const;
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'user/LOGIN_FAILURE' as const;
export const RELOAD_REQUEST = 'user/RELOAD_REQUEST' as const;
export const RELOAD_FAILURE = 'user/RELOAD_FAILURE' as const;
export const REFRESH_REQUEST = 'user/REFRESH_REQUEST' as const;
export const REFRESH_SUCCESS = 'user/REFRESH_SUCCESS' as const;
export const REFRESH_FAILURE = 'user/REFRESH_FAILURE' as const;
export const SIGNUP_REQUEST = 'user/SIGNUP_REQUEST' as const;
export const SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS' as const;
export const SIGNUP_FAILURE = 'user/SIGNUP_FAILURE' as const;

// NOTE ACTION FUNCTION
export const loginRequest = (diff: DefaultLoginProps) => ({
  type: LOGIN_REQUEST,
  payload: diff,
});
export const logout = () => ({ type: LOGOUT });
export const loginSuccess = (diff: {
  email: string;
  userName: string;
  userCode: string;
  userProfileImage: string;
  userId: string;
  isAdmin: boolean;
}) => ({ type: LOGIN_SUCCESS, payload: diff });
export const loginFailure = () => ({ type: LOGIN_FAILURE });
export const reloadRequest = () => ({ type: RELOAD_REQUEST });
export const reloadFailure = () => ({ type: RELOAD_FAILURE });
export const refreshRequest = () => ({ type: REFRESH_REQUEST });
export const refreshSuccess = (diff: {
  email: string;
  userName: string;
  userCode: string;
  userProfileImage: string;
  userId: string;
  isAdmin: boolean;
}) => ({ type: REFRESH_SUCCESS, payload: diff });
export const refreshFailure = () => ({ type: REFRESH_FAILURE });
export const signupRequest = (diff: DefaultSignupProps) => ({
  type: SIGNUP_REQUEST,
  payload: diff,
});
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
export const signupFailure = () => ({ type: SIGNUP_FAILURE });

// NOTE ACTION TYPE
type UserAction =
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof logout>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof reloadRequest>
  | ReturnType<typeof reloadFailure>
  | ReturnType<typeof refreshRequest>
  | ReturnType<typeof refreshSuccess>
  | ReturnType<typeof refreshFailure>
  | ReturnType<typeof signupRequest>
  | ReturnType<typeof signupSuccess>
  | ReturnType<typeof signupFailure>;

// NOTE STORE TYPE
type UserState = {
  isLogin: boolean;
  isLoadDone: boolean;
  email: string;
  userName: string;
  userCode: string;
  userProfileImage: string;
  userId: string;
  isAdmin: boolean;
};

// NOTE STORE INITIALIZE
const initialState: UserState = {
  isLogin: false,
  isLoadDone: false,
  email: '',
  userName: '',
  userCode: '',
  userProfileImage: '',
  userId: '',
  isAdmin: false,
};

// NOTE REDUCER
function user(state = initialState, action: UserAction) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoadDone: false };
    case LOGIN_SUCCESS:
      return {
        isLogin: true,
        isLoadDone: true,
        email: action.payload.email,
        userName: action.payload.userName,
        userCode: action.payload.userCode,
        userProfileImage: action.payload.userProfileImage,
        userId: action.payload.userId,
        isAdmin: action.payload.isAdmin,
      };
    case LOGIN_FAILURE:
      return state;
    case LOGOUT:
      return {
        isLogin: false,
        isLoadDone: true,
        email: '',
        userName: '',
        userCode: '',
        userProfileImage: '',
        userId: '',
        isAdmin: '',
      };
    case RELOAD_REQUEST:
      return { ...state, isLoadDone: false };
    case RELOAD_FAILURE:
      return { ...state, isLoadDone: true };
    case REFRESH_REQUEST:
      return { ...state, isLoadDone: false };
    case REFRESH_SUCCESS:
      return {
        isLogin: true,
        isLoadDone: true,
        email: action.payload.email,
        userName: action.payload.userName,
        userCode: action.payload.userCode,
        userProfileImage: action.payload.userProfileImage,
        userId: action.payload.userId,
        isAdmin: action.payload.isAdmin,
      };
    case REFRESH_FAILURE:
      return { ...state, isLogin: false, isLoadDone: true };
    case SIGNUP_REQUEST:
      return state;
    case SIGNUP_SUCCESS:
      return state;
    case SIGNUP_FAILURE:
      return state;
    default:
      return state;
  }
}

export default user;
