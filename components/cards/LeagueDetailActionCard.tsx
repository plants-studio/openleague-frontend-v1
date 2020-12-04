import { Card, ContentType, Header } from 'plants-ui';
import React from 'react';
import DividerLine from '../atoms/DividerLine';
import { ReactComponent as Stopwatch } from '../../public/icons/stopwatch-sharp.svg';
import style from './LeagueDetailActionCard.module.scss';

interface IProps {
  title: string;
  applicationDeadline: number;
  width: string;
}

const LeagueDetailActionCard = ({
  title,
  applicationDeadline,
  width,
}: IProps) => {
  return (
    <Card cardTitle="대회 신청" width={width}>
      <div>
        <Header size="small">{title}</Header>
        <div className={style.deadlinearea}>
          <Stopwatch height="1rem" fill="#f23c4c" />
          <ContentType>접수 마감까지 {applicationDeadline}일 남음</ContentType>
        </div>
      </div>
      <DividerLine />
      <div>하하</div>
    </Card>
  );
};

export default LeagueDetailActionCard;
