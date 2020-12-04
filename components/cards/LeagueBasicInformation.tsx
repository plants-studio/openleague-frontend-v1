import { Card } from 'plants-ui';
import React from 'react';
import style from './LeagueBasicInformation.module.scss';
import { ReactComponent as Calendar } from '../../public/icons/calendar-today.svg';
import { ReactComponent as GameController } from '../../public/icons/game-controller.svg';
import { ReactComponent as Pin } from '../../public/icons/pin.svg';
import { ReactComponent as Stopwatch } from '../../public/icons/stopwatch-sharp.svg';

interface IProps {
  game: string;
  leagueSchedule: string;
  placeType: string;
  applicationDeadline: string;
  location: string;
  discordLink: string;
}

// 컴포넌트 반복 문법으로 바꾸기
const LeagueBasicInformation = ({
  game,
  leagueSchedule,
  placeType,
  applicationDeadline,
  location,
  discordLink,
}: IProps) => {
  return (
    <Card cardTitle="대회 정보">
      <div className={style.wrapper}>
        <div className={style.category}>
          <GameController width="1.3rem" />
        </div>
        <div>
          <span className={style.name}>게임 종목</span>
          <span className={style.value}>{game}</span>
        </div>
      </div>

      <div className={style.wrapper}>
        <div className={style.category}>
          <Calendar width="1.2rem" />
        </div>
        <div>
          <span className={style.name}>대회 일정</span>
          <span className={style.value}>{leagueSchedule}</span>
        </div>
      </div>

      <div className={style.wrapper}>
        <div className={style.category}>
          <Pin width="1.1rem" />
        </div>
        <div>
          {placeType === 'online' ? (
            <>
              <span className={style.name}>디스코드</span>
              <span className={style.value}>{discordLink}</span>
            </>
          ) : (
            <>
              <span className={style.name}>게임 종목</span>
              <span className={style.value}>{game}</span>
            </>
          )}
        </div>
      </div>

      <div className={style.wrapper__fin}>
        <div className={style.category}>
          <Stopwatch width="1.1rem" />
        </div>
        <div>
          <span className={style.name}>접수 마감</span>
          <span className={style.value}>{applicationDeadline}</span>
        </div>
      </div>
    </Card>
  );
};

export default LeagueBasicInformation;
