import React, { createContext, useState, useEffect } from 'react';
import socket from '../services/websocketService';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      setNotifications((prev) => [...prev, notification]);
    };
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};