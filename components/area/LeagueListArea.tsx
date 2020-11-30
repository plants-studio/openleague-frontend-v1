import React from 'react';
import LeaguePreviewCard from './../cards/LeaguePreviewCard';
import style from './LeagueListArea.module.scss';

// TODO map 방식으로 동작되는 리스트 만들기
const LeagueListArea = () => {
  return (
    <div className={style.container}>
      <LeaguePreviewCard />
      <LeaguePreviewCard />
      <LeaguePreviewCard />
    </div>
  );
};

export default LeagueListArea;
