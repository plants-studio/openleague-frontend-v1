import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card, Header } from 'plants-ui';
import { ReactComponent as NotFound } from './../../public/images/notfound.svg';
import style from './NotFoundCard.module.scss';
import { route } from 'next/dist/next-server/server/router';

const NotFoundCard = () => {
  const router = useRouter();

  return (
    <Card width="25rem">
      <div className={style.imagearea}>
        <NotFound width="60%" />
        <h1 className={style.header}>Page Not Found!</h1>
      </div>
      <div className={style.textarea}>
        <span className={style.textarea__text}>
          존재하지 않는 페이지입니다! <br />
          잘못되거나 없는 주소를 입력하였거나
          <br />
          요청하신 페이지가 삭제되어 찾을 수 없습니다.
        </span>
      </div>
      <Button
        themeType="primary"
        width="100%"
        onClick={() => {
          router.push('/');
        }}
      >
        홈으로 돌아가기
      </Button>
    </Card>
  );
};

export default NotFoundCard;
