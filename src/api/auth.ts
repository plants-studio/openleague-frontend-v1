import axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { DefaultLoginProps } from './../types/authType';

const getCommonLoginUserInfo = () => {
  const decoded: {
    user: {
      name: string;
      email: string;
    };
  } = jwtDecode(Cookies.get('accessToken'));
  Cookies.set('email', decoded.user.email);
  Cookies.set('name', decoded.user.name);
};

export const authSignin = async (email: string, password: string) => {
  console.log(email, password);
  await axios
    .post(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/signin`, {
      email,
      password,
    })
    .then((response: AxiosResponse) => {
      if (response.status === 200) {
        Cookies.set('accessToken', response.data.accessToken);
        Cookies.set('refreshToken', response.data.refreshToken);
        getCommonLoginUserInfo();
        console.log('로그인 성공');
      }
    })
    .catch((error: AxiosError) => {
      switch (error.response.status) {
        case 401:
          console.log('비밀번호가 일치하지 않습니다.');
          break;
        case 404:
          console.log('계정이 존재하지 않습니다.');
          break;
        case 412:
          console.log('데이터가 누락되었습니다');
          break;
        default:
          console.log('알 수 없는 오류가 발생했습니다.');
          break;
      }
    });
};
