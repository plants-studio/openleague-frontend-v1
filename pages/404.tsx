import React from 'react';
import FullPageWrapper from '../components/templates/BackgroundPatternWrapper';
import NotFoundCard from '../components/cards/NotFoundCard';

export default function NotFound() {
  return (
    <FullPageWrapper isFullScreenMode={true}>
      <NotFoundCard />
    </FullPageWrapper>
  );
}
