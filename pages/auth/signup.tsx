import FullPageWrapper from '../../components/templates/BackgroundPatternWrapper';
import SignupCard from '../../components/cards/SignupCard';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/auth/signin');
  }, []);

  return (
    <FullPageWrapper isFullScreenMode={true}>
      <SignupCard />
    </FullPageWrapper>
  );
}
