import { Button, Card } from 'plants-ui';
import React, { useState } from 'react';
import UtilityBarCard from '../cards/UtilityBarCard';
import CardRowLayout from '../templates/CardRowLayout';
import CardGroup from '../utility/CardGroup';
import Modal from '../utility/Modal';
import useLeague from './../../src/hooks/useLeague';
import LoadingModalItem from './LoadingModalItem';

const ManageLeagueArea = ({ leagueDetail }) => {
  const { status, CDeleteLeague } = useLeague();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <CardGroup>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={false}
          maskClosable={false}
          onClose={closeModal}
        >
          <LoadingModalItem
            isStart={status.isStart}
            isDone={status.isDone}
            code={status.code}
            successMessage={{
              title: '대회 삭제 완료!',
              subtitle: '아쉽네요. 그는 좋은 대회였습니다...',
              targetPath: '/',
              buttonText: '목록으로',
            }}
            errorMessage={[
              {
                code: 404,
                title: '예기치 못한 오류 발생!',
                subtitle:
                  '대회 삭제에 어려움을 겪는다면 plantstoen@gmail.com 으로 문의주세요:D',
                targetPath: '/',
                buttonText: '목록으로',
              },
            ]}
          />
        </Modal>
      )}
      <UtilityBarCard />
      <CardRowLayout>
        <Card cardTitle="대회 삭제">
          <Button
            themeType="primary"
            onClick={() => {
              openModal();
              CDeleteLeague(leagueDetail._id);
            }}
          >
            대회 삭제하기
          </Button>
        </Card>
      </CardRowLayout>
    </CardGroup>
  );
};

export default ManageLeagueArea;
