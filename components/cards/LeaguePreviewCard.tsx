import React from 'react';
import { Card, Header, SubHeader, Progress, Sticker } from 'plants-ui';
import style from './LeaugePreviewCard.module.scss';

const LeaguePreviewCard = () => {
  return (
    <Card isPadding={false}>
      <div>
        <div className={style.iamgeWrapper}>
          <Sticker backgroundColor="#0CA76A" top="1rem" left="1rem">
            LEAGUE OF LEGENDS
          </Sticker>
          <img
            className={style.image}
            src="/testimage.jpg"
            alt="테스트이미지"
          ></img>
        </div>
        <div className={style.contentArea}>
          <Header size="small">가나다라</Header>
          <SubHeader size="small">마바사</SubHeader>
          <Progress />
        </div>
      </div>
    </Card>
  );
};

export default LeaguePreviewCard;
