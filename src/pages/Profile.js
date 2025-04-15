import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Grid,
} from '@mui/material';

const Profile = () => {
  const employee = {
    name: "John Doe",
    employeeId: "EMP12345",
    joiningDate: "2022-01-15",
    department: "Customer Support",
    designation: "Grievance Manager",
    email: "john.doe@example.com",
    contact: "+91 9876543210",
    location: "Bhubaneshwar, Odisha"
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ width: 400, p: 3, textAlign: 'center', boxShadow: 3 }}>
        <Avatar
          src="https://i.pravatar.cc/150?img=12"
          alt="Employee"
          sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
        />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {employee.name}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Employee ID: {employee.employeeId}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <CardContent>
          <Grid container spacing={1} textAlign="left">
            <Grid item xs={12}>
              <Typography variant="body2"><strong>Joining Date:</strong> {employee.joiningDate}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2"><strong>Department:</strong> {employee.department}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2"><strong>Designation:</strong> {employee.designation}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2"><strong>Email:</strong> {employee.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2"><strong>Contact:</strong> {employee.contact}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2"><strong>Location:</strong> {employee.location}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
