import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducer';
import { login, logout } from '../redux/reducer/user';
import { useCallback } from 'react';
import { DefaultLoginProps } from '../types/authType';

export default function useCounter() {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);
  const dispatch = useDispatch();

  const authLogin = useCallback(
    (diff: DefaultLoginProps) => dispatch(login(diff)),
    [dispatch],
  );
  const authLogout = useCallback(() => dispatch(logout()), [dispatch]);

  return {
    isLogin,
    email,
    password,
    authLogin,
    authLogout,
  };
}
