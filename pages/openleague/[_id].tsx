import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LeagueDetailArea from '../../components/area/LeagueDetailArea';
import LeagueDetailActionCard from '../../components/cards/LeagueDetailActionCard';
import GlobalLayout from '../../components/templates/GlobalLayout';
import { getFormattedApplicationDeadline } from '../../src/utils/league';

export default function League({ leagueDetail }) {
  const router = useRouter();

  // NOTE 페이지가 render되지 않았다면
  if (router.isFallback) {
    return <div>Fallback로딩중입니다</div>;
  }

  // Wait until after client-side hydration to show
  useEffect(() => {
    console.log('mount!');
  }, []);

  return (
    <>
      <Head>
        <title>오픈리그 | {leagueDetail.title}</title>
        <meta
          property="og:title"
          content={`오픈리그 | ${leagueDetail.title}`}
          key="leaguetitle"
        />
      </Head>
      <GlobalLayout>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <LeagueDetailArea leagueDetail={leagueDetail} />
          <LeagueDetailActionCard
            width="22rem"
            title={leagueDetail.title}
            applicationDeadline={getFormattedApplicationDeadline(
              leagueDetail.applicationDeadline,
            )}
            host={leagueDetail.host}
            status={leagueDetail.status}
            leagueId={leagueDetail._id}
          ></LeagueDetailActionCard>
        </div>
      </GlobalLayout>
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const leagueDetail = await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league/${params._id}`, {})
    .then((response) => {
      return response.data;
    });

  return { props: { leagueDetail }, revalidate: 1 };
}
