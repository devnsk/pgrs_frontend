import React, { useState, useEffect } from 'react';
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  FormControl,
  InputLabel,
  Select,
  Container,
  CircularProgress,
 
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Mail as GrievanceIcon,
  Assignment as StatusIcon,
  Assignment as AssignmentIcon,
  Feedback as FeedbackIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  School as SchoolIcon,
  Home as HomeIcon,
  Restaurant as RestaurantIcon,
  Build as BuildIcon,
  LibraryBooks as LibraryBooksIcon,
  Sports as SportsIcon,
  Payment as PaymentIcon,
  CardGiftcard as CardGiftcardIcon,
  Gavel as GavelIcon,
  MoreHoriz as MoreHorizIcon,
  AttachFile as AttachFileIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  HourglassEmpty as HourglassEmptyIcon,
  Description as DescriptionIcon,
  Visibility as VisibilityIcon,
  Assessment as AssessmentIcon,
  Event as EventIcon,
} from '@mui/icons-material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
const sampleComplaints = [
  {
    id: 1,
    title: 'Library Book Issue',
    category: 'Library',
    date: '2024-03-15',
    status: 'Resolved',
    currentStep: 0,
    description: 'Unable to access e-books in the library portal',
    assignedTo: 'Library Department',
    lastUpdate: '2024-03-20',
    resolution: 'Access restored after system update',
    timeline: [
      { date: '2024-03-15 09:00', event: 'Complaint Filed', status: 'filed' },
      { date: '2024-03-16 10:30', event: 'Assigned to Library Department', status: 'assigned' },
      { date: '2024-03-17 11:00', event: 'Under Investigation', status: 'progress' },
      { date: '2024-03-19 14:00', event: 'Review Pending', status: 'pending' },
      { date: '2024-03-20 15:30', event: 'Issue Resolved', status: 'resolved' }
    ]
  },
  {
    id: 2,
    title: 'Hostel Maintenance',
    category: 'Hostel',
    date: '2024-03-18',
    status: 'In Progress',
    currentStep: 2,
    description: 'Water leakage in room 205',
    assignedTo: 'Maintenance Team',
    lastUpdate: '2024-03-19',
    timeline: [
      { date: '2024-03-18 08:00', event: 'Complaint Filed', status: 'filed' },
      { date: '2024-03-19 09:15', event: 'Assigned to Maintenance', status: 'assigned' },
      { date: '2024-03-19 11:30', event: 'Inspection Started', status: 'progress' }
    ]
  },
  {
    id: 3,
    title: 'Academic Query',
    category: 'Academic',
    date: '2024-03-20',
    status: 'Pending',
    currentStep: 1,
    description: 'Clarification needed for course syllabus',
    assignedTo: 'Academic Department',
    lastUpdate: '2024-03-20',
    timeline: [
      { date: '2024-03-20 10:00', event: 'Complaint Filed', status: 'filed' },
      { date: '2024-03-20 11:45', event: 'Under Review', status: 'pending' }
    ]
  }
];

const StatusTimeline = ({ complaint }) => {
  const currentStepIndex = statusSteps.findIndex(step => step.key === complaint.timeline[complaint.timeline.length - 1]?.status);

  return (
    <Timeline position="alternate">
      {statusSteps.map((step, index) => {
        const stepInfo = complaint.timeline.find(t => t.status === step.key);
        const isActive = index <= currentStepIndex;
        
        return (
          <TimelineItem key={step.label}>
            <TimelineSeparator>
              <TimelineDot color={isActive ? step.color : 'grey'} variant={isActive ? 'filled' : 'outlined'}>
                {step.icon}
              </TimelineDot>
              {index < statusSteps.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1" color={isActive ? 'text.primary' : 'text.secondary'}>
                {step.label}
              </Typography>
              {stepInfo && (
                <>
                  <Typography variant="caption" color="text.secondary">
                    {stepInfo.event}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {stepInfo.date}
                  </Typography>
                </>
              )}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
const statusSteps = [
  {
    label: 'Resolved',
    icon: <CheckCircleIcon />,
    color: 'success',
    description: 'Complaint has been successfully resolved',
    key: 'resolved'
  },
  {
    label: 'Pending',
    icon: <PendingIcon />,
    color: 'warning',
    description: 'Under review by concerned department',
    key: 'pending'
  },
  {
    label: 'In Progress',
    icon: <HourglassEmptyIcon />,
    color: 'info',
    description: 'Being actively worked on',
    key: 'progress'
  },
  {
    label: 'Complaint Assigned',
    icon: <StatusIcon />,
    color: 'primary',
    description: 'Assigned to department for action',
    key: 'assigned'
  },
  {
    label: 'Complaint Filed',
    icon: <DescriptionIcon />,
    color: 'error',
    description: 'Initial submission received',
    key: 'filed'
  }
];

 
 const StdComplain = () => {
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [filteredComplaints, setFilteredComplaints] = useState(sampleComplaints);
   return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Complaint Status
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track your submitted complaints and their current status
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Status Overview Cards */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Complaints
              </Typography>
              <Typography variant="h4">3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resolved
              </Typography>
              <Typography variant="h4" color="success.main">1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                In Progress
              </Typography>
              <Typography variant="h4" color="warning.main">1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pending
              </Typography>
              <Typography variant="h4" color="error.main">1</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Status Tracking */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Status Tracking
            </Typography>
            <StatusTimeline complaint={selectedComplaint || sampleComplaints[0]} />
          </Paper>
        </Grid>

        {/* Complaints List */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Your Complaints
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Assigned To</TableCell>
                    <TableCell>Last Update</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredComplaints.map((complaint) => (
                    <TableRow key={complaint.id}>
                      <TableCell>{complaint.title}</TableCell>
                      <TableCell>{complaint.category}</TableCell>
                      <TableCell>{complaint.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={complaint.status}
                          color={
                            complaint.status === 'Resolved'
                              ? 'success'
                              : complaint.status === 'In Progress'
                              ? 'warning'
                              : 'error'
                          }
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{complaint.assignedTo}</TableCell>
                      <TableCell>{complaint.lastUpdate}</TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={() => {
                            setSelectedComplaint(complaint);
                            setSelectedStatus(complaint.status);
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
   )
 }
 
 export default StdComplain
