import Cookies from 'js-cookie';

export const saveTokensToCookie = (
  accessToken: string,
  refreshToken: string,
) => {
  Cookies.set('accessToken', accessToken, { expires: 7 });
  Cookies.set('refreshToken', refreshToken, {
    expires: 7,
  });
};

export const searchRefreshToken = () => {
  const refreshToken = Cookies.get('refreshToken');
  if (typeof refreshToken === undefined) {
    console.log('reloadSaga : no cookies');
    return null;
  } else {
    return refreshToken;
  }
};

export const deleteAllTokenInCookie = () => {
  try {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  } catch (e) {
    console.log('deleteCookie : Cookies Delete Failed');
  }
};
