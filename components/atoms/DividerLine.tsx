import { jsx, css } from '@emotion/core';

interface IProps {
  margin?: string;
}

const DividerLine = ({ margin }: IProps) => {
  return <hr style={linestyle(margin)} />;
};

const linestyle = (margin) => {
  const text = {
    color: '#E8EBF3',
    opacity: '20%',
    width: '100%',
    height: '1px',
    margin: `${margin} 0`,
  };
  return text;
};

export default DividerLine;
