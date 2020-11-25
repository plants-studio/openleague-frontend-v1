import { Button, Icon, NavButton } from 'plants-ui';

const sayHi = () => {
  console.log('hi');
};

const Test = () => {
  return (
    <div>
      안녕
      <br />
      <Button themeType="primary" onClick={sayHi}>
        테스트
      </Button>
      <NavButton width="200px">
        <Icon icon="community" />
        커뮤니티
      </NavButton>
      <br />
    </div>
  );
};

export default Test;
