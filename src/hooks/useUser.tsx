import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducer';
import { login, logout } from '../redux/reducer/user';
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
  const authLogin = useCallback(
    (diff: DefaultLoginProps) => dispatch(login(diff)),
    [dispatch],
  );
  const authLogout = useCallback(() => dispatch(logout()), [dispatch]);

  return {
    isLogin,
    email,
    userName,
    userCode,
    authLogin,
    authLogout,
  };
}
