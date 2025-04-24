import React, { useState } from 'react';
import {
  Box,
  Typography,
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
// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
  );
  // Sample data for employee's assigned complaints
const assignedComplaints = [
    {
      id: 1,
      complaintNo: 'CMP2023001',
      studentName: 'Rahul Sharma',
      mobileNo: '+91 9876543210',
      department: 'Computer Science',
      college: 'CUTM',
      complaintType: 'Academic',
      description: 'Issue with course material access',
      status: 'In Progress',
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
      status: 'Pending',
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
      date: '2023-01-17'
    }
  ];
  
const Empdashboard = () => {
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const handleComplaintClick = (complaint) => {
        setSelectedComplaint(complaint);
      };

    const renderDashboard = () => {
       // Prepare data for charts
       const complaintTypes = ['Academic', 'Hostel', 'Transport', 'Security', 'Other'];
       const complaintCounts = [5, 3, 2, 1, 1];
       const monthlyData = [3, 5, 2, 4, 6, 3, 2, 4, 5, 3, 4, 2];
       const statusData = {
         labels: ['Pending', 'In Progress', 'Resolved'],
         data: [
           assignedComplaints.filter(c => c.status === 'Pending').length,
           assignedComplaints.filter(c => c.status === 'In Progress').length,
           assignedComplaints.filter(c => c.status === 'Resolved').length
         ]
       };
   
       const barChartData = {
         labels: complaintTypes,
         datasets: [
           {
             label: 'Complaints by Type',
             data: complaintCounts,
             backgroundColor: [
               'rgba(66, 133, 244, 0.8)',
               'rgba(52, 168, 83, 0.8)',
               'rgba(251, 188, 5, 0.8)',
               'rgba(234, 67, 53, 0.8)',
               'rgba(168, 168, 168, 0.8)',
             ],
             borderColor: [
               'rgba(66, 133, 244, 1)',
               'rgba(52, 168, 83, 1)',
               'rgba(251, 188, 5, 1)',
               'rgba(234, 67, 53, 1)',
               'rgba(168, 168, 168, 1)',
             ],
             borderWidth: 1,
           },
         ],
       };
   
       const doughnutChartData = {
         labels: statusData.labels,
         datasets: [
           {
             data: statusData.data,
             backgroundColor: [
               'rgba(234, 67, 53, 0.8)',
               'rgba(251, 188, 5, 0.8)',
               'rgba(52, 168, 83, 0.8)',
             ],
             borderColor: [
               'rgba(234, 67, 53, 1)',
               'rgba(251, 188, 5, 1)',
               'rgba(52, 168, 83, 1)',
             ],
             borderWidth: 1,
           },
         ],
       };
   
       const lineChartData = {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         datasets: [
           {
             label: 'Monthly Complaints',
             data: monthlyData,
             fill: false,
             backgroundColor: 'rgba(66, 133, 244, 0.8)',
             borderColor: 'rgba(66, 133, 244, 1)',
             tension: 0.1,
           },
         ],
       };
   
       const chartOptions = {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
           legend: {
             position: 'bottom',
           },
         },
       };
   
       return (
         <>
           <Typography variant="h5" gutterBottom>
             Dashboard Overview
           </Typography>
   
           <Grid container spacing={3} sx={{ mb: 4 }}>
             <Grid item xs={12} sm={6} md={3}>
               <Card sx={{ bgcolor: '#fff', boxShadow: 2 }}>
                 <CardContent>
                   <Typography variant="subtitle2" color="textSecondary">
                     TOTAL COMPLAINTS
                   </Typography>
                   <Typography variant="h4">{assignedComplaints.length}</Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
               <Card sx={{ bgcolor: '#fff', boxShadow: 2 }}>
                 <CardContent>
                   <Typography variant="subtitle2" color="textSecondary">
                     PENDING COMPLAINTS
                   </Typography>
                   <Typography variant="h4">
                     {assignedComplaints.filter(c => c.status === 'Pending').length}
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
               <Card sx={{ bgcolor: '#fff', boxShadow: 2 }}>
                 <CardContent>
                   <Typography variant="subtitle2" color="textSecondary">
                     IN PROGRESS
                   </Typography>
                   <Typography variant="h4">
                     {assignedComplaints.filter(c => c.status === 'In Progress').length}
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
               <Card sx={{ bgcolor: '#fff', boxShadow: 2 }}>
                 <CardContent>
                   <Typography variant="subtitle2" color="textSecondary">
                     RESOLVED
                   </Typography>
                   <Typography variant="h4">
                     {assignedComplaints.filter(c => c.status === 'Resolved').length}
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
           </Grid>
   
           <Grid container spacing={3} sx={{ mb: 4 }}>
             <Grid item xs={12} md={6}>
               <Paper sx={{ p: 3, boxShadow: 2, height: '400px' }}>
                 <Typography variant="h6" gutterBottom>
                   Complaints by Type
                 </Typography>
                 <Box sx={{ height: '300px' }}>
                   <Bar data={barChartData} options={chartOptions} />
                 </Box>
               </Paper>
             </Grid>
             <Grid item xs={12} md={6}>
               <Paper sx={{ p: 3, boxShadow: 2, height: '400px' }}>
                 <Typography variant="h6" gutterBottom>
                   Complaint Status Distribution
                 </Typography>
                 <Box sx={{ height: '300px' }}>
                   <Doughnut data={doughnutChartData} options={chartOptions} />
                 </Box>
               </Paper>
             </Grid>
           </Grid>
   
           <Grid container spacing={3}>
             <Grid item xs={12}>
               <Paper sx={{ p: 3, boxShadow: 2, height: '400px' }}>
                 <Typography variant="h6" gutterBottom>
                   Monthly Complaint Trends
                 </Typography>
                 <Box sx={{ height: '300px' }}>
                   <Line data={lineChartData} options={chartOptions} />
                 </Box>
               </Paper>
             </Grid>
           </Grid>
   
           <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
             Recent Complaints
           </Typography>
           <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
             <Table>
               <TableHead>
                 <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                   <TableCell>Complaint No.</TableCell>
                   <TableCell>Student Details</TableCell>
                   <TableCell>Complaint Type</TableCell>
                   <TableCell>Status</TableCell>
                   <TableCell>Date</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                 {assignedComplaints.map((complaint) => (
                   <TableRow 
                     key={complaint.id} 
                     hover
                     onClick={() => handleComplaintClick(complaint)}
                     sx={{ cursor: 'pointer' }}
                   >
                     <TableCell>{complaint.complaintNo}</TableCell>
                     <TableCell>
                       <Box>
                         <Typography variant="subtitle2">{complaint.studentName}</Typography>
                         <Typography variant="body2" color="textSecondary">
                           {complaint.mobileNo}
                         </Typography>
                       </Box>
                     </TableCell>
                     <TableCell>{complaint.complaintType}</TableCell>
                     <TableCell>
                       <Chip
                         label={complaint.status}
                         size="small"
                         sx={{
                           backgroundColor: 
                             complaint.status === 'Resolved' ? '#e8f5e9' :
                             complaint.status === 'In Progress' ? '#fff3e0' : '#ffebee',
                           color: 
                             complaint.status === 'Resolved' ? '#2e7d32' :
                             complaint.status === 'In Progress' ? '#f57c00' : '#c62828',
                         }}
                       />
                     </TableCell>
                     <TableCell>
                       {new Date(complaint.date).toLocaleDateString('en-GB')}
                     </TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>

         </>
       );
     };
     return renderDashboard();
}

export default Empdashboard  