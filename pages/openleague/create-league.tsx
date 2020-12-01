import React, { useState } from 'react';
import { Card } from 'plants-ui';
import GlobalLayout from '../../components/templates/GlobalLayout';
import Counter from '../../components/test/Counter';
import WysiwygEditor from '../../components/utility/WysiwygEditor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';
import useCreateLeague from '../../src/hooks/useCreateLeague';
import TextInput from './../../components/atoms/TextInput';

export default function CreateLeague() {
  const { CCreateRequest } = useCreateLeague();
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
    setLeagueData({ ...leagueData, [e.target.name]: e.target.value });
  };

  const handlePlaceType = (e) => {
    setLeagueData({
      ...leagueData,
      placeType: e.target.defaultValue,
    });
  };

  const handleText = (e) => {
    console.log(e);
    setLeagueData({ ...leagueData, [e.target.name]: e.target.value });
  };

  const handleNumber = (e) => {
    console.log(e);
    setLeagueData({ ...leagueData, [e.target.name]: e.target.valueAsNumber });
  };

  const setFile = (e) => {
    console.log(e.target.files[0]);
    setLeagueData({ ...leagueData, thumbnail: e.target.files[0] });
  };

  return (
    <div>
      <GlobalLayout>
        <Card width="400px" cardTitle="대회 개설">
          <TextInput
            name="title"
            type="text"
            placeholder="대회 이름을 입력해주세요!"
            onChange={(e) => {
              handleText(e);
            }}
            width="100%"
          ></TextInput>
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
          <input
            type="date"
            name="leagueEndDay"
            onChange={handleDate}
            accept="image/jpeg, image/png, image/jpg"
          ></input>
          <input
            type="file"
            name="thumbnail"
            onChange={setFile.bind(this)}
            placeholder="썸네일 업로드"
          />
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
          <>
            <label>
              <input
                type="radio"
                name="onoffline"
                value="online"
                onChange={handlePlaceType}
              />
              온라인
            </label>
            <label>
              <input
                type="radio"
                name="onoffline"
                value="offline"
                onChange={handlePlaceType}
              />
              오프라인
            </label>
            {leagueData.placeType === 'online' ? (
              <input
                type="text"
                name="discordLink"
                onChange={handleText}
                placeholder="대회 진행에 사용할 디스코드 서버 초대링크"
              ></input>
            ) : (
              <input
                type="text"
                name="location"
                onChange={handleText}
                placeholder="대회 장소"
              ></input>
            )}
          </>
        </Card>

        <Card cardTitle="대회 소개">
          <WysiwygEditor onChange={handleIntroduce}></WysiwygEditor>
        </Card>
        <Card cardTitle="대회 규칙">
          <WysiwygEditor onChange={handleRule}></WysiwygEditor>
        </Card>
        <Card cardTitle="인원">
          <input
            type="number"
            name="teamReqMemCnt"
            onChange={handleNumber}
            placeholder="팀 인원수"
          ></input>
          <input
            type="number"
            name="teamMin"
            onChange={handleNumber}
            placeholder="최소 팀 수"
          ></input>
          <input
            type="number"
            name="teamMax"
            onChange={handleNumber}
            placeholder="최대 팀 수"
          ></input>
        </Card>
        <Card>
          <button
            onClick={() => {
              CCreateRequest(leagueData);
            }}
          >
            제출
          </button>
        </Card>
      </GlobalLayout>
    </div>
  );
}
