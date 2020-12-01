import React from 'react';
import { Card } from 'plants-ui';
import SwipeContentWrapper from '../utility/SwipeContentWrapper';
import StaticImageWrapper from '../atoms/StaticImageWrapper';

const GameSelectorCard = () => {
  return (
    <Card cardTitle="게임별 대회 보기">
      <SwipeContentWrapper>
        <div style={{ width: '200%' }}>
          <div style={{ width: '12.5%' }}>
            <StaticImageWrapper
              OptWidth={1201}
              OptHeight={432}
              borderRadius="5px"
              width="100%"
              height="1"
            />
          </div>
        </div>
      </SwipeContentWrapper>
    </Card>
  );
};

export default GameSelectorCard;
