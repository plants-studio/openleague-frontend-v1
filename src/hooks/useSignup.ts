import axios from 'axios';
import { useState } from 'react';
import { DefaultSignupProps } from '../types/authType';

export default function useSignup() {
  const [isStart, setIsStart] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const CSignupRequest = async (accountData: DefaultSignupProps) => {
    setIsStart(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/signup`,
        {
          name: accountData.name,
          email: accountData.email,
          password: accountData.password,
        },
      );
    } catch (e) {
      switch (e.response.status) {
        case 409:
          alert('이미 존재하는 계정입니다!');
          break;
        default:
          alert('알수 없는 오류가 발생했습니다.');
          break;
      }
    }
    console.log('종료!');
    setIsDone(true);
  };

  return {
    isStart,
    isDone,
    CSignupRequest,
  };
}
