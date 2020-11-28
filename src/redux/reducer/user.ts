import { DefaultLoginProps } from '../../types/authType';

export const LOGIN_REQUEST = 'user/LOGIN_REQUEST' as const;
export const LOGOUT = 'user/LOGOUT' as const;
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'user/LOGIN_FAILURE' as const;

export const login = (diff: DefaultLoginProps) => ({
  type: LOGIN_REQUEST,
  payload: diff,
});
export const logout = () => ({ type: LOGOUT });
export const loginSuccess = (diff: { email: string; name: string }) => ({
  type: LOGIN_SUCCESS,
  payload: diff,
});
export const loginFailure = () => ({ type: LOGIN_FAILURE });

type UserAction =
  | ReturnType<typeof login>
  | ReturnType<typeof logout>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>;

type UserState = {
  isLogin: boolean;
  email: string;
  name: string;
};

const initialState: UserState = {
  isLogin: false,
  email: '',
  name: '',
};

function user(state = initialState, action: UserAction) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return {
        isLogin: true,
        email: action.payload.email,
        name: action.payload.name,
      };
    case LOGOUT:
      return { isLogin: false, email: '', name: '' };
    default:
      return state;
  }
}

export default user;
