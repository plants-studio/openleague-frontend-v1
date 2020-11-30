import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Compressor from 'compressorjs';

export default function useCreateLeague() {
  const CCreateRequest = async (leagueData) => {
    if (!leagueData.thumbnail) {
      console.log('no file!');
    }

    // TODO 어느정도 이상 크기가 넘어가면 퀄리티 조정 + 해상도 조정
    try {
      new Compressor(leagueData.thumbnail, {
        quality: 1,
        success(result) {
          const reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = async () => {
            const base64data = reader.result;
            await axios.post(
              'http://open-league-back.herokuapp.com/api/v1/league',
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

  return {
    CCreateRequest,
  };
}
