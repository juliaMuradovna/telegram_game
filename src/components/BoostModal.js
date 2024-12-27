import React from 'react';
import Modal from 'react-modal';

function BoostModal(props) {
  const { onClose } = props;

  return (
    <Modal isOpen onRequestClose={onClose} overlayClassName="boost_modal_overlay" className="boost_modal">
      x
    </Modal>
  );
}

export default BoostModal;
