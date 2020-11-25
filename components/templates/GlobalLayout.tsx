import * as React from 'react';
import { css } from '@emotion/react';

interface IProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: IProps) => {
  return (
    <div>
      <div css={viewWrapper}>
        <div css={leftNavigator}>무언가 내용</div>
        <div style={{ paddingLeft: '440px', flex: '1' }}>
          <div css={contentArea}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const viewWrapper = css`
  flex: 1;
  position: relative;
  display: flex;
`;

const leftNavigator = css`
  position: fixed;
  height: 100vh;
  width: 440px;
  min-width: 440px;
  background-color: white;
  border-radius: 0px 20px 20px 0px;
  box-shadow: 0px 6px 25px #d1d5df;
`;

const contentArea = css`
  padding: 2rem 2rem;
`;

const paddingSelector = (props: boolean) =>
  props
    ? css`
        padding: 1rem 1rem;
      `
    : css`
        padding: 0;
      `;

export default GlobalLayout;
