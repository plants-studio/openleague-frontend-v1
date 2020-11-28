import React, { useEffect } from 'react';
import App, { AppInitialProps, AppContext } from 'next/app';
import { wrapper } from '../src/redux/store';
import Head from 'next/head';
import './../styles/globals.css';

class WrappedApp extends App<AppInitialProps> {
  componentDidMount() {
    // 새로고침 시 Redux Store 가 초기화됨
    // 여기서 쿠키값을 통해 필요한 데이터를 받아와야 함
    console.log('mount');
  }

  // TODO 다른 method 로 바꾸기
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
      appProp: ctx.pathname,
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>my project</title>
          <meta property="og:title" content="my project" key="title" />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(WrappedApp);
