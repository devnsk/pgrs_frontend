import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const DashboardCard = ({ title, count }) => {
  return (
    <Card
      elevation={3}
      sx={{
        minHeight: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
