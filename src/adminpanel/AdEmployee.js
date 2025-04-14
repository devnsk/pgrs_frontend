import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  MenuItem,
  Grid,
  Paper,
  TextField,
  FormControl,
  Select,
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
} from '@mui/icons-material';
const employeesData = [
    // CUTM College Employees
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@cutm.ac.in',
      phone: '+91 9876543201',
      department: 'Computer Science',
      college: 'CUTM',
      designation: 'Professor',
      joiningDate: '2020-01-15',
      status: 'Active',
      avatar: 'RK'
    },
    {
      id: 2,
      name: 'Prof. Priya Singh',
      email: 'priya.singh@cutm.ac.in',
      phone: '+91 9876543202',
      department: 'Electronics',
      college: 'CUTM',
      designation: 'Associate Professor',
      joiningDate: '2020-03-20',
      status: 'Active',
      avatar: 'PS'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      email: 'amit.patel@cutm.ac.in',
      phone: '+91 9876543203',
      department: 'Mechanical',
      college: 'CUTM',
      designation: 'Professor',
      joiningDate: '2019-08-10',
      status: 'Active',
      avatar: 'AP'
    },
    {
      id: 4,
      name: 'Mrs. Sneha Reddy',
      email: 'sneha.reddy@cutm.ac.in',
      phone: '+91 9876543204',
      department: 'Civil',
      college: 'CUTM',
      designation: 'Assistant Professor',
      joiningDate: '2021-02-15',
      status: 'Active',
      avatar: 'SR'
    },
    {
      id: 5,
      name: 'Dr. Manoj Verma',
      email: 'manoj.verma@cutm.ac.in',
      phone: '+91 9876543205',
      department: 'Mathematics',
      college: 'CUTM',
      designation: 'Professor',
      joiningDate: '2018-07-01',
      status: 'Active',
      avatar: 'MV'
    },
    // Silicon College Employees
    {
      id: 6,
      name: 'Prof. Anita Sharma',
      email: 'anita.sharma@silicon.ac.in',
      phone: '+91 9876543206',
      department: 'Computer Science',
      college: 'Silicon College',
      designation: 'Associate Professor',
      joiningDate: '2019-11-20',
      status: 'Active',
      avatar: 'AS'
    },
    {
      id: 7,
      name: 'Dr. Suresh Kumar',
      email: 'suresh.kumar@silicon.ac.in',
      phone: '+91 9876543207',
      department: 'Electronics',
      college: 'Silicon College',
      designation: 'Professor',
      joiningDate: '2020-06-15',
      status: 'Inactive',
      avatar: 'SK'
    },
    {
      id: 8,
      name: 'Mrs. Deepa Mishra',
      email: 'deepa.mishra@silicon.ac.in',
      phone: '+91 9876543208',
      department: 'Physics',
      college: 'Silicon College',
      designation: 'Assistant Professor',
      joiningDate: '2021-01-10',
      status: 'Active',
      avatar: 'DM'
    },
    {
      id: 9,
      name: 'Prof. Rahul Gupta',
      email: 'rahul.gupta@silicon.ac.in',
      phone: '+91 9876543209',
      department: 'Mathematics',
      college: 'Silicon College',
      designation: 'Associate Professor',
      joiningDate: '2019-04-01',
      status: 'Active',
      avatar: 'RG'
    },
    {
      id: 10,
      name: 'Dr. Meera Patel',
      email: 'meera.patel@silicon.ac.in',
      phone: '+91 9876543210',
      department: 'Chemistry',
      college: 'Silicon College',
      designation: 'Professor',
      joiningDate: '2018-09-15',
      status: 'Active',
      avatar: 'MP'
    }
  ];
  const EmployeeManagement = () => {
     const [selectedCollege, setSelectedCollege] = useState('all');
     const [searchTerm, setSearchTerm] = useState('');
   
      
    const filteredEmployees = employeesData.filter(employee => {
      const matchesCollege = selectedCollege === 'all' || employee.college === selectedCollege;
      const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          employee.email.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCollege && matchesSearch;
    });

    return (
      <>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Employee Management
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by name, department, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
                sx={{ bgcolor: 'white' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small">
                <Select
                  value={selectedCollege}
                  onChange={(e) => setSelectedCollege(e.target.value)}
                  sx={{ bgcolor: 'white' }}
                >
                  <MenuItem value="all">All Colleges</MenuItem>
                  <MenuItem value="CUTM">CUTM College</MenuItem>
                  <MenuItem value="Silicon College">Silicon College</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Employee</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>College</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Joining Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee) => (
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
                    <Typography variant="body2">{employee.department}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{employee.college}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{employee.designation}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(employee.joiningDate).toLocaleDateString('en-GB')}
                    </Typography>
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
  };
export default EmployeeManagement;