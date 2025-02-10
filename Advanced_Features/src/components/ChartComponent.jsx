import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = ({ data, title }) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: title,
        data: data.map((item) => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default ChartComponent;