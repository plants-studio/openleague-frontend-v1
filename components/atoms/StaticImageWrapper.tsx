import React from 'react';
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
}: IProps) => {
  return (
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
        ></Image>
      ) : (
        <Image
          src={imagePath}
          width={OptWidth}
          height={OptHeight}
          layout="responsive"
          objectFit="cover"
          loading={loadMode}
        ></Image>
      )}
    </div>
  );
};

export default StaticImageWrapper;
