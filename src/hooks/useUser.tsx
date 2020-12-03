import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducer';
import {
  loginRequest,
  logout,
  reloadRequest,
  signupRequest,
} from '../redux/reducer/userReducer';
import { useCallback } from 'react';
import { DefaultLoginProps, DefaultSignupProps } from '../types/authType';

export default function useUser() {
  // NOTE STORE SELECTOR & DISPATCH
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const isLoadDone = useSelector((state: RootState) => state.user.isLoadDone);
  const email = useSelector((state: RootState) => state.user.email);
  const userName = useSelector((state: RootState) => state.user.userName);
  const userCode = useSelector((state: RootState) => state.user.userCode);
  const userProfileImage = useSelector(
    (state: RootState) => state.user.userProfileImage,
  );
  const dispatch = useDispatch();

  // NOTE CALLBACK FUNCTION FOR COMPONENTS
  const CLoginRequest = useCallback(
    (diff: DefaultLoginProps) => dispatch(loginRequest(diff)),
    [dispatch],
  );
  const CSignupRequest = useCallback(
    (diff: DefaultSignupProps) => dispatch(signupRequest(diff)),
    [dispatch],
  );
  const CAuthLogout = useCallback(() => dispatch(logout()), [dispatch]);
  const CReload = useCallback(() => dispatch(reloadRequest()), [dispatch]);

  return {
    isLogin,
    isLoadDone,
    email,
    userName,
    userCode,
    userProfileImage,
    CLoginRequest,
    CSignupRequest,
    CAuthLogout,
    CReload,
  };
}
