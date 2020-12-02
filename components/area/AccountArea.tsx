import React from 'react';
import style from './AccountArea.module.scss';
import { useRouter } from 'next/router';
import useUser from '../../src/hooks/useUser';
import { IconButton } from 'plants-ui';
import StaticImageWrapper from '../atoms/StaticImageWrapper';

const AccountArea = () => {
  const {
    isLogin,
    isLoadDone,
    userName,
    userCode,
    userProfileImage,
    CAuthLogout,
  } = useUser();

  const router = useRouter();
  return (
    <div className={style.areawrapper}>
      {isLoadDone ? (
        <>
          {isLogin ? (
            <div className={style.loginedwrapper}>
              <IconButton
                icon="powerOffSolid"
                size="3.5rem"
                onClick={() => {
                  CAuthLogout();
                }}
              />
              <div className={style.profile}>
                <StaticImageWrapper
                  OptWidth={100}
                  OptHeight={100}
                  borderRadius="1.5rem"
                  width="6rem"
                  imagePath={
                    'https://open-league-back.herokuapp.com/images/thumbnails/default.webp'
                  }
                />
                <div className={style.profile__textarea}>
                  <span className={style.profile__username}>{userName}</span>
                  <span className={style.profile__usercode}>#{userCode}</span>
                </div>
              </div>
              <IconButton icon="cogSolid" size="3.5rem" />
            </div>
          ) : (
            <>
              <StaticImageWrapper
                OptWidth={1071}
                OptHeight={443}
                width="100%"
                imagePath="/images/logo.png"
              />
              <div className={style.actionbar}>
                <span className={style.actionbar__text}>로그인</span>
                <div className={style.dividebar}></div>
                <span className={style.actionbar__text}>회원가입</span>
                <div className={style.dividebar}></div>
                <div className={style.actionbar__discord}>
                  디스코드로 시작하기
                </div>
              </div>
              {/*
              <button
                onClick={() => {
                  router.push('/signin');
                }}
              >
                로그인 페이지
              </button>*/}
            </>
          )}
        </>
      ) : (
        // TODO 여기에도 넣을 로딩중 애니메이션 만들기
        <div>로딩중입니다</div>
      )}
    </div>
  );
};

export default AccountArea;
