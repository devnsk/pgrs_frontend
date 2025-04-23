import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Grid,
  Paper,
  Card,
  CardContent,
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
  InputLabel,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Mail as ComplainIcon,
  Assignment as StatusIcon,
  School as StudentsIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Close as CloseIcon,
  PersonAdd as PersonAddIcon,
  CheckCircle as CheckCircleIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// Add sample data for students with parent details
const assignedStudents = [
    {
      id: 1,
      studentName: 'Rahul Sharma',
      rollNo: 'CS2023001',
      email: 'rahul.sharma@cutm.ac.in',
      mobileNo: '+91 9876543210',
      department: 'Computer Science',
      college: 'CUTM',
      parentName: 'Rajesh Sharma',
      parentEmail: 'rajesh.sharma@gmail.com',
      parentPhone: '+91 9876543211',
      parentOccupation: 'Business',
      status: 'Active'
    },
    {
      id: 2,
      studentName: 'Priya Patel',
      rollNo: 'EC2023002',
      email: 'priya.patel@cutm.ac.in',
      mobileNo: '+91 9876543212',
      department: 'Electronics',
      college: 'CUTM',
      parentName: 'Manoj Patel',
      parentEmail: 'manoj.patel@gmail.com',
      parentPhone: '+91 9876543213',
      parentOccupation: 'Teacher',
      status: 'Active'
    },
    {
      id: 3,
      studentName: 'Amit Kumar',
      rollNo: 'ME2023003',
      email: 'amit.kumar@cutm.ac.in',
      mobileNo: '+91 9876543214',
      department: 'Mechanical',
      college: 'CUTM',
      parentName: 'Ramesh Kumar',
      parentEmail: 'ramesh.kumar@gmail.com',
      parentPhone: '+91 9876543215',
      parentOccupation: 'Engineer',
      status: 'Active'
    },
    {
      id: 4,
      studentName: 'Sneha Gupta',
      rollNo: 'CS2023004',
      email: 'sneha.gupta@cutm.ac.in',
      mobileNo: '+91 9876543216',
      department: 'Computer Science',
      college: 'CUTM',
      parentName: 'Vikram Gupta',
      parentEmail: 'vikram.gupta@gmail.com',
      parentPhone: '+91 9876543217',
      parentOccupation: 'Doctor',
      status: 'Active'
    },
    {
      id: 5,
      studentName: 'Rohan Singh',
      rollNo: 'EC2023005',
      email: 'rohan.singh@cutm.ac.in',
      mobileNo: '+91 9876543218',
      department: 'Electronics',
      college: 'CUTM',
      parentName: 'Amit Singh',
      parentEmail: 'amit.singh@gmail.com',
      parentPhone: '+91 9876543219',
      parentOccupation: 'Business',
      status: 'Active'
    },
    {
      id: 6,
      studentName: 'Neha Verma',
      rollNo: 'ME2023006',
      email: 'neha.verma@cutm.ac.in',
      mobileNo: '+91 9876543220',
      department: 'Mechanical',
      college: 'CUTM',
      parentName: 'Raj Verma',
      parentEmail: 'raj.verma@gmail.com',
      parentPhone: '+91 9876543221',
      parentOccupation: 'Engineer',
      status: 'Active'
    },
    {
      id: 7,
      studentName: 'Karan Malhotra',
      rollNo: 'CS2023007',
      email: 'karan.malhotra@cutm.ac.in',
      mobileNo: '+91 9876543222',
      department: 'Computer Science',
      college: 'CUTM',
      parentName: 'Ravi Malhotra',
      parentEmail: 'ravi.malhotra@gmail.com',
      parentPhone: '+91 9876543223',
      parentOccupation: 'Business',
      status: 'Active'
    },
    {
      id: 8,
      studentName: 'Anjali Reddy',
      rollNo: 'EC2023008',
      email: 'anjali.reddy@cutm.ac.in',
      mobileNo: '+91 9876543224',
      department: 'Electronics',
      college: 'CUTM',
      parentName: 'Suresh Reddy',
      parentEmail: 'suresh.reddy@gmail.com',
      parentPhone: '+91 9876543225',
      parentOccupation: 'Teacher',
      status: 'Active'
    },
    {
      id: 9,
      studentName: 'Vikram Joshi',
      rollNo: 'ME2023009',
      email: 'vikram.joshi@cutm.ac.in',
      mobileNo: '+91 9876543226',
      department: 'Mechanical',
      college: 'CUTM',
      parentName: 'Prakash Joshi',
      parentEmail: 'prakash.joshi@gmail.com',
      parentPhone: '+91 9876543227',
      parentOccupation: 'Engineer',
      status: 'Active'
    },
    {
      id: 10,
      studentName: 'Divya Kapoor',
      rollNo: 'CS2023010',
      email: 'divya.kapoor@cutm.ac.in',
      mobileNo: '+91 9876543228',
      department: 'Computer Science',
      college: 'CUTM',
      parentName: 'Rahul Kapoor',
      parentEmail: 'rahul.kapoor@gmail.com',
      parentPhone: '+91 9876543229',
      parentOccupation: 'Doctor',
      status: 'Active'
    }
  ];

const EmpStudent = () => {
    const [expandedStudent, setExpandedStudent] = useState(null);
    const handleStudentClick = (studentId) => {
        setExpandedStudent(expandedStudent === studentId ? null : studentId);
      };
   const renderStudents = () => {
      return (
        <>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Assigned Students
            </Typography>
          </Box>
  
          <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell>Student Details</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>College</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assignedStudents.map((student) => (
                  <React.Fragment key={student.id}>
                    <TableRow 
                      hover 
                      onClick={() => handleStudentClick(student.id)}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell>
                        <Box>
                          <Typography variant="subtitle2">{student.studentName}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            Roll No: {student.rollNo}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="body2">{student.email}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            {student.mobileNo}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{student.department}</TableCell>
                      <TableCell>{student.college}</TableCell>
                      <TableCell>
                        <Chip
                          label={student.status}
                          size="small"
                          sx={{
                            backgroundColor: '#e8f5e9',
                            color: '#2e7d32',
                          }}
                        />
                      </TableCell>
                    </TableRow>
                    {expandedStudent === student.id && (
                      <TableRow>
                        <TableCell colSpan={5} sx={{ backgroundColor: '#fafafa' }}>
                          <Box sx={{ p: 2 }}>
                            <Typography variant="subtitle1" gutterBottom>
                              Parent Details
                            </Typography>
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle2" color="textSecondary">
                                  Parent Name
                                </Typography>
                                <Typography variant="body1">{student.parentName}</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle2" color="textSecondary">
                                  Email
                                </Typography>
                                <Typography variant="body1">{student.parentEmail}</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle2" color="textSecondary">
                                  Phone
                                </Typography>
                                <Typography variant="body1">{student.parentPhone}</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle2" color="textSecondary">
                                  Occupation
                                </Typography>
                                <Typography variant="body1">{student.parentOccupation}</Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      );
    };
    return renderStudents();
}

export default EmpStudent