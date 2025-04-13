import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  ListItemIcon,
  Menu,
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
  InputLabel,
  Button,
} from '@mui/material';
import {
  Close as CloseIcon,
  PersonAdd as PersonAddIcon,
  CheckCircle as CheckCircleIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
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
  
 
  const ComplainManagement = () => {
    const [complaintSearch, setComplaintSearch] = useState('');
      const [selectedStatus, setSelectedStatus] = useState('all');
      const [selectedComplaint, setSelectedComplaint] = useState(null);
      const [actionAnchorEl, setActionAnchorEl] = useState(null);
      const [selectedCollege, setSelectedCollege] = useState('all');
      const handleComplaintClick = (complaint) => {
        setSelectedComplaint(complaint);
      };
    
      const handleActionClick = (event) => {
        setActionAnchorEl(event.currentTarget);
      };
    
      const handleActionClose = () => {
        setActionAnchorEl(null);
      };
    
      const handleActionSelect = (action) => {
        if (action === 'reassign') {
          // Handle reassign action
          console.log('Reassign complaint:', selectedComplaint.id);
        } else if (action === 'resolve') {
          // Handle resolve action
          console.log('Resolve complaint:', selectedComplaint.id);
        }
        handleActionClose();
      };

      const renderComplaintSummary = () => {
          if (!selectedComplaint) return null;
      
          return (
            <Paper sx={{ p: 3, mb: 3, boxShadow: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Complaint Summary</Typography>
                <IconButton onClick={() => setSelectedComplaint(null)}>
                  <CloseIcon />
                </IconButton>
              </Box>
      
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Complaint Number</Typography>
                  <Typography variant="body1">{selectedComplaint.complaintNo}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Date</Typography>
                  <Typography variant="body1">
                    {new Date(selectedComplaint.date).toLocaleDateString('en-GB')}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Student Name</Typography>
                  <Typography variant="body1">{selectedComplaint.studentName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Mobile Number</Typography>
                  <Typography variant="body1">{selectedComplaint.mobileNo}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Department</Typography>
                  <Typography variant="body1">{selectedComplaint.department}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">College</Typography>
                  <Typography variant="body1">{selectedComplaint.college}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Complaint Type</Typography>
                  <Typography variant="body1">{selectedComplaint.complaintType}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Status</Typography>
                  <Chip
                    label={selectedComplaint.status}
                    size="small"
                    sx={{
                      backgroundColor: 
                        selectedComplaint.status === 'Resolved' ? '#e8f5e9' :
                        selectedComplaint.status === 'In Progress' ? '#fff3e0' : '#ffebee',
                      color: 
                        selectedComplaint.status === 'Resolved' ? '#2e7d32' :
                        selectedComplaint.status === 'In Progress' ? '#f57c00' : '#c62828',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">Description</Typography>
                  <Typography variant="body1">{selectedComplaint.description}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">Assigned To</Typography>
                  <Typography variant="body1">{selectedComplaint.assignedTo}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button
                      variant="contained"
                      onClick={handleActionClick}
                      startIcon={<SettingsIcon />}
                      sx={{ bgcolor: '#4285F4' }}
                    >
                      Take Action
                    </Button>
                    <Menu
                      anchorEl={actionAnchorEl}
                      open={Boolean(actionAnchorEl)}
                      onClose={handleActionClose}
                    >
                      <MenuItem onClick={() => handleActionSelect('reassign')}>
                        <ListItemIcon>
                          <PersonAddIcon fontSize="small" />
                        </ListItemIcon>
                        Reassign
                      </MenuItem>
                      <MenuItem onClick={() => handleActionSelect('resolve')}>
                        <ListItemIcon>
                          <CheckCircleIcon fontSize="small" />
                        </ListItemIcon>
                        Resolve
                      </MenuItem>
                    </Menu>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          );
        };
      
        const renderComplaints = () => {
          const filteredComplaints = complaintsData.filter(complaint => {
            const matchesSearch = 
              complaint.complaintNo.toLowerCase().includes(complaintSearch.toLowerCase()) ||
              complaint.studentName.toLowerCase().includes(complaintSearch.toLowerCase()) ||
              complaint.mobileNo.includes(complaintSearch) ||
              complaint.assignedTo.toLowerCase().includes(complaintSearch.toLowerCase());
            
            const matchesStatus = selectedStatus === 'all' || complaint.status === selectedStatus;
            const matchesCollege = selectedCollege === 'all' || complaint.college === selectedCollege;
            
            return matchesSearch && matchesStatus && matchesCollege;
          });
      
          return (
            <>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Complaint Inbox
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Search by complaint no, name, mobile, or assigned to..."
                      value={complaintSearch}
                      onChange={(e) => setComplaintSearch(e.target.value)}
                      size="small"
                      sx={{ bgcolor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        label="Status"
                        sx={{ bgcolor: 'white' }}
                      >
                        <MenuItem value="all">All Status</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Resolved">Resolved</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth size="small">
                      <InputLabel>College</InputLabel>
                      <Select
                        value={selectedCollege}
                        onChange={(e) => setSelectedCollege(e.target.value)}
                        label="College"
                        sx={{ bgcolor: 'white' }}
                      >
                        <MenuItem value="all">All Colleges</MenuItem>
                        <MenuItem value="CUTM">CUTM</MenuItem>
                        <MenuItem value="Silicon">Silicon</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
      
              {renderComplaintSummary()}
      
              <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
                <Table sx={{ minWidth: 800 }}>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                      <TableCell>Complaint No.</TableCell>
                      <TableCell>Student Details</TableCell>
                      <TableCell>Complaint Type</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Assigned To</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredComplaints.map((complaint) => (
                      <TableRow 
                        key={complaint.id} 
                        hover
                        onClick={() => handleComplaintClick(complaint)}
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell>
                          <Typography variant="subtitle2">{complaint.complaintNo}</Typography>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography variant="subtitle2">{complaint.studentName}</Typography>
                            <Typography variant="body2" color="textSecondary">
                              {complaint.mobileNo}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {complaint.department}, {complaint.college}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{complaint.complaintType}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{complaint.description}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{complaint.assignedTo}</Typography>
                        </TableCell>
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
                          <Typography variant="body2">
                            {new Date(complaint.date).toLocaleDateString('en-GB')}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
        
          );
        };
        return <Box sx={{ p: 3 }}>{renderComplaints()}</Box>;
    }
 
export default ComplainManagement;
  
  