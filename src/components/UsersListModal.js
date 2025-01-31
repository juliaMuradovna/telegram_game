import React from 'react';
import Modal from 'react-modal';
import userImg from '../assets/icons/user.svg';

function UsersListModal(props) {
  const { onClose, onFight } = props;
  const [active, setActive] = React.useState(1);
  return (
    <Modal onRequestClose={onClose} isOpen overlayClassName="tg_modal_overlay" className="tg_modal users_modal">
      <p onclick={onClose}>X</p>
      <h2>Выбирай кого бить </h2>
      <ul>
        <li>
          <div className={active === 1 ? 'active' : ''} onClick={() => setActive(1)}>
            <img src={userImg} alt="" />
            <span>пользователь 1</span>
          </div>
        </li>
        <li>
          <div className={active === 2 ? 'active' : ''} onClick={() => setActive(2)}>
            <img src={userImg} alt="" />
            <span>пользователь 2</span>
          </div>
        </li>
        <li>
          <div className={active === 3 ? 'active' : ''} onClick={() => setActive(3)}>
            <img src={userImg} alt="" />
            <span>пользователь 3</span>
          </div>
        </li>
        <li>
          <div className={active === 4 ? 'active' : ''} onClick={() => setActive(4)}>
            <img src={userImg} alt="" />
            <span>пользователь 4</span>
          </div>
        </li>
      </ul>
      <button onClick={() => {
        onClose();
        onFight()
      }}>
        Бой
      </button>
    </Modal>
  );
}

export default UsersListModal;
