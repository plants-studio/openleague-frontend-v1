import React, { useEffect } from 'react';
import { start } from 'repl';
import LeaguePreviewCard from './../cards/LeaguePreviewCard';
import style from './LeagueListArea.module.scss';
import { useRouter } from 'next/router';
import {
  getFormattedApplicationDeadline,
  getFormattedLeagueSchedule,
  getApplicationPercentage,
  getPlaceType,
} from '../../src/utils/league';

interface IProps {
  leagueList: any[];
}

// TODO 배틀그라운드, 기타 카테고리의 컬러코드 선택하기
const LeagueCode = {
  LeagueOfLegend: '#0CA76A',
  Overwatch: '#FC9826',
  Valorant: '#FF4654',
  Battleground: '#05ACF6',
  RainbowSixSiege: '#5F5F5F',
  Etc: '#995FE1',
} as const;

// TODO map 방식으로 동작되는 리스트 만들기
const LeagueListArea = ({ leagueList }: IProps) => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <>
      <div className={style.container}>
        {leagueList.map((league) => (
          <LeaguePreviewCard
            key={league._id}
            game={league.game.toUpperCase()}
            title={league.title}
            placeType={getPlaceType(league.placeType)}
            teamReqMemCnt={league.teamReqMemCnt}
            leagueSchedule={getFormattedLeagueSchedule(
              league.leagueStartDay,
              league.leagueEndDay,
            )}
            applicationDeadline={getFormattedApplicationDeadline(
              league.applicationDeadline,
            )}
            percentage={getApplicationPercentage(
              league.applicant,
              league.teamReqMemCnt,
              league.teamMin,
            )}
            applicant={league.applicant}
            applicantMinMax={getApplicationMinMax(
              league.teamReqMemCnt,
              league.teamMin,
              league.teamMax,
            )}
            color={LeagueCode[`${league.game.replace(/ /g, '')}`]}
            thumbnail={league.thumbnail}
            onClick={() => {
              console.log(`move to ${league.title}`);
              router.push({
                pathname: '/openleague/[_id]',
                query: { _id: league._id },
              });
            }}
          />
        ))}
      </div>
    </>
  );
};

const getApplicationMinMax = (
  teamReqMemCnt: number,
  teamMin: number,
  teamMax: number,
) => {
  if (teamMin === teamMin) {
    const data: string = `${teamMin * teamReqMemCnt}명`;
    return data;
  } else {
    const data: string =
      teamMin * teamReqMemCnt +
      '명 이상 ' +
      teamMax * teamReqMemCnt +
      '명 이하';
    return data;
  }
};

export default LeagueListArea;
