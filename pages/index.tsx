import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import GlobalLayout from './../components/templates/GlobalLayout';
import LeagueListArea from './../components/area/LeagueListArea';
import HeroBannerCard from '../components/cards/HeroBannerCard';
import LeagueSearchToolCard from '../components/cards/LeagueSearchToolCard';
import CardRowLayout from '../components/templates/CardRowLayout';
import GameSelectorCard from '../components/cards/GameSelectorCard';

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
        <CardRowLayout>
          <HeroBannerCard />
          <LeagueSearchToolCard />
        </CardRowLayout>
        <GameSelectorCard />
        <LeagueListArea />
      </GlobalLayout>
    </div>
  );
}
