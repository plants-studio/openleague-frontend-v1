import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LeagueDetailArea from '../../components/area/LeagueDetailArea';
import GlobalLayout from '../../components/templates/GlobalLayout';

export default function League({ leagueDetail }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
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
          content="오픈리그 | leagueDetail.title "
          key="title"
        />
      </Head>
      <GlobalLayout>
        <LeagueDetailArea leagueDetail={leagueDetail} />
      </GlobalLayout>
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  /*
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

  // Get the paths we want to pre-render based on posts
  const paths = leagueList.map((league) => ({
    params: { _id: league._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  return { paths, fallback: true };  */
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
