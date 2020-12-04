import React, { useEffect, useState } from 'react';
import { Card, Button } from 'plants-ui';
import useUser from './../../src/hooks/useUser';
import TextInput from '../atoms/CustomInput';
import { useRouter } from 'next/router';
import StaticImageWrapper from '../atoms/StaticImageWrapper';
import style from './SignupCard.module.scss';
import Modal from '../utility/Modal';
import useSignup from '../../src/hooks/useSignup';

// TODO 로그인 리퀘스트를 걸었을때 로딩중인 애니메이션이 뜨게 하기
const SignupCard = () => {
  const { isStart, isDone, CSignupRequest } = useSignup();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const [account, setAccount] = useState({
    email: '',
    name: '',
    password: '',
  });
  const [passwordCheck, setPasswordCheck] = useState('');

  const inputAccount = (e: { target: { name: string; value: string } }) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Card width="25rem">
      <div>
        {modalVisible && (
          <Modal
            visible={modalVisible}
            closable={false}
            maskClosable={false}
            onClose={closeModal}
          >
            <div className={style.modalitemwrapper}>
              {isDone ? (
                <>
                  <StaticImageWrapper
                    width="70%"
                    OptWidth={1071}
                    OptHeight={443}
                    imagePath="/images/logo.png"
                  />
                  <span className={style.header}>계정이 만들어졌습니다!</span>
                  <div className={style.textarea}>
                    <span className={style.textarea__text}>
                      아래 버튼을 눌러 로그인 페이지로 이동해 로그인하고
                      서비스를 이용해주세요!
                    </span>
                  </div>
                  <Button
                    themeType="primary"
                    onClick={() => {
                      router.push('/auth/signin');
                    }}
                  >
                    로그인 페이지로
                  </Button>
                </>
              ) : (
                <h1>생성중..</h1>
              )}
            </div>
          </Modal>
        )}
        <StaticImageWrapper
          OptWidth={1071}
          OptHeight={443}
          width="100%"
          imagePath="/images/logo.png"
        />
        <div>
          <TextInput
            type="text"
            name="name"
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
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
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
              if (account.password === passwordCheck) {
                openModal();
                CSignupRequest(account);
              } else {
                alert('입력된 비밀번호가 다릅니다! 다시 확인해주세요');
              }
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
