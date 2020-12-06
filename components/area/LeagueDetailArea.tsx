import { useRouter } from 'next/router';
import { Button, Card } from 'plants-ui';
import React, { useEffect } from 'react';
import CardGroup from '../utility/CardGroup';
import style from './LeagueDetailArea.module.scss';
import { getFormattedLeagueSchedule } from '../../src/utils/league';
//import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import dynamic from 'next/dynamic';
import { ViewerProps } from '@toast-ui/react-editor';
import LeagueBasicInformation from '../cards/LeagueBasicInformation';
import UtilityBarCard from '../cards/UtilityBarCard';
import useUser from '../../src/hooks/useUser';
interface IProps {
  leagueDetail: any;
}

const Viewer = dynamic<ViewerProps>(
  () => import('@toast-ui/react-editor').then((m) => m.Viewer),
  { ssr: false },
);

const LeagueDetailArea = ({ leagueDetail }: IProps) => {
  const router = useRouter();
  const { userId } = useUser();

  useEffect(() => {
    if (userId === leagueDetail.host) {
      console.log('Prefetching : modify-league, manage-league');
      router.prefetch(
        '/openleague/[_id]/manage-league',
        `/openleague${leagueDetail._id}/manage-league`,
      );
      router.prefetch(
        '/openleague/[_id]/modify-league',
        `/openleague${leagueDetail._id}/modify-league`,
      );
    } else {
      console.log('Fail to prefetch league management page');
      console.log('userId : ' + userId);
      console.log('userId : ' + leagueDetail.host);
    }
  }, []);
  return (
    <div className={style.wrapper}>
      <CardGroup>
        <UtilityBarCard>
          {userId === leagueDetail.host ? (
            <>
              <Button
                margin="0 0 0 1rem"
                themeType="secondary"
                onClick={() => {
                  router.push({
                    pathname: '/openleague/[_id]/modify-league',
                    query: { _id: leagueDetail._id },
                  });
                }}
              >
                대회정보 수정
              </Button>
              <Button
                margin="0 0 0 1rem"
                themeType="secondary"
                onClick={() => {
                  router.push({
                    pathname: '/openleague/[_id]/manage-league',
                    query: { _id: leagueDetail._id },
                  });
                }}
              >
                대회 관리
              </Button>
            </>
          ) : (
            <></>
          )}
        </UtilityBarCard>
        <Card>
          <div>
            <img
              className={style.thumbnail}
              src={`${process.env.NEXT_PUBLIC_BACKEND}${leagueDetail.thumbnail}`}
              onLoad={() => {
                console.log('DONE');
              }}
            />
          </div>
        </Card>
        <LeagueBasicInformation
          game={leagueDetail.game}
          placeType={leagueDetail.placeType}
          leagueSchedule={getFormattedLeagueSchedule(
            leagueDetail.leagueStartDay,
            leagueDetail.leagueEndDay,
          )}
          applicationDeadline={leagueDetail.applicationDeadline}
          location={leagueDetail.location}
          discordLink={leagueDetail.discordLink}
        />
        <Card cardTitle="대회 소개">
          <Viewer initialValue={leagueDetail.introduce} />
        </Card>
        <Card cardTitle="대회 규정">
          <Viewer initialValue={leagueDetail.rule} />
        </Card>
      </CardGroup>
    </div>
  );
};

export default LeagueDetailArea;
