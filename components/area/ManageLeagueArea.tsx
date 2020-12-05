import { Button, Card } from 'plants-ui';
import React from 'react';
import UtilityBarCard from '../cards/UtilityBarCard';
import CardRowLayout from '../templates/CardRowLayout';
import CardGroup from '../utility/CardGroup';

const ManageLeagueArea = () => {
  return (
    <CardGroup>
      <UtilityBarCard />
      <CardRowLayout>
        <Card cardTitle="대회 삭제">
          <Button themeType="primary">대회 삭제하기</Button>
        </Card>
      </CardRowLayout>
    </CardGroup>
  );
};

export default ManageLeagueArea;
