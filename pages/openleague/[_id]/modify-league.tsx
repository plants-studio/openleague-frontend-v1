import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LeagueDetailActionCard from '../../../components/cards/LeagueDetailActionCard';
import GlobalLayout from '../../../components/templates/GlobalLayout';
import CardGroup from '../../../components/utility/CardGroup';
import CreateLeagueWrapper from '../../../components/utility/CreateLeagueWrapper';
import ModifyLeagueWrapper from '../../../components/utility/ModifyLeagueWrapper';
import useLeague from '../../../src/hooks/useLeague';

export default function ModifyLeague() {
  return (
    <div>
      <GlobalLayout>
        <CardGroup>
          <ModifyLeagueWrapper />
        </CardGroup>
      </GlobalLayout>
    </div>
  );
}
