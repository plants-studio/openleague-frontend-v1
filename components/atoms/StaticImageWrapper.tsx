import React from 'react';
import Image from 'next/image';
import style from './StaticImageWrapper.module.scss';

interface IProps {
  OptWidth: number;
  OptHeight: number;
  width?: string;
  height?: string;
  borderRadius?: string;
  imagePath: string;
}

const StaticImageWrapper = ({
  OptWidth,
  OptHeight,
  width,
  height,
  borderRadius,
  imagePath,
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
      <Image
        src={imagePath}
        width={OptWidth}
        height={OptHeight}
        layout="responsive"
        objectFit="cover"
      ></Image>
    </div>
  );
};

export default StaticImageWrapper;
