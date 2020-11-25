import Head from 'next/head';
import GlobalLayout from './../components/templates/GlobalLayout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>오픈리그 | 모든 게이머를 위한 ALL-IN-ONE 플랫폼</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
