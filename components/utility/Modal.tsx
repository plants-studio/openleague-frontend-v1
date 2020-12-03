import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.scss';

interface IProps {
  onClose: () => void;
  maskClosable: boolean;
  closable: boolean;
  visible: boolean;
  children: React.ReactNode;
}

// TODO 모달이 열린 상태에서는 스크롤이 되지 않도록 하기
function Modal({ onClose, maskClosable, closable, visible, children }: IProps) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={style.modaloverlay}
        style={{ display: visible ? 'block' : 'none' }}
      />
      <div
        className={style.modalwrapper}
        onClick={maskClosable ? onMaskClick : null}
        style={{ display: visible ? 'block' : 'none' }}
        tabIndex={-1}
      >
        <div tabIndex={0} className={style.modalinner}>
          {closable && (
            <span className="modal-close" onClick={close}>
              닫기
            </span>
          )}
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
