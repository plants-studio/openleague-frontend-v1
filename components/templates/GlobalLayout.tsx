import { useEffect, useLayoutEffect, useState } from 'react';
import style from './GlobalLayout.module.scss';
import AccountArea from '../organisms/AccountArea';
import NavigatorArea from '../organisms/NavigatorArea';
import DividerLine from '../atoms/DividerLine';
import { Button } from 'plants-ui';

interface IProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: IProps) => {
  const [showChild, setShowChild] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    console.log('run useEffect');
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
            <AccountArea />
            <DividerLine margin="20px" />
            <NavigatorArea isLeftNavigatorMode={true} />
            <Button themeType="primary">테스트용</Button>
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
