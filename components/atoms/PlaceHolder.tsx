import React from 'react';

interface IProps {
  width: string;
  height: string;
  borderRadius: string;
}

const PlaceHolder = ({ width, height, borderRadius }: IProps) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
      }}
    ></div>
  );
};

export default PlaceHolder;
