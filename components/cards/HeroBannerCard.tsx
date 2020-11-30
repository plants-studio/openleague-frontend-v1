import React from 'react';
import { Card } from 'plants-ui';
import CardWrapper from '../templates/CardWrapper';

const HeroBannerCard = () => {
  return (
    <CardWrapper flexGrow={1}>
      <Card width="100%" height="100%">
        배너가 들어가는 곳입니다.
      </Card>
    </CardWrapper>
  );
};

export default HeroBannerCard;
