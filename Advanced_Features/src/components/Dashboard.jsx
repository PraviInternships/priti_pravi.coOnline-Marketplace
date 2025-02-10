import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import ChartComponent from './ChartComponent';

const Dashboard = () => {
  const { data } = useContext(DashboardContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <ChartComponent data={data.bookings} title="Bookings" />
      <ChartComponent data={data.users} title="Users" />
    </div>
  );
};

export default Dashboard;