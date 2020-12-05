import React, { useEffect, useState } from 'react';
import useLeague from '../../src/hooks/useLeague';
import { Button, Card } from 'plants-ui';
import WysiwygEditor from '../../components/utility/WysiwygEditor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';
import CustomInput from '../atoms/CustomInput';
import RadioInput from '../../components/atoms/RadioInput';
import CardRowLayout from '../templates/CardRowLayout';
import style from './CreateLeagueWrapper.module.scss';
import { useRouter } from 'next/router';
import UtilityBarCard from '../cards/UtilityBarCard';
import axios from 'axios';

// 새로고침해도 데이터가 들어와있도록 하기
const ModifyLeagueWrapper = () => {
  const router = useRouter();
  const { CEditRequest } = useLeague();
  const [isLoad, setIsLoad] = useState(false);
  const [isImageChange, setIsImageChange] = useState(false);
  const [leagueId, setLeagueId] = useState('');
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
    status: '',
  });

  useEffect(() => {
    console.log('run useEffect');
    const leagueId = router.query._id;
    const fetchLeague = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league/${leagueId}`, {})
        .then((response) => {
          const data = response.data;
          setLeagueData({
            ...leagueData,
            title: data.title,
            applicationDeadline: data.applicationDeadline,
            leagueStartDay: data.leagueStartDay,
            leagueEndDay: data.leagueEndDay,
            introduce: data.introduce,
            rule: data.rule,
            thumbnail: data.thumbnail,
            game: data.game,
            teamMin: data.teamMin,
            teamMax: data.teamMax,
            teamReqMemCnt: data.teamReqMemCnt,
            placeType: data.placeType,
            discordLink: data.discordLink,
            location: data.location,
            status: data.status,
          });
          setIsLoad(true);
        });
    };
    fetchLeague();
  }, []);

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
    setLeagueData({ ...leagueData, [e.target.name]: e.target.value });
  };

  const handleNumber = (e) => {
    setLeagueData({ ...leagueData, [e.target.name]: e.target.valueAsNumber });
  };

  const setFile = (e) => {
    setIsImageChange(true);
    setLeagueData({ ...leagueData, thumbnail: e.target.files[0] });
  };

  if (!isLoad) {
    return <h1>로딩중</h1>;
  }

  return (
    <div className={style.wrapper}>
      <UtilityBarCard margin="0 0 0.5rem 0"></UtilityBarCard>
      <CardRowLayout>
        <Card width="100%" cardTitle="기본 정보">
          <CustomInput
            name="title"
            type="text"
            placeholder="대회 이름을 입력해주세요!"
            onChange={(e) => {
              handleText(e);
            }}
            width="100%"
            maxLength={40}
            value={leagueData.title}
          ></CustomInput>
          <div className={style.datearea}>
            <div className={style.dateitem}>
              <span className={style.datearea__name}>신청 마감일</span>
              <input
                value={leagueData.applicationDeadline}
                className={style.dateinput}
                type="date"
                name="applicationDeadline"
                onChange={handleDate}
              ></input>
            </div>
            <div className={style.dateitem}>
              <span className={style.datearea__name}>대회 시작일</span>
              <input
                value={leagueData.leagueStartDay}
                className={style.dateinput}
                type="date"
                name="leagueStartDay"
                onChange={handleDate}
              ></input>
            </div>
            <div className={style.dateitem}>
              <span className={style.datearea__name}>대회 종료일</span>
              <input
                value={leagueData.leagueEndDay}
                className={style.dateinput}
                type="date"
                name="leagueEndDay"
                onChange={handleDate}
                accept="image/jpeg, image/png, image/jpg"
              ></input>
            </div>
          </div>
        </Card>
        <Card width="36rem" cardTitle="게임 선택">
          <select
            className={style.gameselect}
            name="game"
            placeholder="게임 선택"
            onChange={(e) => {
              handleText(e);
            }}
            value={leagueData.game}
          >
            <option value="League Of Legend">리그오브레전드</option>
            <option value="Overwatch">오버워치</option>
            <option value="Battleground">배틀그라운드</option>
            <option value="Rainbow Six Siege">레인보우 식스 시즈</option>
            <option value="Valorant">발로란트</option>
            <option value="Etc">기타</option>
          </select>
          <div className={style.uploadarea}>
            <label htmlFor="file-upload" className={style.filebutton}>
              재업로드
            </label>
            <input
              id="file-upload"
              type="file"
              name="thumbnail"
              onChange={setFile.bind(this)}
              placeholder="이미지  재업로드"
              className={style.inputfiletag}
            />
          </div>
          <span className={style.explaintext}>
            썸네일을 업로드하지 않으면 선택한 게임에 따라 기본 썸네일이 랜덤하게
            적용됩니다
          </span>
        </Card>
      </CardRowLayout>

      <CardRowLayout>
        <Card cardTitle="인원" width="36rem">
          <CustomInput
            width="100%"
            margin="0 0 0.5rem 0"
            type="number"
            name="teamReqMemCnt"
            onChange={handleNumber}
            placeholder="팀 인원(팀원의 수)"
            value={leagueData.teamReqMemCnt}
          ></CustomInput>
          <CustomInput
            width="100%"
            margin="0.5rem 0"
            type="number"
            name="teamMin"
            onChange={handleNumber}
            placeholder="대회 운영이 가능한 최소 팀 수"
            value={leagueData.teamMin}
          ></CustomInput>
          <CustomInput
            width="100%"
            margin="0.5rem 0 0 0"
            type="number"
            name="teamMax"
            onChange={handleNumber}
            placeholder="대회 운영 가능한 최대 팀 수"
            value={leagueData.teamMax}
          ></CustomInput>
        </Card>
        <Card cardTitle="대회 방법" width="100%">
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <RadioInput
              name="onoffline"
              value="online"
              onChange={handlePlaceType}
              nowSelected={leagueData.placeType}
            >
              온라인
            </RadioInput>
            <RadioInput
              name="onoffline"
              value="offline"
              onChange={handlePlaceType}
              nowSelected={leagueData.placeType}
            >
              오프라인
            </RadioInput>
          </div>
          <div className={style.placetypewrapper}>
            {leagueData.placeType === '' ? (
              <span className={style.explaintext}>
                대회 방법을 선택해주세요!
              </span>
            ) : leagueData.placeType === 'online' ? (
              <>
                <CustomInput
                  width="100%"
                  type="text"
                  name="discordLink"
                  onChange={handleText}
                  placeholder="대회 진행에 사용할 디스코드 서버 초대링크"
                  value={leagueData.discordLink}
                ></CustomInput>
                <span className={style.explaintext}>
                  초대하기-초대 링크 편집하기 에서 잔여 유효기간과
                  <br /> 최대 사용횟수를 무제한으로 설정해주세요!
                </span>
              </>
            ) : (
              <>
                <CustomInput
                  width="100%"
                  type="text"
                  name="location"
                  onChange={handleText}
                  placeholder="대회 장소"
                  value={leagueData.location}
                ></CustomInput>
                <span className={style.explaintext}>
                  대회를 개최할 곳의 상세한 주소를 작성해주세요!
                </span>
              </>
            )}
          </div>
        </Card>
      </CardRowLayout>

      <Card cardTitle="대회 소개" margin="0.5rem 0">
        <WysiwygEditor
          initialValue={leagueData.introduce}
          onChange={handleIntroduce}
        ></WysiwygEditor>
      </Card>
      <Card cardTitle="대회 규칙" margin="0.5rem 0">
        <WysiwygEditor
          initialValue={leagueData.rule}
          onChange={handleRule}
        ></WysiwygEditor>
      </Card>
      <Card margin="0.5rem 0 0 0">
        <div className={style.buttonarea}>
          <Button
            themeType="primary"
            onClick={() => {
              console.log(leagueData);
              console.log('-----');
              CEditRequest(leagueData, router.query._id, isImageChange);
            }}
          >
            대회 수정하기
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ModifyLeagueWrapper;
