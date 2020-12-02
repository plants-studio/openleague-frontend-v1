import React, { useEffect, useState } from 'react';
import { Card, Button } from 'plants-ui';
import useUser from './../../src/hooks/useUser';
import TextInput from '../atoms/TextInput';
import { useRouter } from 'next/router';
import StaticImageWrapper from '../atoms/StaticImageWrapper';
import style from './SigninCard.module.scss';

const SigninCard = () => {
  const router = useRouter();
  const { isLogin, email, userName, CLoginRequest, CAuthLogout } = useUser();

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const inputAccount = (e: { target: { name: string; value: string } }) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isLogin) {
      router.push('/');
    }
  }, [isLogin]);

  useEffect(() => {
    router.prefetch('/');
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
        <TextInput
          type="text"
          name="email"
          placeholder="이메일"
          width="100%"
          onChange={inputAccount}
        ></TextInput>
        <br />
        <TextInput
          type="password"
          name="password"
          placeholder="비밀번호"
          width="100%"
          margin="0.5rem 0 0 0"
          onChange={inputAccount}
        />
        <br />
        <div className={style.buttonarea}>
          <Button
            themeType="primary"
            onClick={() => {
              CLoginRequest(account);
            }}
          >
            로그인
          </Button>
          <Button
            themeType="secondary"
            onClick={() => {
              //TODO 회원가입 구현
            }}
          >
            회원가입
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SigninCard;
