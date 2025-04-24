import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper,
  Card,
  CardContent,
  Button,
  Container,
} from '@mui/material';
import {
  Assignment as StatusIcon,
  School as SchoolIcon,
  Assessment as AssessmentIcon,
  Event as EventIcon,
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
// Chart data and colors
const attendanceData = [
    { month: 'Jan', attendance: 85 },
    { month: 'Feb', attendance: 90 },
    { month: 'Mar', attendance: 88 },
    { month: 'Apr', attendance: 92 },
    { month: 'May', attendance: 87 },
    { month: 'Jun', attendance: 95 },
  ];
  
  const subjectPerformance = [
    { subject: 'Mathematics', marks: 85 },
    { subject: 'Physics', marks: 78 },
    { subject: 'Chemistry', marks: 82 },
    { subject: 'Computer Science', marks: 90 },
    { subject: 'English', marks: 88 },
  ];
  
  const departmentDistribution = [
    { name: 'Computer Science', value: 30 },
    { name: 'Electronics', value: 25 },
    { name: 'Mechanical', value: 20 },
    { name: 'Civil', value: 15 },
    { name: 'Electrical', value: 10 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
  
  const Stdashboard = () => {
    const [auth, setAuth] = useState(null);
    return (
        <>
        <Container maxWidth="xl">
          {/* Welcome Section with Parallax Effect */}
          <Box sx={{ 
            background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
            borderRadius: 4,
            p: 6,
            mb: 6,
            color: 'white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
              opacity: 0.1,
            }
          }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h2" gutterBottom sx={{ 
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  animation: 'fadeIn 1s ease-in'
                }}>
                  Welcome, {auth?.name || 'Student'}!
                </Typography>
                <Typography variant="h5" sx={{ 
                  opacity: 0.9,
                  mb: 2,
                  animation: 'fadeIn 1s ease-in 0.2s'
                }}>
                  Track your academic progress and manage your activities
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'white',
                    color: '#4285F4',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.9)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                    animation: 'fadeIn 1s ease-in 0.4s'
                  }}
                >
                  View Profile
                </Button>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  sx={{
                    width: 150,
                    height: 150,
                    border: '4px solid white',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    animation: 'scaleIn 0.5s ease-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease',
                    }
                  }}
                >
                  {auth?.name?.[0]?.toUpperCase() || 'S'}
                </Avatar>
              </Grid>
            </Grid>
          </Box>
    
          {/* Quick Stats with Hover Effects */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ 
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                color: 'white',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 48, mr: 2, filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))' }} />
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>89.5%</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'medium' }}>Attendance</Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9, mt: 1 }}>
                    Current Semester
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ 
                background: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)',
                color: 'white',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AssessmentIcon sx={{ fontSize: 48, mr: 2, filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))' }} />
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>8.5</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'medium' }}>CGPA</Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9, mt: 1 }}>
                    Current Performance
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ 
                background: 'linear-gradient(45deg, #FF9800 30%, #FFB74D 90%)',
                color: 'white',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <StatusIcon sx={{ fontSize: 48, mr: 2, filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))' }} />
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>3</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'medium' }}>Pending Assignments</Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9, mt: 1 }}>
                    Due this week
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ 
                background: 'linear-gradient(45deg, #F44336 30%, #E57373 90%)',
                color: 'white',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EventIcon sx={{ fontSize: 48, mr: 2, filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))' }} />
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>2</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'medium' }}>Upcoming Exams</Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9, mt: 1 }}>
                    Next 7 days
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
    
          {/* Charts Section with Enhanced Styling */}
          <Grid container spacing={4}>
            {/* Attendance Trend Chart */}
            <Grid item xs={12} md={8}>
              <Paper sx={{ 
                p: 4, 
                height: 400,
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                background: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                }
              }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e' }}>
                  Attendance Trend
                </Typography>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: 8,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        padding: '12px'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="attendance" 
                      stroke="#4285F4" 
                      strokeWidth={3}
                      dot={{ fill: '#4285F4', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, fill: '#4285F4' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
    
            {/* Subject Performance Chart */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ 
                p: 4, 
                height: 400,
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                background: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                }
              }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e' }}>
                  Subject Performance
                </Typography>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="subject" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: 8,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        padding: '12px'
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="marks" 
                      fill="#34A853"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
    
            {/* Department Distribution Chart */}
            <Grid item xs={12}>
              <Paper sx={{ 
                p: 4, 
                height: 400,
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                background: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                }
              }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e' }}>
                  Department Distribution
                </Typography>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={departmentDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {departmentDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: 8,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        padding: '12px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        </>
        )
  }
  
  export default Stdashboard
