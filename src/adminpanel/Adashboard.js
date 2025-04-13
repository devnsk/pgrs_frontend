import React  from 'react';
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';
const departmentData = [
    { name: 'Computer Science', students: 150, employees: 25 },
    { name: 'Electronics', students: 120, employees: 20 },
    { name: 'Mechanical', students: 100, employees: 18 },
    { name: 'Civil', students: 90, employees: 15 },
    { name: 'Electrical', students: 80, employees: 12 },
  ];
  const studentStatusData = [
    { name: 'Active', value: 400, color: '#4CAF50' },
    { name: 'Inactive', value: 30, color: '#f44336' },
    { name: 'On Leave', value: 20, color: '#FFC107' },
  ];
  // Add sample complaints data
const complaintsData = [
    {
      id: 1,
      complaintNo: 'CMP2023001',
      studentName: 'Rahul Sharma',
      mobileNo: '+91 9876543210',
      department: 'Computer Science',
      college: 'CUTM',
      complaintType: 'Academic',
      description: 'Issue with course material access',
      status: 'Pending',
      assignedTo: 'Dr. Rajesh Kumar',
      date: '2023-01-15'
    },
    {
      id: 2,
      complaintNo: 'CMP2023002',
      studentName: 'Priya Patel',
      mobileNo: '+91 9876543211',
      department: 'Electronics',
      college: 'CUTM',
      complaintType: 'Hostel',
      description: 'Room maintenance issue',
      status: 'In Progress',
      assignedTo: 'Mrs. Meena Gupta',
      date: '2023-01-16'
    },
    {
      id: 3,
      complaintNo: 'CMP2023003',
      studentName: 'Amit Kumar',
      mobileNo: '+91 9876543212',
      department: 'Mechanical',
      college: 'CUTM',
      complaintType: 'Transport',
      description: 'Bus route timing issue',
      status: 'Resolved',
      assignedTo: 'Mr. Ramesh Sharma',
      date: '2023-01-17'
    },
    {
      id: 4,
      complaintNo: 'CMP2023004',
      studentName: 'Neha Gupta',
      mobileNo: '+91 9876543213',
      department: 'Civil',
      college: 'CUTM',
      complaintType: 'Security',
      description: 'Campus security concern',
      status: 'Pending',
      assignedTo: 'Mr. Vikram Singh',
      date: '2023-01-18'
    },
    {
      id: 5,
      complaintNo: 'CMP2023005',
      studentName: 'Karan Malhotra',
      mobileNo: '+91 9876543214',
      department: 'Computer Science',
      college: 'Silicon',
      complaintType: 'Academic',
      description: 'Exam schedule conflict',
      status: 'In Progress',
      assignedTo: 'Prof. Priya Singh',
      date: '2023-01-19'
    },
    {
      id: 6,
      complaintNo: 'CMP2023006',
      studentName: 'Divya Sharma',
      mobileNo: '+91 9876543215',
      department: 'Electronics',
      college: 'Silicon',
      complaintType: 'Hostel',
      description: 'Mess food quality issue',
      status: 'Pending',
      assignedTo: 'Mrs. Anita Patel',
      date: '2023-01-20'
    },
    {
      id: 7,
      complaintNo: 'CMP2023007',
      studentName: 'Vikram Singh',
      mobileNo: '+91 9876543216',
      department: 'Mechanical',
      college: 'Silicon',
      complaintType: 'Transport',
      description: 'Bus overcrowding issue',
      status: 'Resolved',
      assignedTo: 'Mr. Sunil Kumar',
      date: '2023-01-21'
    },
    {
      id: 8,
      complaintNo: 'CMP2023008',
      studentName: 'Pooja Patel',
      mobileNo: '+91 9876543217',
      department: 'Civil',
      college: 'Silicon',
      complaintType: 'Security',
      description: 'Campus access issue',
      status: 'In Progress',
      assignedTo: 'Mr. Anil Kumar',
      date: '2023-01-22'
    },
    {
      id: 9,
      complaintNo: 'CMP2023009',
      studentName: 'Rohan Kumar',
      mobileNo: '+91 9876543218',
      department: 'Computer Science',
      college: 'CUTM',
      complaintType: 'Academic',
      description: 'Library book availability',
      status: 'Pending',
      assignedTo: 'Dr. Amit Patel',
      date: '2023-01-23'
    },
    {
      id: 10,
      complaintNo: 'CMP2023010',
      studentName: 'Meera Gupta',
      mobileNo: '+91 9876543219',
      department: 'Electronics',
      college: 'Silicon',
      complaintType: 'Hostel',
      description: 'Room allocation issue',
      status: 'Resolved',
      assignedTo: 'Mr. Sanjay Verma',
      date: '2023-01-24'
    }
  ];
   const DashboardManagement = () => (
      <>
        <Typography variant="h5" gutterBottom>
          Dashboard Overview
        </Typography>
  
        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ bgcolor: '#fff', boxShadow: 2 }}>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  TOTAL STUDENTS
                </Typography>
                <Typography variant="h4">450</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ bgcolor: '#fff', boxShadow: 2 }}>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  TOTAL EMPLOYEES
                </Typography>
                <Typography variant="h4">90</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ bgcolor: '#fff', boxShadow: 2 }}>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  TOTAL DEPARTMENTS
                </Typography>
                <Typography variant="h4">5</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ bgcolor: '#fff', boxShadow: 2 }}>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  PENDING COMPLAINTS
                </Typography>
                <Typography variant="h4">8</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
  
        {/* Charts */}
        <Grid container spacing={3}>
          {/* Department Distribution */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Department Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={departmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" fill="#4285F4" name="Students" />
                  <Bar dataKey="employees" fill="#34A853" name="Employees" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
  
          {/* Student Status */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Student Status Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={studentStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {studentStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
  
          {/* Complaints Trend */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Complaints Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={complaintsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="resolved" stroke="#4CAF50" name="Resolved" />
                  <Line type="monotone" dataKey="pending" stroke="#f44336" name="Pending" />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </>
    );

    export default DashboardManagement;
    