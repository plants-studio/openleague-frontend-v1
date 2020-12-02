import React from 'react';
import style from './AccountArea.module.scss';
import { useRouter } from 'next/router';
import useUser from '../../src/hooks/useUser';
import { IconButton } from 'plants-ui';
import StaticImageWrapper from '../atoms/StaticImageWrapper';

// TODO 로그인/로그아웃 되는 컴포넌트 만들기
const AccountArea = () => {
  const { isLogin, email, userName, userCode, userProfileImage } = useUser();

  const router = useRouter();
  return (
    <div className={style.areawrapper}>
      {isLogin ? (
        <div className={style.loginedwrapper}>
          <div>
            <IconButton icon="Home" size="4rem" />
          </div>
          <div>
            <StaticImageWrapper
              OptWidth={100}
              OptHeight={100}
              borderRadius="100px"
              imagePath={
                'https://open-league-back.herokuapp.com/images/thumbnails/default.webp'
              }
            />
            로그인 성공{userName}, {userCode}
          </div>
          <div>
            <IconButton icon="Home" size="4rem" />
          </div>
        </div>
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
