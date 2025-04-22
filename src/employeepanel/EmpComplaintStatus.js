import React, { useState } from 'react';
import {
  Box,
  Typography,
  ListItemIcon,
  Menu,
  MenuItem,
  Grid,
  Paper,
  Button,
} from '@mui/material';
import {
  PersonAdd as PersonAddIcon,
  CheckCircle as CheckCircleIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
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

const EmpComplaintStatus = () => {
      const [selectedComplaint, setSelectedComplaint] = useState(null);
       const [actionAnchorEl, setActionAnchorEl] = useState(null);
    const handleActionClick = (event) => {
        setActionAnchorEl(event.currentTarget);
      };
      const handleActionClose = () => {
        setActionAnchorEl(null);
      };
      const handleActionSelect = (action) => {
        if (action === 'resolve') {
          // Handle resolve action
          console.log('Resolve complaint:', selectedComplaint.id);
        }
        handleActionClose();
      };
    const renderStatus = () => {
        const selectedComplaint = assignedComplaints[0]; // For demo, using first complaint
    
        return (
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Complaint Status
              </Typography>
            </Box>
    
            <Paper sx={{ p: 3, mb: 4, boxShadow: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Timeline position="alternate">
                    <TimelineItem>
                      <TimelineOppositeContent color="text.secondary">
                        {new Date(selectedComplaint.date).toLocaleDateString()}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="success" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" component="span">
                          Complaint Resolved
                        </Typography>
                        <Typography>Complaint has been successfully resolved</Typography>
                      </TimelineContent>
                    </TimelineItem>
    
                    <TimelineItem>
                      <TimelineOppositeContent color="text.secondary">
                        {new Date(selectedComplaint.date).toLocaleDateString()}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="warning" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" component="span">
                          In Progress
                        </Typography>
                        <Typography>Complaint is being processed</Typography>
                      </TimelineContent>
                    </TimelineItem>
    
                    <TimelineItem>
                      <TimelineOppositeContent color="text.secondary">
                        {new Date(selectedComplaint.date).toLocaleDateString()}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="error" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" component="span">
                          Pending for Assignment
                        </Typography>
                        <Typography>Waiting for employee assignment</Typography>
                      </TimelineContent>
                    </TimelineItem>
    
                    <TimelineItem>
                      <TimelineOppositeContent color="text.secondary">
                        {new Date(selectedComplaint.date).toLocaleDateString()}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" component="span">
                          Complaint Filed
                        </Typography>
                        <Typography>Initial complaint submission</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Grid>
    
                <Grid item xs={12} md={4}>
                  <Paper sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h6" gutterBottom>
                      Complaint Details
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="textSecondary">
                        Complaint Number
                      </Typography>
                      <Typography variant="body1">{selectedComplaint.complaintNo}</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="textSecondary">
                        Student Name
                      </Typography>
                      <Typography variant="body1">{selectedComplaint.studentName}</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="textSecondary">
                        Complaint Type
                      </Typography>
                      <Typography variant="body1">{selectedComplaint.complaintType}</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="textSecondary">
                        Description
                      </Typography>
                      <Typography variant="body1">{selectedComplaint.description}</Typography>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleActionClick}
                        startIcon={<SettingsIcon />}
                        fullWidth
                      >
                        Take Action
                      </Button>
                      <Menu
                        anchorEl={actionAnchorEl}
                        open={Boolean(actionAnchorEl)}
                        onClose={handleActionClose}
                      >
                        <MenuItem onClick={() => handleActionSelect('assign')}>
                          <ListItemIcon>
                            <PersonAddIcon fontSize="small" />
                          </ListItemIcon>
                          Assign
                        </MenuItem>
                        <MenuItem onClick={() => handleActionSelect('resolve')}>
                          <ListItemIcon>
                            <CheckCircleIcon fontSize="small" />
                          </ListItemIcon>
                          Resolve
                        </MenuItem>
                      </Menu>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </>
        );
      };
      return renderStatus();
}

export default EmpComplaintStatus