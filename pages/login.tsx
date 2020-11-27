import Head from 'next/head';
import GlobalLayout from './../components/templates/GlobalLayout';
import { Card } from 'plants-ui';

export default function Login() {
  return (
    <div>
      <GlobalLayout>
        <Card cardTitle="로그인">
          <button>디스코드로 로그인</button>
          <input></input>
        </Card>
      </GlobalLayout>
    </div>
  );
}
