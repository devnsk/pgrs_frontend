import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Grid,
  Paper,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
// Add department data with employees
const departmentsData = [
    {
      id: 1,
      name: 'Academic',
      description: 'Handles all academic activities and curriculum',
      employees: [
        {
          id: 1,
          name: 'Dr. Rajesh Kumar',
          email: 'rajesh.kumar@cutm.ac.in',
          phone: '+91 9876543201',
          designation: 'Head of Department',
          status: 'Active',
          avatar: 'RK'
        },
        {
          id: 2,
          name: 'Prof. Priya Singh',
          email: 'priya.singh@cutm.ac.in',
          phone: '+91 9876543202',
          designation: 'Professor',
          status: 'Active',
          avatar: 'PS'
        },
        {
          id: 3,
          name: 'Dr. Amit Patel',
          email: 'amit.patel@cutm.ac.in',
          phone: '+91 9876543203',
          designation: 'Associate Professor',
          status: 'Active',
          avatar: 'AP'
        }
      ]
    },
    {
      id: 2,
      name: 'Transport',
      description: 'Manages college transportation and vehicle fleet',
      employees: [
        {
          id: 4,
          name: 'Mr. Ramesh Sharma',
          email: 'ramesh.sharma@cutm.ac.in',
          phone: '+91 9876543204',
          designation: 'Transport Manager',
          status: 'Active',
          avatar: 'RS'
        },
        {
          id: 5,
          name: 'Mr. Sunil Kumar',
          email: 'sunil.kumar@cutm.ac.in',
          phone: '+91 9876543205',
          designation: 'Driver Supervisor',
          status: 'Active',
          avatar: 'SK'
        }
      ]
    },
    {
      id: 3,
      name: 'Security',
      description: 'Ensures campus safety and security',
      employees: [
        {
          id: 6,
          name: 'Mr. Vikram Singh',
          email: 'vikram.singh@cutm.ac.in',
          phone: '+91 9876543206',
          designation: 'Security Head',
          status: 'Active',
          avatar: 'VS'
        },
        {
          id: 7,
          name: 'Mr. Anil Kumar',
          email: 'anil.kumar@cutm.ac.in',
          phone: '+91 9876543207',
          designation: 'Security Supervisor',
          status: 'Active',
          avatar: 'AK'
        },
        {
          id: 8,
          name: 'Mr. Deepak Sharma',
          email: 'deepak.sharma@cutm.ac.in',
          phone: '+91 9876543208',
          designation: 'Security Guard',
          status: 'Active',
          avatar: 'DS'
        }
      ]
    },
    {
      id: 4,
      name: 'Hostel',
      description: 'Manages student accommodation and facilities',
      employees: [
        {
          id: 9,
          name: 'Mrs. Meena Gupta',
          email: 'meena.gupta@cutm.ac.in',
          phone: '+91 9876543209',
          designation: 'Hostel Warden',
          status: 'Active',
          avatar: 'MG'
        },
        {
          id: 10,
          name: 'Mr. Sanjay Verma',
          email: 'sanjay.verma@cutm.ac.in',
          phone: '+91 9876543210',
          designation: 'Assistant Warden',
          status: 'Active',
          avatar: 'SV'
        },
        {
          id: 11,
          name: 'Mrs. Anita Patel',
          email: 'anita.patel@cutm.ac.in',
          phone: '+91 9876543211',
          designation: 'Housekeeping Supervisor',
          status: 'Active',
          avatar: 'AP'
        }
      ]
    }
  ];
 const DepartmentMangement = () => {
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    if (selectedDepartment) {
      const department = departmentsData.find(d => d.id === selectedDepartment);
      return (
        <>
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <IconButton onClick={() => setSelectedDepartment(null)} sx={{ mr: 2 }}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h5">
                {department.name} Department
              </Typography>
            </Box>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
              {department.description}
            </Typography>
          </Box>

          <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell>Employee</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Designation</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {department.employees.map((employee) => (
                  <TableRow key={employee.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2, bgcolor: '#4285F4' }}>{employee.avatar}</Avatar>
                        <Typography variant="subtitle2">{employee.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                          <EmailIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2">{employee.email}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <PhoneIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2">{employee.phone}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{employee.designation}</Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={employee.status}
                        size="small"
                        sx={{
                          backgroundColor: employee.status === 'Active' ? '#e8f5e9' : '#ffebee',
                          color: employee.status === 'Active' ? '#2e7d32' : '#c62828',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      );
    }

    return (
      <>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Departments
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {departmentsData.map((department) => (
            <Grid item xs={12} sm={6} md={3} key={department.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
                onClick={() => setSelectedDepartment(department.id)}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ 
                      mr: 2, 
                      bgcolor: '#4285F4',
                      width: 48,
                      height: 48
                    }}>
                      {department.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="h6">{department.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {department.employees.length} Employees
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {department.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  };
  export default DepartmentMangement;