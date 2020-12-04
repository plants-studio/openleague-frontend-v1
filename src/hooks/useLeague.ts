import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Compressor from 'compressorjs';

export default function useLeague() {
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

  const CSortByGame = async (game: string) => {};

  return {
    CCreateRequest,
  };
}
