import axios from 'axios';
import { stat } from 'fs';
import { useState } from 'react';
import { DefaultSignupProps } from '../types/authType';

export default function useSignup() {
  const [status, setStatus] = useState({
    isStart: false,
    isDone: false,
    code: 0,
  });

  const CSignupRequest = async (accountData: DefaultSignupProps) => {
    setStatus({ ...status, isStart: true, isDone: false });

    await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/signup`, {
        name: accountData.name,
        email: accountData.email,
        password: accountData.password,
      })
      .then((response) => {
        setStatus({
          ...status,
          isStart: false,
          isDone: true,
          code: response.status,
        });
      })
      .catch((error) => {
        setStatus({
          ...status,
          isStart: false,
          isDone: true,
          code: error.response.status,
        });
      });
  };

  return {
    status,
    CSignupRequest,
  };
}
