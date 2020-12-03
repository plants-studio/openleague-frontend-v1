import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import GlobalLayout from './../components/templates/GlobalLayout';
import LeagueListArea from './../components/area/LeagueListArea';
import HeroBannerCard from '../components/cards/HeroBannerCard';
import LeagueSearchToolCard from '../components/cards/LeagueSearchToolCard';
import CardRowLayout from '../components/templates/CardRowLayout';
import GameSelectorCard from '../components/cards/GameSelectorCard';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from 'axios';
import { resolve } from 'path';

export default function Index({
  leagueList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [accessToken, setAccessToken] = useState(null);

  const [UserName, setUserName] = useState('');

  useEffect(() => {
    if (Cookies.get('accessToken') !== null && Cookies.get('name') !== null) {
      setUserName(Cookies.get('name'));
      setAccessToken(Cookies.get('accessToken'));
    }
    console.log(leagueList);
  }, []);

  return (
    <div>
      <GlobalLayout>
        <CardRowLayout>
          <HeroBannerCard />
          <LeagueSearchToolCard />
        </CardRowLayout>
        <GameSelectorCard />
        <LeagueListArea leagueList={leagueList} />
        <button
          onClick={() => {
            console.log(getLeagueList());
          }}
        >
          테스트
        </button>
      </GlobalLayout>
    </div>
  );
}

const getLeagueList = async () => {
  try {
  } catch (error) {
    console.error(error);
  }
};

export async function getStaticProps() {
  const leagueList = await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league`, {
      params: {
        page: 1,
        limit: 12,
      },
    })
    .then((response) => {
      return response.data;
    });
  return {
    props: {
      leagueList,
    },
    revalidate: 1,
  };
}
