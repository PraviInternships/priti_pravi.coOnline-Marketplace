import { useEffect } from 'react';
import socket from '../services/websocketService';

const useWebSocket = (onMessage) => {
  useEffect(() => {
    socket.onmessage = (event) => {
      onMessage(event.data);
    };

    return () => {
      socket.onmessage = null;
    };
  }, [onMessage]);
};

export default useWebSocket;