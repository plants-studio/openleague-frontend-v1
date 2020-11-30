import React from 'react';
import { Card, Header, SubHeader, Progress, Sticker } from 'plants-ui';
import style from './LeaugePreviewCard.module.scss';

interface IProps {
  game: string;
  title: string;
  placeType: string;
  teamReqMemCnt: number;
  leagueSchedule: string;
  applicationDeadline: number;
  percentage: number;
  applicant: number;
  applicantMinMax: string;
  color: string;
}

// TODO 바로 구현되어있는 스타일 UI라이브러리로 옮기기
const LeaguePreviewCard = ({
  game,
  title,
  placeType,
  teamReqMemCnt,
  leagueSchedule,
  applicationDeadline,
  percentage,
  applicant,
  applicantMinMax,
  color,
}: IProps) => {
  return (
    <Card isPadding={false}>
      <div>
        <div className={style.iamgeWrapper}>
          <Sticker backgroundColor={color} top="1rem" left="1rem">
            {game}
          </Sticker>
          <img
            className={style.image}
            src="/testimage.jpg"
            alt="테스트이미지"
          ></img>
        </div>
        <div className={style.contentArea}>
          <div className={style.headerArea}>
            <Header size="small">{title}</Header>
            <SubHeader size="small">
              {placeType} · {teamReqMemCnt}인 · {leagueSchedule}
            </SubHeader>
          </div>

          <div className={style.bottomInfoArea}>
            <Progress color={color} width="100%" percentage={percentage} />
            <div className={style.bottomInfoArea__applicationInfoArea}>
              <div>
                <span
                  className={style.bottomInfoArea__applicant}
                  style={{ color: color }}
                >
                  {applicant}
                </span>
                <span
                  className={style.bottomInfoArea__applicantMinMax}
                  style={{ color: color }}
                >
                  {' '}
                  / {applicantMinMax}
                </span>
              </div>
              <span className={style.bottomInfoArea__deadline}>
                {applicationDeadline}일 남음
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LeaguePreviewCard;
