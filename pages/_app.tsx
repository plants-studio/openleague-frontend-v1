import React, { useEffect } from 'react';
import App, { AppInitialProps, AppContext } from 'next/app';
import { wrapper } from '../src/redux/store';
import Head from 'next/head';
import './../styles/globals.css';
import './../styles/custom-toastui.css';
import type { AppProps } from 'next/app';
import useUser from './../src/hooks/useUser';

function WrappedApp({ Component, pageProps }: AppProps) {
  const { CReload } = useUser();
  useEffect(() => {
    console.log('mount');
    CReload();
  }, []);
  return (
    <>
      <Head>
        <title>오픈리그 | 게이머를 위한 all-in-one 플랫폼</title>
        <meta
          property="og:title"
          content="오픈리그 | 게이머를 위한 all-in-one 플랫폼"
          key="title"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(WrappedApp);
