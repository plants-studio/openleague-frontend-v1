/* 이 파일의 사용은 임시적으로 중단되었습니다.
import axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { UserType } from '../types/authType';

function getCommonLoginUserInfo(): UserType {
  const decoded: {
    user: {
      name: string;
      email: string;
    };
  } = jwtDecode(Cookies.get('accessToken'));
  Cookies.set('email', decoded.user.email);
  Cookies.set('name', decoded.user.name);
  return { email: decoded.user.email, name: decoded.user.name };
}

export const authSignin = async (email: string, password: string) => {
  await axios
    .post(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/signin`, {
      email,
      password,
    })
    .then((response: AxiosResponse) => {
      if (response.status === 200) {
        console.log('Axios : success');
        Cookies.set('accessToken', response.data.accessToken);
        Cookies.set('refreshToken', response.data.refreshToken);
        const sagaResponse: UserType = getCommonLoginUserInfo();
      }
    })
    .catch((error: AxiosError) => {
      switch (error.response.status) {
        case 401:
          console.log('Axios : 비밀번호가 일치하지 않습니다.');
          break;
        case 404:
          console.log('Axios : 계정이 존재하지 않습니다.');
          break;
        case 412:
          console.log('Axios : 데이터가 누락되었습니다');
          break;
        default:
          console.log('Axios : 알 수 없는 오류가 발생했습니다.');
          break;
      }
    });
};
*/
