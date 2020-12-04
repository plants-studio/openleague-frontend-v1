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
import { useRouter } from 'next/router';

export default function Index({
  leagueList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <GlobalLayout>
        <CardRowLayout>
          <HeroBannerCard />
          <LeagueSearchToolCard />
        </CardRowLayout>
        <GameSelectorCard />
        <LeagueListArea leagueList={leagueList} />
      </GlobalLayout>
    </>
  );
}

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
