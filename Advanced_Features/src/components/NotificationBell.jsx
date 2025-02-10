import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const NotificationBell = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div>
      <button>
        Notifications ({notifications.length})
      </button>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationBell;