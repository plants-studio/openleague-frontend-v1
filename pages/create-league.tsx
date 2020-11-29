import React, { useState } from 'react';
import { Card } from 'plants-ui';
import GlobalLayout from './../components/templates/GlobalLayout';
import Counter from './../components/test/Counter';
import WysiwygEditor from './../components/utility/WysiwygEditor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';

export default function CreateLeague() {
  const [leagueData, setLeagueData] = useState({
    title: '',
    applicationDeadline: '',
    leagueStartDay: '',
    leagueEndDay: '',
    introduce: '',
    rule: '',
    thumbnail: undefined,
    game: '',
    teamMin: 0,
    teamMax: 0,
    teamReqMemCnt: 0,
    placeType: '',
    discordLink: '',
    location: '',
  });

  const handleIntroduce = (e) => {
    setLeagueData({
      ...leagueData,
      introduce: e,
    });
  };

  const handleRule = (e) => {
    setLeagueData({
      ...leagueData,
      rule: e,
    });
  };

  const handleDate = (e) => {
    console.log(e);
    setLeagueData({ ...leagueData, [e.target.name]: e.target.value });
  };

  const handlePlaceType = (e) => {
    setLeagueData({
      ...leagueData,
      placeType: e.target.defaultValue,
    });
  };

  return (
    <div>
      <GlobalLayout>
        <Card cardTitle="대회 개설">
          <input
            type="text"
            name="leagueName"
            placeholder="대회 이름을 입력해주세요!"
            onChange={(e) => {
              setLeagueData({ ...leagueData, title: e.target.value });
            }}
          ></input>
          <br />
          <span>신청 마감일</span>
          <input
            type="date"
            name="applicationDeadline"
            onChange={handleDate}
          ></input>
          <br />
          <span>대회 시작일</span>
          <input
            type="date"
            name="leagueStartDay"
            onChange={handleDate}
          ></input>
          <br />
          <span>대회 마감일</span>
          <input type="date" name="leagueEndDay" onChange={handleDate}></input>
          <br />
        </Card>
        <Card cardTitle="게임 선택">
          <input
            type="text"
            name="game"
            onChange={(e) => {
              setLeagueData({ ...leagueData, game: e.target.value });
            }}
          ></input>
        </Card>
        <Card cardTitle="대회 방법">
          <form>
            <input
              type="radio"
              name="onoffline"
              value="online"
              onChange={handlePlaceType}
            />
            온라인
            <input
              type="radio"
              name="onoffline"
              value="offline"
              onChange={handlePlaceType}
            />
            오프라인
          </form>
        </Card>

        <Card cardTitle="대회 소개">
          <WysiwygEditor onChange={handleIntroduce}></WysiwygEditor>
        </Card>
        <Card cardTitle="대회 규칙">
          <WysiwygEditor onChange={handleRule}></WysiwygEditor>
        </Card>
      </GlobalLayout>
    </div>
  );
}
