import React from 'react';
import GlobalLayout from '../../components/templates/GlobalLayout';
import CreateLeagueWrapper from '../../components/utility/CreateLeagueWrapper';
import BackgroundPatternWrapper from '../../components/templates/BackgroundPatternWrapper';

export default function CreateLeague() {
  return (
    <div>
      <GlobalLayout>
        <BackgroundPatternWrapper>
          <CreateLeagueWrapper />
        </BackgroundPatternWrapper>
      </GlobalLayout>
    </div>
  );
}
