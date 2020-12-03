import React from 'react';
import LeaguePreviewCard from './../cards/LeaguePreviewCard';
import style from './LeagueListArea.module.scss';

interface IProps {
  leagueList: any[];
}

// TODO map 방식으로 동작되는 리스트 만들기
const LeagueListArea = ({ leagueList }: IProps) => {
  return (
    <>
      <div className={style.container}>
        {/*
        <LeaguePreviewCard
          game="LEAGUE OF LEGEND"
          title="이건 대회이름입니다"
          placeType="오프라인"
          teamReqMemCnt={5}
          leagueSchedule="11월 20일"
          applicationDeadline={3}
          percentage={50}
          applicant={35}
          applicantMinMax="80명 이상 100명 이하"
          color="#0CA76A"
        /> */}
        {leagueList.map((league) => (
          <LeaguePreviewCard
            game={league.game.toUpperCase()}
            title={league.title}
            placeType={league.placeType}
            teamReqMemCnt={league.teamReqMemCnt}
            leagueSchedule={league.leagueStartDay}
            applicationDeadline={getDeadline(league.applicationDeadline)}
            percentage={getPercentage(
              league.applicant,
              league.teamReqMemCnt,
              league.teamMin,
            )}
            applicant={league.applicant}
            applicantMinMax={league.teamMin}
            color={'#0CA76A'}
            thumbnail={league.thumbnail}
          />
        ))}
      </div>
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
