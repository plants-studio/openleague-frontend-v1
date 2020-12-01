import React, { useEffect, useState } from 'react';
import { Button } from 'plants-ui';
import { useRouter } from 'next/router';

// TODO 로그인 여부에 따라 버튼이 비활성화되도록 만들기
const NavigatorActionArea = () => {
  const router = useRouter();
  const [buttonText, setButtonText] = useState('');
  const [targetPath, setTargetPath] = useState('');
  useEffect(() => {
    switch (router.pathname.split('/')[1]) {
      case '':
        setButtonText('대회 생성');
        setTargetPath('/openleague/create-league');
        break;
      case 'openleague':
        setButtonText('대회 생성');
        setTargetPath('/openleague/create-league');
        break;
      case 'home':
        setButtonText('없는 기능');
        setTargetPath('/404');
        break;
      case 'community':
        setButtonText('글 작성하기');
        setTargetPath('/create-post');
        break;
      default:
        console.log('그 어떤 url도 아닙니다');
        break;
    }
    setButtonText;
  }, []);

  return (
    <div>
      <Button
        themeType="primary"
        width="100%"
        onClick={() => {
          router.push(targetPath);
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default NavigatorActionArea;
