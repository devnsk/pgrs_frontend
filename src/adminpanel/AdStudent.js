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

// Add sample students data with parent details
const studentsData = [
    // CUTM College Students
    {
      id: 1,
      name: 'Rahul Sharma',
      rollNumber: 'CUTM2023001',
      email: 'rahul.sharma@cutm.ac.in',
      phone: '+91 9876543210',
      department: 'Computer Science',
      college: 'CUTM',
      semester: '3rd',
      parentName: 'Mr. Rajesh Sharma',
      parentEmail: 'rajesh.sharma@gmail.com',
      parentPhone: '+91 9876543211',
      parentOccupation: 'Business',
      status: 'Active',
      avatar: 'RS'
    },
    {
      id: 2,
      name: 'Priya Patel',
      rollNumber: 'CUTM2023002',
      email: 'priya.patel@cutm.ac.in',
      phone: '+91 9876543212',
      department: 'Electronics',
      college: 'CUTM',
      semester: '4th',
      parentName: 'Mrs. Meena Patel',
      parentEmail: 'meena.patel@gmail.com',
      parentPhone: '+91 9876543213',
      parentOccupation: 'Teacher',
      status: 'Active',
      avatar: 'PP'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      rollNumber: 'CUTM2023003',
      email: 'amit.kumar@cutm.ac.in',
      phone: '+91 9876543214',
      department: 'Mechanical',
      college: 'CUTM',
      semester: '5th',
      parentName: 'Mr. Sunil Kumar',
      parentEmail: 'sunil.kumar@gmail.com',
      parentPhone: '+91 9876543215',
      parentOccupation: 'Engineer',
      status: 'Active',
      avatar: 'AK'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      rollNumber: 'CUTM2023004',
      email: 'neha.gupta@cutm.ac.in',
      phone: '+91 9876543216',
      department: 'Civil',
      college: 'CUTM',
      semester: '6th',
      parentName: 'Mr. Ramesh Gupta',
      parentEmail: 'ramesh.gupta@gmail.com',
      parentPhone: '+91 9876543217',
      parentOccupation: 'Architect',
      status: 'Active',
      avatar: 'NG'
    },
    {
      id: 5,
      name: 'Suresh Reddy',
      rollNumber: 'CUTM2023005',
      email: 'suresh.reddy@cutm.ac.in',
      phone: '+91 9876543218',
      department: 'Electrical',
      college: 'CUTM',
      semester: '7th',
      parentName: 'Mr. Venkat Reddy',
      parentEmail: 'venkat.reddy@gmail.com',
      parentPhone: '+91 9876543219',
      parentOccupation: 'Doctor',
      status: 'Active',
      avatar: 'SR'
    },
    {
      id: 6,
      name: 'Anjali Singh',
      rollNumber: 'CUTM2023006',
      email: 'anjali.singh@cutm.ac.in',
      phone: '+91 9876543220',
      department: 'Computer Science',
      college: 'CUTM',
      semester: '8th',
      parentName: 'Mr. Vikram Singh',
      parentEmail: 'vikram.singh@gmail.com',
      parentPhone: '+91 9876543221',
      parentOccupation: 'Business',
      status: 'Active',
      avatar: 'AS'
    },
    {
      id: 7,
      name: 'Ravi Verma',
      rollNumber: 'CUTM2023007',
      email: 'ravi.verma@cutm.ac.in',
      phone: '+91 9876543222',
      department: 'Electronics',
      college: 'CUTM',
      semester: '3rd',
      parentName: 'Mr. Sanjay Verma',
      parentEmail: 'sanjay.verma@gmail.com',
      parentPhone: '+91 9876543223',
      parentOccupation: 'Teacher',
      status: 'Active',
      avatar: 'RV'
    },
    // Silicon College Students
    {
      id: 8,
      name: 'Karan Malhotra',
      rollNumber: 'SIL2023001',
      email: 'karan.malhotra@silicon.ac.in',
      phone: '+91 9876543224',
      department: 'Computer Science',
      college: 'Silicon College',
      semester: '4th',
      parentName: 'Mr. Raj Malhotra',
      parentEmail: 'raj.malhotra@gmail.com',
      parentPhone: '+91 9876543225',
      parentOccupation: 'Business',
      status: 'Active',
      avatar: 'KM'
    },
    {
      id: 9,
      name: 'Divya Sharma',
      rollNumber: 'SIL2023002',
      email: 'divya.sharma@silicon.ac.in',
      phone: '+91 9876543226',
      department: 'Electronics',
      college: 'Silicon College',
      semester: '5th',
      parentName: 'Mr. Rakesh Sharma',
      parentEmail: 'rakesh.sharma@gmail.com',
      parentPhone: '+91 9876543227',
      parentOccupation: 'Engineer',
      status: 'Active',
      avatar: 'DS'
    },
    {
      id: 10,
      name: 'Vikram Singh',
      rollNumber: 'SIL2023003',
      email: 'vikram.singh@silicon.ac.in',
      phone: '+91 9876543228',
      department: 'Mechanical',
      college: 'Silicon College',
      semester: '6th',
      parentName: 'Mr. Harish Singh',
      parentEmail: 'harish.singh@gmail.com',
      parentPhone: '+91 9876543229',
      parentOccupation: 'Doctor',
      status: 'Active',
      avatar: 'VS'
    },
    {
      id: 11,
      name: 'Pooja Patel',
      rollNumber: 'SIL2023004',
      email: 'pooja.patel@silicon.ac.in',
      phone: '+91 9876543230',
      department: 'Civil',
      college: 'Silicon College',
      semester: '7th',
      parentName: 'Mr. Mahesh Patel',
      parentEmail: 'mahesh.patel@gmail.com',
      parentPhone: '+91 9876543231',
      parentOccupation: 'Architect',
      status: 'Active',
      avatar: 'PP'
    },
    {
      id: 12,
      name: 'Rohan Kumar',
      rollNumber: 'SIL2023005',
      email: 'rohan.kumar@silicon.ac.in',
      phone: '+91 9876543232',
      department: 'Electrical',
      college: 'Silicon College',
      semester: '8th',
      parentName: 'Mr. Arun Kumar',
      parentEmail: 'arun.kumar@gmail.com',
      parentPhone: '+91 9876543233',
      parentOccupation: 'Teacher',
      status: 'Active',
      avatar: 'RK'
    },
    {
      id: 13,
      name: 'Meera Gupta',
      rollNumber: 'SIL2023006',
      email: 'meera.gupta@silicon.ac.in',
      phone: '+91 9876543234',
      department: 'Computer Science',
      college: 'Silicon College',
      semester: '3rd',
      parentName: 'Mr. Ashok Gupta',
      parentEmail: 'ashok.gupta@gmail.com',
      parentPhone: '+91 9876543235',
      parentOccupation: 'Business',
      status: 'Active',
      avatar: 'MG'
    },
    {
      id: 14,
      name: 'Arjun Reddy',
      rollNumber: 'SIL2023007',
      email: 'arjun.reddy@silicon.ac.in',
      phone: '+91 9876543236',
      department: 'Electronics',
      college: 'Silicon College',
      semester: '4th',
      parentName: 'Mr. Suresh Reddy',
      parentEmail: 'suresh.reddy@gmail.com',
      parentPhone: '+91 9876543237',
      parentOccupation: 'Engineer',
      status: 'Active',
      avatar: 'AR'
    },
    {
      id: 15,
      name: 'Ananya Singh',
      rollNumber: 'SIL2023008',
      email: 'ananya.singh@silicon.ac.in',
      phone: '+91 9876543238',
      department: 'Mechanical',
      college: 'Silicon College',
      semester: '5th',
      parentName: 'Mr. Rajesh Singh',
      parentEmail: 'rajesh.singh@gmail.com',
      parentPhone: '+91 9876543239',
      parentOccupation: 'Doctor',
      status: 'Active',
      avatar: 'AS'
    }
  ];
 const StudentManagement = () => {
    const [selectedCollege, setSelectedCollege] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const filteredStudents = studentsData.filter(student => {
      const matchesCollege = selectedCollege === 'all' || student.college === selectedCollege;
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.department.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCollege && matchesSearch;
    });

    return (
      <>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Student Management
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by name, roll number, or department..."
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
                <TableCell>Student</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>College</TableCell>
                <TableCell>Parent Details</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id} hover>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: '#4285F4' }}>{student.avatar}</Avatar>
                      <Box>
                        <Typography variant="subtitle2">{student.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {student.rollNumber}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <EmailIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2">{student.email}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PhoneIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2">{student.phone}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{student.department}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Semester: {student.semester}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{student.college}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                        {student.parentName}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <EmailIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2">{student.parentEmail}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PhoneIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2">{student.parentPhone}</Typography>
                      </Box>
                      <Typography variant="body2" color="textSecondary">
                        Occupation: {student.parentOccupation}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={student.status}
                      size="small"
                      sx={{
                        backgroundColor: student.status === 'Active' ? '#e8f5e9' : '#ffebee',
                        color: student.status === 'Active' ? '#2e7d32' : '#c62828',
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
  export default StudentManagement;