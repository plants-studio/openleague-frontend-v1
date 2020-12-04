import React, { useEffect, useState } from 'react';
import { Card, Button } from 'plants-ui';
import useUser from './../../src/hooks/useUser';
import TextInput from '../atoms/CustomInput';
import { useRouter } from 'next/router';
import StaticImageWrapper from '../atoms/StaticImageWrapper';
import style from './SigninCard.module.scss';

// TODO 로그인 리퀘스트를 걸었을때 로딩중인 애니메이션이 뜨게 하기
// TODO 모달을 띄워서 존재하지 않는 계정입니다 등을 표시하기
const SigninCard = () => {
  const router = useRouter();
  const { isLogin, isLoadDone, CLoginRequest } = useUser();

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
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              CLoginRequest(account);
            }
          }}
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
              router.push('/auth/signup');
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
