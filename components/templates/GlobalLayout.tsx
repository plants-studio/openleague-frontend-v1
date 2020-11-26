import * as React from 'react';
//import useWindowSize from './../../utils/useWindowSize';
import './GlobalLayout.module.scss';

interface IProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: IProps) => {
  return (
    <div className="view-wrapper">
      {500 >= 400 ? (
        <div className="leftnavigator">무언가 내용</div>
      ) : (
        <div>ss</div>
      )}
      <div style={{ paddingLeft: '440px', flex: '1' }}>
        <div className="contents-area">{children}</div>
      </div>
    </div>
  );
};

export default GlobalLayout;
