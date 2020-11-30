import React from 'react';
import LeaguePreviewCard from './../cards/LeaguePreviewCard';
import style from './LeagueListArea.module.scss';

// TODO map 방식으로 동작되는 리스트 만들기
const LeagueListArea = () => {
  return (
    <div className={style.container}>
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
      />
      <LeaguePreviewCard
        game="LEAGUE OF LEGEND"
        title="이건 대회이름입니다 그런데 너무많은 정보를 곁들인"
        placeType="오프라인"
        teamReqMemCnt={5}
        leagueSchedule="11월 20일"
        applicationDeadline={3}
        percentage={50}
        applicant={35}
        applicantMinMax="80명 이상 100명 이하"
        color="#FC9826"
      />
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
        color="#5F5F5F"
      />
    </div>
  );
};

export default LeagueListArea;
