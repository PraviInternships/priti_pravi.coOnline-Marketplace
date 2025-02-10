import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const Notifications = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;