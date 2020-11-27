import React from 'react';
import useWindowSize from './useWindowSize';

interface IProps {
  children: React.ReactChild[];
}

const Switch = ({ children }: IProps) => {
  const size: any = useWindowSize();

  let desktop, mobile;

  React.Children.forEach(children, (child, idx) => {
    if (React.isValidElement(child)) {
      if (idx === 0) {
        desktop = child;
      } else if (idx === 1) {
        mobile = child;
      }
    }
  });

  if (!size) {
    if (size >= 1040) {
      return desktop;
    } else {
      return mobile;
    }
  }

  return null;
  //return size ? (size >= 1040 ? desktop : mobile) : null;
};

export default Switch;
