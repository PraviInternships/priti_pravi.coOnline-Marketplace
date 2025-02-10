import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState({ bookings: [], users: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/analytics/data');
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <DashboardContext.Provider value={{ data }}>
      {children}
    </DashboardContext.Provider>
  );
};