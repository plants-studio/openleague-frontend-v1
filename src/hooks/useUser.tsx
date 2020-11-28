import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducer';
import { loginRequest, logout, reload } from '../redux/reducer/userReducer';
import { useCallback } from 'react';
import { DefaultLoginProps } from '../types/authType';

export default function useCounter() {
  // NOTE STORE SELECTOR & DISPATCH
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const email = useSelector((state: RootState) => state.user.email);
  const userName = useSelector((state: RootState) => state.user.userName);
  const userCode = useSelector((state: RootState) => state.user.userCode);
  const dispatch = useDispatch();

  // NOTE CALLBACK FUNCTION FOR COMPONENTS
  const CLoginRequest = useCallback(
    (diff: DefaultLoginProps) => dispatch(loginRequest(diff)),
    [dispatch],
  );
  const CAuthLogout = useCallback(() => dispatch(logout()), [dispatch]);
  const CReload = useCallback(() => dispatch(reload()), [dispatch]);

  return {
    isLogin,
    email,
    userName,
    userCode,
    CLoginRequest,
    CAuthLogout,
    CReload,
  };
}
