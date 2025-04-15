import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import GrievancePieChart from '../components/GrivancePieChart';
import GrivanceBarCharts from '../components/GrivanceBarCharts';
import DashboardCard from '../components/DashboardCard';


const Dashboard = () => {
  const grievanceStats = [
    { title: 'NEW GRIEVANCES', count: 5 },
    { title: 'PENDING GRIEVANCES', count: 5 },
    { title: 'RESOLVED GRIEVANCES', count: 10 },
    { title: 'TOTAL GRIEVANCES', count: 15 },
  ];

  const chartStats = {
    new: 5,
    pending: 5,
    resolved: 10,
  };

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard Overview
      </Typography>
      
      
      {/* Cards Section */}
      <Grid container spacing={2}>
        {grievanceStats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <DashboardCard title={item.title} count={item.count} />
          </Grid>
        ))}
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: 400,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <GrievancePieChart stats={chartStats} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: 400,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <GrivanceBarCharts total={20} resolved={10} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
