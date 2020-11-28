import { useEffect, useLayoutEffect, useState } from 'react';
import style from './GlobalLayout.module.scss';
import AccountArea from '../area/AccountArea';
import NavigatorArea from '../area/NavigatorArea';
import DividerLine from '../atoms/DividerLine';
import NavigatorActionArea from '../area/NavigatorActionArea';
import NavigatorNotificationArea from '../area/NavigatorNotificationArea';

interface IProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: IProps) => {
  const [showChild, setShowChild] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return <span>로딩중입니다</span>;
  }

  return <Child>{children}</Child>;
};

const Child = ({ children }: IProps) => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    setWidth(window.innerWidth);
  });

  return (
    <div className={style.viewwrapper}>
      {width > 450 ? (
        <div className={style.leftnavigator}>
          <div className={style.itemarea}>
            <div>
              <AccountArea />
              <DividerLine margin="20px" />
              <NavigatorArea isLeftNavigatorMode={true} />
              <DividerLine margin="20px" />
              <NavigatorNotificationArea />
              <DividerLine margin="20px" />
            </div>
            <NavigatorActionArea />
          </div>
        </div>
      ) : (
        <div className={style.bottomnavigator}>
          <NavigatorArea isLeftNavigatorMode={false} />
        </div>
      )}
      <div className={style.contentwrapper}>
        <div className={style.contentsarea}>{children}</div>
      </div>
    </div>
  );
};

export default GlobalLayout;
