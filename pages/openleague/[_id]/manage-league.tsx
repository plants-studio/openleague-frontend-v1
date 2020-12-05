import React from 'react';
import axios from 'axios';
import ManageLeagueArea from '../../../components/area/ManageLeagueArea';
import GlobalLayout from '../../../components/templates/GlobalLayout';
import LeagueDetailActionCard from '../../../components/cards/LeagueDetailActionCard';
import { getFormattedApplicationDeadline } from '../../../src/utils/league';

export default function ModifyLeague({ leagueDetail }) {
  return (
    <div>
      <GlobalLayout>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ManageLeagueArea />
          <LeagueDetailActionCard
            width="22rem"
            title={leagueDetail.title}
            applicationDeadline={getFormattedApplicationDeadline(
              leagueDetail.applicationDeadline,
            )}
            host={leagueDetail.host}
            status={leagueDetail.status}
            leagueId={leagueDetail._id}
          ></LeagueDetailActionCard>{' '}
        </div>
      </GlobalLayout>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const leagueDetail = await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league/${params._id}`, {})
    .then((response) => {
      return response.data;
    });

  return { props: { leagueDetail } };
}
