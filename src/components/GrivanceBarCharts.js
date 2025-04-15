import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box, Typography } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const GrievanceBarCharts = ({ total, resolved }) => {
  const data = {
    labels: ['Total Grievances', 'Resolved Grievances'],
    datasets: [
      {
        label: 'Count',
        data: [total, resolved],
        backgroundColor: ['#1976d2', '#2e7d32'], // Material blue and green
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <Box sx={{ maxWidth: 600, mt: 4, mx: 'auto' }}>
      <Typography variant="h6" fontWeight="bold" align="center" mb={2}>
        Grievance Resolution Summary
      </Typography>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default GrievanceBarCharts;
