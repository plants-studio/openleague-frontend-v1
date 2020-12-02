import { DefaultLoginProps } from '../../types/authType';

// NOTE ACTION TYPE
export const LOGIN_REQUEST = 'user/LOGIN_REQUEST' as const;
export const LOGOUT = 'user/LOGOUT' as const;
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'user/LOGIN_FAILURE' as const;
export const RELOAD = 'user/RELOAD' as const;
export const REFRESH_REQUEST = 'user/REFRESH_REQUEST' as const;
export const REFRESH_SUCCESS = 'user/REFRESH_SUCCESS' as const;
export const REFRESH_FAILURE = 'user/REFRESH_FAILURE' as const;

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
}) => ({ type: LOGIN_SUCCESS, payload: diff });
export const loginFailure = () => ({ type: LOGIN_FAILURE });
export const reload = () => ({ type: RELOAD });
export const refreshRequest = () => ({ type: REFRESH_REQUEST });
export const refreshSuccess = (diff: {
  email: string;
  userName: string;
  userCode: string;
  userProfileImage: string;
}) => ({ type: REFRESH_SUCCESS, payload: diff });
export const refreshFailure = () => ({ type: REFRESH_FAILURE });

// NOTE ACTION TYPE
type UserAction =
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof logout>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof reload>
  | ReturnType<typeof refreshRequest>
  | ReturnType<typeof refreshSuccess>
  | ReturnType<typeof refreshFailure>;

// NOTE STORE TYPE
type UserState = {
  isLogin: boolean;
  email: string;
  userName: string;
  userCode: string;
  userProfileImage: string;
};

// NOTE STORE INITIALIZE
const initialState: UserState = {
  isLogin: false,
  email: '',
  userName: '',
  userCode: '',
  userProfileImage: '',
};

// NOTE REDUCER
function user(state = initialState, action: UserAction) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return {
        isLogin: true,
        email: action.payload.email,
        userName: action.payload.userName,
        userCode: action.payload.userCode,
        userProfileImage: action.payload.userProfileImage,
      };
    case LOGIN_FAILURE:
      return state;
    case LOGOUT:
      return {
        isLogin: false,
        email: '',
        userName: '',
        userCode: '',
        userProfileImage: '',
      };
    case RELOAD:
      return state;
    case REFRESH_REQUEST:
      return state;
    case REFRESH_SUCCESS:
      return {
        isLogin: true,
        email: action.payload.email,
        userName: action.payload.userName,
        userCode: action.payload.userCode,
        userProfileImage: action.payload.userProfileImage,
      };
    case REFRESH_FAILURE:
      return state;
    default:
      return state;
  }
}

export default user;
