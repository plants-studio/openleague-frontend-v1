import { useRouter } from 'next/router';
import { Button, Card } from 'plants-ui';
import React from 'react';
import LeagueDetailActionCard from '../cards/LeagueDetailActionCard';
import CardGroup from '../utility/CardGroup';
import style from './LeagueDetailArea.module.scss';
import {
  getFormattedApplicationDeadline,
  getFormattedLeagueSchedule,
} from '../../src/utils/league';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import dynamic from 'next/dynamic';
import { ViewerProps } from '@toast-ui/react-editor';
import DividerLine from '../atoms/DividerLine';
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
  return (
    <div className={style.wrapper}>
      <CardGroup>
        <UtilityBarCard>
          {userId === leagueDetail.host ? (
            <Button themeType="tertiary">대회 수정하기 </Button>
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
            <DividerLine margin="1rem 0" />
            <Viewer initialValue={leagueDetail.introduce} />
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
        <Card cardTitle="대회 규정">
          <Viewer initialValue={leagueDetail.rule} />
        </Card>
      </CardGroup>
      <div className={style.fixedarea}>
        <LeagueDetailActionCard
          width="22rem"
          title={leagueDetail.title}
          applicationDeadline={getFormattedApplicationDeadline(
            leagueDetail.applicationDeadline,
          )}
          host={leagueDetail.host}
          status={leagueDetail.status}
          leagueId={leagueDetail._id}
        ></LeagueDetailActionCard>
      </div>
      <div className={style.mockarea}></div>
    </div>
  );
};

export default LeagueDetailArea;
