import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const EnrollmentChart = () => {
  const data = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'], // X-Axis months
    datasets: [
      {
        label: 'New Student Enrollments',
        data:['10','30','60','90','120'], // Values based on the graph curve
        borderColor: '#3b82f6', // Bright blue line color
        backgroundColor: 'rgba(59, 130, 246, 0.2)', // Light blue fill under the line
        fill: true, // Enables the area fill
        tension: 0.4, // Gives the line a smooth curve
        pointBackgroundColor: '#3b82f6',
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide the dataset legend at the top
    },
    scales: {
      y: {
        min: 0,
        max: 120,
        ticks: { stepSize: 30 }, // Sets intervals to 0, 30, 60, 90, 120
      },
      x: {
        grid: { display: false }, // Hides vertical grid lines to match design
      },
    },
  };

  return (
    <div style={{ width: '500px', padding: '20px', background: '#fff', borderRadius: '12px' }}>
      <h2 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#333' }}>Enrollment Trend</h2>
      <p className='text-muted '>New Students Enrollment over last six months</p>
      <Line data={data} options={options} />
    </div>
  );
};
export default EnrollmentChart;