import { Card } from 'plants-ui';
import React from 'react';
import DividerLine from '../atoms/DividerLine';

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
        <span>{title}</span>
        <span>{applicationDeadline}</span>
      </div>
      <DividerLine />
      <div>하하</div>
    </Card>
  );
};

export default LeagueDetailActionCard;
