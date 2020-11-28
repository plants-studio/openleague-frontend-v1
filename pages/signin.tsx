import Head from 'next/head';
import GlobalLayout from '../components/templates/GlobalLayout';
import SigninCard from '../components/cards/SigninCard';

export default function Login() {
  return (
    <div>
      <GlobalLayout>
        <SigninCard />
      </GlobalLayout>
    </div>
  );
}
