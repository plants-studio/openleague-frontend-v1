import React, { useEffect, useState } from 'react';
import { Card, Button } from 'plants-ui';
import useUser from './../../src/hooks/useUser';
import TextInput from '../atoms/TextInput';
import { useRouter } from 'next/router';
import StaticImageWrapper from '../atoms/StaticImageWrapper';
import style from './SignupCard.module.scss';

// TODO 로그인 리퀘스트를 걸었을때 로딩중인 애니메이션이 뜨게 하기
const SignupCard = () => {
  const router = useRouter();
  const { isLogin, isLoadDone, CLoginRequest } = useUser();

  const [account, setAccount] = useState({
    nickname: '',
    email: '',
    password: '',
    passwordcheck: '',
  });

  const inputAccount = (e: { target: { name: string; value: string } }) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isLogin) {
      router.push('/auth/signin');
    }
  }, [isLogin]);

  useEffect(() => {
    router.prefetch('/auth/signin');
  }, []);

  return (
    <Card width="25rem">
      <div>
        <StaticImageWrapper
          OptWidth={1071}
          OptHeight={443}
          width="100%"
          imagePath="/images/logo.png"
        />
        <div>
          <TextInput
            type="text"
            name="nickname"
            placeholder="사용할 닉네임"
            width="100%"
            onChange={inputAccount}
            margin="0.25rem 0"
          ></TextInput>
          <TextInput
            type="text"
            name="email"
            placeholder="로그인시 사용할 이메일"
            width="100%"
            onChange={inputAccount}
            margin="0.25rem 0"
          ></TextInput>
          <TextInput
            type="password"
            name="password"
            placeholder="비밀번호"
            width="100%"
            onChange={inputAccount}
            margin="0.25rem 0"
          />
          <TextInput
            type="password"
            name="passwordcheck"
            placeholder="비밀번호 재입력"
            width="100%"
            onChange={inputAccount}
            margin="0.25rem 0"
          />
        </div>
        <div className={style.buttonarea}>
          <Button
            themeType="secondary"
            onClick={() => {
              router.back();
            }}
          >
            뒤로가기
          </Button>
          <Button
            themeType="primary"
            onClick={() => {
              CLoginRequest(account);
            }}
          >
            가입하기
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SignupCard;
