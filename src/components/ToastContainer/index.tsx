// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransictions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'rotateZ(180deg)' },
      enter: { right: '0%', opacity: 1, transform: 'rotateZ(0deg)' },
      leave: { right: '-120%', opacity: 0, transform: 'rotateZ(180deg)' },
    },
  );

  return (
    <Container>
      {messagesWithTransictions.map(({ item, key, props }) => (
        <Toast toastData={item} key={key} style={props} />
      ))}
      {/* <Toast hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Erro!</strong>
          <p>Dados de usuario não encontrado!</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Erro!</strong>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Erro!</strong>
          <p>Dados de usuario não encontrado!</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast> */}
    </Container>
  );
};

export default ToastContainer;
