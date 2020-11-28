import React from 'react';
import { Card } from 'plants-ui';
import GlobalLayout from './../components/templates/GlobalLayout';
import Counter from './../components/test/Counter';

export default function CreateLeague() {
  return (
    <div>
      <GlobalLayout>
        <Card cardTitle="대회 개설">
          <input
            type="text"
            name="leagueName"
            placeholder="대회 이름을 입력해주세요!"
          ></input>
          <br />
          <span>신청 마감일</span>
          <input type="date" name="applicationDeadline"></input>
          <br />
          <span>대회 시작일</span>
          <input type="date" name="leagueStartDay"></input>
          <br />
          <span>대회 마감일</span>
          <input type="date" name="leagueEndDay"></input>
          <br />
        </Card>
        <Card cardTitle="게임 선택">
          <select>
            <option value="League Of Legend">League Of Legend</option>
            <option value="Overwatch">Overwatch</option>
            <option value="Valorant">Valorant</option>
            <option value="Battlegrounds">Battlegrounds</option>
            <option value="Rainbow Six Siege">Rainbow Six Siege</option>
            <option value="etc">etc</option>
          </select>
        </Card>
        <Card cardTitle="대회 방법">
          <div>
            <input type="radio" name="onoffline" value="online" />
            온라인
            <input type="radio" name="onoffline" value="offline" />
            오프라인
          </div>
        </Card>
      </GlobalLayout>
    </div>
  );
}
