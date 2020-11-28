import React from 'react';
import style from './AccountArea.module.scss';
import { useRouter } from 'next/router';

const AccountArea = () => {
  const isLogin = false;
  const router = useRouter();
  return (
    <div className={style.areawrapper}>
      {isLogin ? (
        <span>로그인 성공</span>
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
