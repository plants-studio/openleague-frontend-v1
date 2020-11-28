import React from 'react';
import style from './AccountArea.module.scss';
import { useRouter } from 'next/router';
import useUser from './../../src/hooks/useUser';

const AccountArea = () => {
  const {
    isLogin,
    email,
    userName,
    userCode,
    authLogin,
    authLogout,
  } = useUser();

  const router = useRouter();
  return (
    <div className={style.areawrapper}>
      {isLogin ? (
        <span>
          로그인 성공{userName}, {userCode}
        </span>
      ) : (
        <>
          <span>로그인해주세요</span>
          <button
            onClick={() => {
              router.push('/signin');
            }}
          >
            로그인 페이지
          </button>
        </>
      )}
    </div>
  );
};

export default AccountArea;
