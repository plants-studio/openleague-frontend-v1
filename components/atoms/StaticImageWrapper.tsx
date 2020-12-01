import React from 'react';
import Image from 'next/image';

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
      style={{
        display: 'block',
        width: width,
        height: height,
        borderRadius: borderRadius,
        overflow: 'hidden',
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
