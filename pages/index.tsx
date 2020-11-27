import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import GlobalLayout from './../components/templates/GlobalLayout';

export default function Index() {
  const [accessToken, setAccessToken] = useState(null);

  const [UserName, setUserName] = useState('');

  useEffect(() => {
    if (Cookies.get('accessToken') !== null && Cookies.get('name') !== null) {
      setUserName(Cookies.get('name'));
      setAccessToken(Cookies.get('accessToken'));
    }
  }, []);

  return (
    <div>
      <GlobalLayout>
        가나다라
        <br />
        <div style={{ height: '1300px', backgroundColor: 'red' }}>
          가나다라마바사 가나다라마바사 가나다라마바사
        </div>
        가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사
        가나다라마바사
      </GlobalLayout>
    </div>
  );
}
