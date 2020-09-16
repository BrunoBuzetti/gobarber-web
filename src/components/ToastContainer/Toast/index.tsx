// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';

import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { Container } from './styles';
import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
  toastData: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ toastData, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toastData.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toastData.id]);

  return (
    <Container
      type={toastData.type}
      hasDescription={!!toastData.description}
      style={style}
    >
      {icons[toastData.type || 'info']}

      <div>
        <strong>{toastData.title}</strong>
        {toastData.description && <p>{toastData.description}</p>}
      </div>

      <button onClick={() => removeToast(toastData.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
