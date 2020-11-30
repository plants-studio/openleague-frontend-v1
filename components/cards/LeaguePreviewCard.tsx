import React from 'react';
import { Card, Header, SubHeader, Progress } from 'plants-ui';
import style from './LeaugePreviewCard.module.scss';

const LeaguePreviewCard = () => {
  return (
    <Card width="30%" isPadding={false}>
      <div>
        <div></div>
        <div>
          <Header size="small">가나다라</Header>
        </div>
      </div>
    </Card>
  );
};

export default LeaguePreviewCard;
