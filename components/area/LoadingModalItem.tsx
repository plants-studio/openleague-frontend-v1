import { useRouter } from 'next/router';
import { Button } from 'plants-ui';
import React from 'react';
import StaticImageWrapper from '../atoms/StaticImageWrapper';
import style from './LoadingModalItem.module.scss';

// TODO 공통된 타입 추출하기
interface IProps {
  isStart: boolean;
  isDone: boolean;
  code: number;
  successMessage: {
    title: string;
    subtitle: string;
    targetPath: string;
    buttonText: string;
  };
  errorMessage: {
    code: number;
    title: string;
    subtitle: string;
    targetPath: string;
    buttonText: string;
  }[];
}

const LoadingModalItem = ({
  isStart,
  isDone,
  code,
  successMessage,
  errorMessage,
}: IProps) => {
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      {isStart && <h1>계정을 생성중입니다..</h1>}
      {isDone && (
        <>
          {code === 200 && (
            <>
              <StaticImageWrapper
                width="70%"
                OptWidth={535}
                OptHeight={221}
                imagePath="/images/logo.png"
              />
              <span className={style.header}>{successMessage.title}</span>
              <div className={style.textarea}>
                <span className={style.textarea__text}>
                  {successMessage.subtitle}
                </span>
              </div>
              <Button
                themeType="primary"
                onClick={() => {
                  router.push(successMessage.targetPath);
                }}
              >
                {successMessage.buttonText}
              </Button>
            </>
          )}
          {code === 409 && (
            <>
              <StaticImageWrapper
                width="70%"
                OptWidth={535}
                OptHeight={221}
                imagePath="/images/logo.png"
              />
              <span className={style.header}>
                {
                  errorMessage.find((element) => {
                    return element.code === 409;
                  }).title
                }
              </span>
              <div className={style.textarea}>
                <span className={style.textarea__text}>
                  {
                    errorMessage.find((element) => {
                      return element.code === 409;
                    }).subtitle
                  }
                </span>
              </div>
              <Button
                themeType="primary"
                onClick={() => {
                  router.push(
                    errorMessage.find((element) => {
                      return element.code === 409;
                    }).targetPath,
                  );
                }}
              >
                {
                  errorMessage.find((element) => {
                    return element.code === 409;
                  }).buttonText
                }
              </Button>
            </>
          )}
          {code == 200 || code == 409 ? (
            <></>
          ) : (
            <>
              <StaticImageWrapper
                width="70%"
                OptWidth={535}
                OptHeight={221}
                imagePath="/images/logo.png"
              />
              <span className={style.header}>
                알수 없는 오류가 발생하였습니다!
              </span>
              <div className={style.textarea}>
                <span className={style.textarea__text}>
                  문제 상황에 대해 plantstoen@gmail.com으로 문의주시면
                  도와드리겠습니다 !
                </span>
              </div>
              <Button
                themeType="primary"
                onClick={() => {
                  router.back();
                }}
              >
                이전 페이지로
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default LoadingModalItem;
