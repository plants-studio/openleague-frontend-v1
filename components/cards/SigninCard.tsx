import React, { useState } from 'react';
import { Card } from 'plants-ui';
import useUser from './../../src/hooks/useUser';

const SigninCard = () => {
  const { isLogin, email, name, authLogin, authLogout } = useUser();

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

  return (
    <Card cardTitle="로그인">
      {isLogin ? <span>환영합니다!</span> : <span>로그인 안됨</span>}
      <br />
      <span>
        이메일 : {email} | 이름 : {name}
      </span>
      <br />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={inputAccount}
      ></input>
      <br />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        onChange={inputAccount}
      />
      <br />
      <button
        type="button"
        onClick={() => {
          authLogin(account);
        }}
      >
        로그인
      </button>
    </Card>
  );
};

export default SigninCard;
