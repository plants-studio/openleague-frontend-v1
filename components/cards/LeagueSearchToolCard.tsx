import React from 'react';
import { Card } from 'plants-ui';
import CardWrapper from '../templates/CardWrapper';
import TextInput from '../atoms/TextInput';

const LeagueSearchToolCard = () => {
  return (
    <CardWrapper desktopWidth="22rem">
      <Card cardTitle="탐색 도구" width="100%">
        <TextInput
          type="text"
          name="searchbar"
          width="100%"
          placeholder="대회명, 주최자 등으로 검색해보세요"
        />
      </Card>
    </CardWrapper>
  );
};

export default LeagueSearchToolCard;
