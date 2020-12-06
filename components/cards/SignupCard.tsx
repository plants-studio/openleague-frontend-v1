import React, { useState } from 'react';
import { Card, Button } from 'plants-ui';
import TextInput from '../atoms/CustomInput';
import { useRouter } from 'next/router';
import StaticImageWrapper from '../atoms/StaticImageWrapper';
import style from './SignupCard.module.scss';
import Modal from '../utility/Modal';
import useSignup from '../../src/hooks/useSignup';
import LoadingModalItem from '../area/LoadingModalItem';
import { stat } from 'fs';

// TODO 로그인 리퀘스트를 걸었을때 로딩중인 애니메이션이 뜨게 하기
const SignupCard = () => {
  const { status, CSignupRequest } = useSignup();
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
      <>
        {modalVisible && (
          <Modal
            visible={modalVisible}
            closable={false}
            maskClosable={false}
            onClose={closeModal}
          >
            <LoadingModalItem
              isStart={status.isStart}
              isDone={status.isDone}
              code={status.code}
              successMessage={{
                title: '계정이 만들어졌습니다!',
                subtitle:
                  '아래 버튼을 눌러 로그인 페이지로 이동해 로그인하고 서비스를  이용해주세요',
                targetPath: '/auth/signin',
                buttonText: '로그인하기',
              }}
              errorMessage={[
                {
                  code: 409,
                  title: '이미 존재하는 계정입니다!',
                  subtitle: '원래의 계정으로 로그인 후 이용해주세요',
                  targetPath: '/auth/signin',
                  buttonText: '로그인하기',
                },
              ]}
            />
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
      </>
    </Card>
  );
};

export default SignupCard;
