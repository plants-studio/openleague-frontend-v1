import { useRouter } from 'next/router';
import { Button, Card } from 'plants-ui';
import React from 'react';

interface IProps {
  children?: React.ReactNode;
  margin?: string;
}

const UtilityBarCard = ({ children, margin }: IProps) => {
  const router = useRouter();
  return (
    <Card margin={margin}>
      <Button
        themeType="secondary"
        onClick={() => {
          router.back();
        }}
      >
        뒤로가기
      </Button>
      {children}
    </Card>
  );
};

export default UtilityBarCard;
