import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Compressor from 'compressorjs';

export default function useLeague() {
  const [status, setStatus] = useState({
    isStart: false,
    isDone: false,
    code: 0,
  });
  const CCreateRequest = async (leagueData) => {
    if (!leagueData.thumbnail) {
      console.log('no file!');
    }
    try {
      new Compressor(leagueData.thumbnail, {
        quality: 1,
        success(result) {
          const reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = async () => {
            const base64data = reader.result;
            await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league`,
              { ...leagueData, thumbnail: base64data },
              {
                headers: {
                  Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
              },
            );
          };
        },
        error(err) {
          console.log(err.message);
        },
      });
    } catch (err) {
      console.log('error!');
    }
  };

  const CEditRequest = async (
    leagueData,
    leagueId: string | string[],
    isImageChange: boolean,
  ) => {
    console.log(leagueData.thumbnail);
    if (!isImageChange) {
      console.log('썸네일 변경이 없습니다');
      console.log('Target League : ' + leagueId);
      console.log(leagueData);
      await axios
        .put(
          `${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league/${leagueId}`,
          { ...leagueData, thumbnail: undefined },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('accessToken')}`,
            },
          },
        )
        .then((response) => {
          console.log('PUT : ' + response.status);
        });
    }
    try {
      new Compressor(leagueData.thumbnail, {
        quality: 1,
        success(result) {
          const reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = async () => {
            const base64data = reader.result;
            await axios.put(
              `${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league/${leagueId}`,
              { ...leagueData, thumbnail: base64data },
              {
                headers: {
                  Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
              },
            );
          };
        },
        error(err) {
          console.log(err.message);
        },
      });
    } catch (err) {
      console.log('error!');
    }
  };

  const CSortByGame = async (game: string) => {};

  // TODO 직접 Axios 로 호출하는 것을 커스텀 훅으로 대체하기
  const CGetLeague = async (leagueId: string) => {
    await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league/${leagueId}`,
      {},
    );
  };

  const CDeleteLeague = async (leagueId: string | string[]) => {
    setStatus({ ...status, isStart: true, isDone: false });
    await axios
      .delete(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league/${leagueId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('accessToken')}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setStatus({
            ...status,
            isStart: false,
            isDone: true,
            code: response.status,
          });
        }
      })
      .catch((error) => {
        setStatus({
          ...status,
          isStart: false,
          isDone: true,
          code: error.response.status,
        });
      });
  };

  return {
    status,
    CCreateRequest,
    CEditRequest,
    CSortByGame,
    CGetLeague,
    CDeleteLeague,
  };
}
