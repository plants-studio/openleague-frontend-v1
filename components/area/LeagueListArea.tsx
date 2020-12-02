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
            game={league.game}
            title={league.title}
            placeType={league.placeType}
            teamReqMemCnt={league.teamReqMemCnt}
            leagueSchedule={league.leagueStartDay}
            applicationDeadline={league.applicationDeadline}
            percentage={30}
            applicant={league.applicant}
            applicantMinMax={league.teamMin}
            color={'#0CA76A'}
          />
        ))}
      </div>
    </>
  );
};

export default LeagueListArea;
