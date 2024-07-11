import React from 'react';
import { Line } from 'react-chartjs-2';


const BloodPressureChart = () => {
  const data = {
    labels: ['Time1', 'Time2', 'Time3', 'Time4', 'Time5'], // Replace with actual time labels
    datasets: [{
      label: 'Blood Pressure',
      data: [120, 121, 122, 123, 120], // Replace with actual blood pressure data
      fill: false,
      borderColor: 'green',
      tension: 0.1
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        title: { 
          display: true,
          text: 'mm/Hg'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Blood Pressure Over Time'
      },
      subtitle: {
        display: true,
        text: 'Status: Normal' // Update based on the condition
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default BloodPressureChart;
