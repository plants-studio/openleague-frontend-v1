import { jsx, css } from '@emotion/core';

interface IProps {
  margin?: string;
}

const DividerLine = ({ margin }: IProps) => {
  return <hr style={linestyle(margin)} />;
};

// TODO 일반적인 마진 방식으로 바꾸기
const linestyle = (margin) => {
  const text = {
    color: '#E8EBF3',
    opacity: '10%',
    width: '100%',
    borderWidth: '2px',
    margin: `${margin} 0`,
  };
  return text;
};

export default DividerLine;
