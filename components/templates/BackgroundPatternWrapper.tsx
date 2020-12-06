import style from './BackgroundPatternWrapper.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

interface IProps {
  children: React.ReactNode;
  isFullScreenMode?: boolean;
}

const FullPageWrapper = ({ children, isFullScreenMode }: IProps) => {
  return (
    <div className={cx('defaultstyle', { fullscreenmode: isFullScreenMode })}>
      {children}
    </div>
  );
};

export default FullPageWrapper;
