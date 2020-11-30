import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import GlobalLayout from './../components/templates/GlobalLayout';
import LeagueListArea from './../components/area/LeagueListArea';
import { Card } from 'plants-ui';

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
        <h1>대회 목록</h1>
        <LeagueListArea />
      </GlobalLayout>
    </div>
  );
}
