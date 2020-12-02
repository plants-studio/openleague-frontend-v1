import GlobalLayout from '../components/templates/GlobalLayout';
import SigninCard from '../components/cards/SigninCard';
import FullPageWrapper from '../components/templates/BackgroundPatternWrapper';

export default function Login() {
  return (
    <FullPageWrapper isFullScreenMode={true}>
      <SigninCard />
    </FullPageWrapper>
  );
}
