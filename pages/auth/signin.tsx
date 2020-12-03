import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SigninCard from '../../components/cards/SigninCard';
import FullPageWrapper from '../../components/templates/BackgroundPatternWrapper';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/auth/signup');
  }, []);

  return (
    <FullPageWrapper isFullScreenMode={true}>
      <SigninCard />
    </FullPageWrapper>
  );
}
