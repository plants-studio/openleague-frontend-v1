import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './StaticImageWrapper.module.scss';

interface IProps {
  OptWidth?: number;
  OptHeight?: number;
  width?: string;
  height?: string;
  borderRadius?: string;
  imagePath: string;
  loadMode?: 'lazy' | 'eager';
  isFillMode?: boolean;
  quality?: number;
}

const StaticImageWrapper = ({
  OptWidth,
  OptHeight,
  width,
  height,
  borderRadius,
  imagePath,
  loadMode,
  isFillMode = false,
  quality = 75,
}: IProps) => {
  const [isLoad, setIsLoad] = useState(true);
  const [done, setDone] = useState(false);

  return (
    <>
      {isLoad ? <h1>로딩중</h1> : <></>}
      <div
        className={style.imageWrapper}
        style={{
          width: width,
          height: height,
          borderRadius: borderRadius,
        }}
      >
        {isFillMode ? (
          <Image
            src={imagePath}
            layout="fill"
            objectFit="cover"
            loading={loadMode}
            onLoad={() => {
              setIsLoad(false);
            }}
            quality={quality}
          ></Image>
        ) : (
          <Image
            src={imagePath}
            width={OptWidth}
            height={OptHeight}
            layout="responsive"
            objectFit="cover"
            loading={loadMode}
            onLoad={() => {
              setIsLoad(false);
            }}
            quality={quality}
          ></Image>
        )}
      </div>
    </>
  );
};

export default StaticImageWrapper;
