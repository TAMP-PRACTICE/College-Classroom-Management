import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const DistributionChart = () => {
  const data = {
    labels: ['BCA 5A', 'BCA 5B', 'BCA 3A', 'BCA 3B', 'Others'],
    datasets: [
      {
        data:['22','19','18','8','33'], // Percentages from the image
        backgroundColor: [
          '#1e3a8a', // Dark Blue
          '#3b82f6', // Light Blue
          '#06b6d4', // Cyan
          '#f97316', // Orange
          '#e2e8f0', // Gray (Others)
        ],
        borderWidth: 0, // Removes white gaps between sections
        cutout: '75%', // Thins out the ring to match the picture
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right', // Moves the labels to the right side
        labels: {
          usePointStyle: true, // Changes square legend boxes to circles
          pointStyle: 'circle',
          padding: 15,
        },
      },
    },
  };

  // Custom Plugin to render the "Total 216" text inside the center of the ring
  const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.restore();
      
      // Calculate center coordinates safely relative to the chart area
      const chartArea = chart.chartArea;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      // Draw "Total"
      ctx.font = '14px sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#666';
      ctx.fillText('Total', centerX, centerY - 12);

      // Draw "216"
      ctx.font = 'bold 28px sans-serif';
      ctx.fillStyle = '#111';
      ctx.fillText('216', centerX, centerY + 14);
      
      ctx.save();
    },
  };

  return (
    <div style={{ width: '300px', padding: '10px', background: '#fff', borderRadius: '12px' }}>
      <h2 style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#333' }}>Class Wise Distribution</h2>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};
export default DistributionChart;