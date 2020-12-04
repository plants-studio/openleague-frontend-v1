import React from 'react';
import { start } from 'repl';
import LeaguePreviewCard from './../cards/LeaguePreviewCard';
import style from './LeagueListArea.module.scss';
import { useRouter } from 'next/router';
import {
  getDeadline,
  getLeagueSchedule,
  getPercentage,
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
  Battleground: 'zh',
  RainbowSixSiege: '#5F5F5F',
} as const;

// TODO map 방식으로 동작되는 리스트 만들기
const LeagueListArea = ({ leagueList }: IProps) => {
  const router = useRouter();
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
            leagueSchedule={getLeagueSchedule(
              league.leagueStartDay,
              league.leagueEndDay,
            )}
            applicationDeadline={getDeadline(league.applicationDeadline)}
            percentage={getPercentage(
              league.applicant,
              league.teamReqMemCnt,
              league.teamMin,
            )}
            applicant={league.applicant}
            applicantMinMax={league.teamMin}
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

      <button
        onClick={() => {
          console.log('더보기!');
        }}
      >
        테스트
      </button>
    </>
  );
};

export default LeagueListArea;
