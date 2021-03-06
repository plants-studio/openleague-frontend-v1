import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

export const getDecodedAccessTokenData = () => {
  const decoded: {
    user: {
      name: string;
      email: string;
      profile: string;
      _id: string;
      admin: string;
    };
  } = jwtDecode(Cookies.get('accessToken'));
  const splitedName = decoded.user.name.split('#');
  return {
    email: decoded.user.email,
    userName: splitedName[0],
    userCode: splitedName[1],
    userProfileImage: decoded.user.profile,
    userId: decoded.user._id,
    isAdmin: decoded.user.admin,
  };
};
