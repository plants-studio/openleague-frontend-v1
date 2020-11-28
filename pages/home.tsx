import Head from 'next/head';
import GlobalLayout from './../components/templates/GlobalLayout';
import Counter from './../components/test/Counter';
import { Card } from 'plants-ui';

export default function Home() {
  return (
    <div>
      <GlobalLayout>
        <Card cardTitle="홈">
          <Counter />
          <br />
          <div style={{ height: '1300px', backgroundColor: 'green' }}>
            가나다라마바사 가나다라마바사 가나다라마바사
          </div>
          가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사
          가나다라마바사
        </Card>
      </GlobalLayout>
    </div>
  );
}
