import React from 'react';
import { start } from 'repl';
import LeaguePreviewCard from './../cards/LeaguePreviewCard';
import style from './LeagueListArea.module.scss';
import { useRouter } from 'next/router';

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
              console.log(`move to ${league._id}`);
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

const getPercentage = (
  applicant: number,
  teamReqMemCnt: number,
  teamMin: number,
) => {
  return (applicant / (teamReqMemCnt * teamMin)) * 100;
};

const getPlaceType = (placeType: string) => {
  if (placeType === 'online') return '온라인';
  else return '오프라인';
};

// TODO 달이나 일 앞에 붙은 0 제거하기
const getLeagueSchedule = (leagueStartDay: string, leagueEndDay: string) => {
  const startDayArray = leagueStartDay.split('-');
  const endDayArray = leagueEndDay.split('-');
  if (leagueStartDay === leagueEndDay) {
    const schedule = startDayArray[1] + '월' + startDayArray[2] + '일';
    return schedule;
  } else {
    const schedule = `${startDayArray[1]}월 ${startDayArray[2]}일 ~ ${endDayArray[1]}월 ${endDayArray[2]}일`;
    return schedule;
  }
};

const getDeadline = (applicationDeadline: number) => {
  var diffDate_1 = new Date(applicationDeadline);
  var diffDate_2 = new Date();

  diffDate_1 = new Date(
    diffDate_1.getFullYear(),
    diffDate_1.getMonth() + 1,
    diffDate_1.getDate(),
  );
  diffDate_2 = new Date(
    diffDate_2.getFullYear(),
    diffDate_2.getMonth() + 1,
    diffDate_2.getDate(),
  );

  var diff = diffDate_1.getTime() - diffDate_2.getTime();
  diff = Math.ceil(diff / (1000 * 3600 * 24));

  console.log(diff);
  return diff;
};

export default LeagueListArea;
