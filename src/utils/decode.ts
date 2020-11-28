import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

export const getDecodedData = () => {
  const decoded: {
    user: {
      name: string;
      email: string;
    };
  } = jwtDecode(Cookies.get('accessToken'));
  const splitedName = decoded.user.name.split('#');
  return {
    email: decoded.user.email,
    userName: splitedName[0],
    userCode: splitedName[1],
  };
};
