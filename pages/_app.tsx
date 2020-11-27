import React from 'react';
import App, { AppInitialProps, AppContext } from 'next/app';
import { wrapper } from '../src/redux/store';
import Head from 'next/head';
import './../styles/globals.css';

class WrappedApp extends App<AppInitialProps> {
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
