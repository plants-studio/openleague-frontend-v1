import React from 'react';
import styles from './SliderButton.module.scss';
import { ReactComponent as LeftArrow } from './../../public/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from './../../public/icons/right-arrow.svg';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface IProps {
  direction: 'left' | 'right';
  onClick?: (e) => void;
}

const SliderButton = ({ direction, onClick }: IProps) => {
  return (
    <>
      {direction === 'left' ? (
        <div className={cx('buttondiv', 'left')} onClick={onClick}>
          <LeftArrow className={cx('buttondiv__icon')} />
        </div>
      ) : (
        <div className={cx('buttondiv', 'right')} onClick={onClick}>
          <RightArrow className={cx('buttondiv__icon')} />
        </div>
      )}
    </>
  );
};

export default SliderButton;
