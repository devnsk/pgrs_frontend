import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box, Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const GrievancePieChart = ({ stats }) => {
  const data = {
    labels: ['New', 'Pending', 'Resolved'],
    datasets: [
      {
        label: 'Grievances',
        data: [stats.new, stats.pending, stats.resolved],
        backgroundColor: ['#42a5f5', '#ffca28', '#26c6da'], // Material UI-like colors
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <Box sx={{ maxWidth: 400, mt: 4, mx: 'auto' }}>
      <Typography variant="h6" fontWeight="bold" align="center" mb={2}>
        Grievance Distribution
      </Typography>
      <Pie data={data} options={options} />
    </Box>
  );
};

export default GrievancePieChart;
