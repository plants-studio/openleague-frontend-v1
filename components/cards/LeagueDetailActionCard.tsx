import { Button, Card, ContentType, Header } from 'plants-ui';
import React, { useEffect } from 'react';
import DividerLine from '../atoms/DividerLine';
import { ReactComponent as Stopwatch } from '../../public/icons/stopwatch-sharp.svg';
import style from './LeagueDetailActionCard.module.scss';
import Profile from '../atoms/Profile';
import { useRouter } from 'next/router';

interface IProps {
  title: string;
  applicationDeadline: number;
  width: string;
  host: string;
  status: string;
  leagueId: string;
}

const LeagueDetailActionCard = ({
  title,
  applicationDeadline,
  width,
  host,
  status,
  leagueId,
}: IProps) => {
  const router = useRouter();
  return (
    <Card cardTitle="대회 신청" width={width}>
      <div>
        <Header size="small">{title}</Header>
        <div className={style.deadlinearea}>
          <Stopwatch
            className={style.deadlinearea__icon}
            height="0.9rem"
            fill="#f23c4c"
          />
          <ContentType>접수 마감까지 {applicationDeadline}일</ContentType>
        </div>
      </div>
      <DividerLine margin="1rem" />
      <div>
        <Profile mode="rowmMode" id={host} rowModeText="주최자" />
      </div>
      <DividerLine margin="1rem" />
      <div className={style.buttonarea}>
        <Button
          themeType="primary"
          onClick={() => {
            router.push({
              pathname: '/openleague/[_id]/create-team',
              query: { _id: leagueId },
            });
          }}
        >
          팀 생성
        </Button>
        <Button themeType="secondary">팀 참여</Button>
      </div>
    </Card>
  );
};

export default LeagueDetailActionCard;
