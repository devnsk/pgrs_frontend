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
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
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
 
 const EmpComplaintinbox = () => {
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [actionAnchorEl, setActionAnchorEl] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchBy, setSearchBy] = useState('complaintNo');
    const [showAssignedOnly, setShowAssignedOnly] = useState(false);
    const [selectedComplaints, setSelectedComplaints] = useState({});
    const handleActionClick = (event) => {
        setActionAnchorEl(event.currentTarget);
      };
      const handleAssignToMe = () => {
        const selectedIds = Object.entries(selectedComplaints)
          .filter(([_, isSelected]) => isSelected)
          .map(([id]) => id);
        console.log('Assigning complaints:', selectedIds);
        setShowAssignedOnly(true);
        // Add your assignment logic here
      };
      const handleComplaintClick = (complaint) => {
        setSelectedComplaint(complaint);
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
    
      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleSearchByChange = (event) => {
        setSearchBy(event.target.value);
      };
    
      const handleRadioChange = (complaintId) => {
        setSelectedComplaints(prev => ({
          ...prev,
          [complaintId]: !prev[complaintId]
        }));
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
      const filteredComplaints = assignedComplaints.filter(complaint => {
        // First filter by search term
        const matchesSearch = !searchTerm || 
          (searchBy === 'complaintNo' && complaint.complaintNo.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (searchBy === 'mobileNo' && complaint.mobileNo.includes(searchTerm));
  
        // Then filter by assigned status if showAssignedOnly is true
        if (showAssignedOnly) {
          return matchesSearch && selectedComplaints[complaint.id];
        }
        return matchesSearch;
      });
  
      return (
        <>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Complaint Inbox
            </Typography>
          </Box>
  
          <Paper sx={{ p: 3, mb: 4, boxShadow: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Search By</InputLabel>
                  <Select
                    value={searchBy}
                    onChange={handleSearchByChange}
                    label="Search By"
                  >
                    <MenuItem value="complaintNo">Complaint Number</MenuItem>
                    <MenuItem value="mobileNo">Mobile Number</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  label="Search"
                  variant="outlined"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder={`Search by ${searchBy === 'complaintNo' ? 'Complaint Number' : 'Mobile Number'}`}
                />
              </Grid>
            </Grid>
          </Paper>
  
          {renderComplaintSummary()}
  
          <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell>Assign</TableCell>
                  <TableCell>Complaint No.</TableCell>
                  <TableCell>Student Details</TableCell>
                  <TableCell>Mobile No.</TableCell>
                  <TableCell>Complaint Type</TableCell>
                  <TableCell>Description</TableCell>
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
                      <Radio
                        checked={selectedComplaints[complaint.id] || false}
                        onChange={() => handleRadioChange(complaint.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TableCell>
                    <TableCell>{complaint.complaintNo}</TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="subtitle2">{complaint.studentName}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {complaint.mobileNo}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{complaint.mobileNo}</TableCell>
                    <TableCell>{complaint.complaintType}</TableCell>
                    <TableCell>{complaint.description}</TableCell>
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
  
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setShowAssignedOnly(false);
                setSelectedComplaints({});
              }}
              disabled={!showAssignedOnly}
            >
              Show All Complaints
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PersonAddIcon />}
              onClick={handleAssignToMe}
              disabled={!Object.values(selectedComplaints).some(Boolean)}
            >
              Assign to Me
            </Button>
          </Box>
        </>
      );
    };
    return renderComplaints();
 }
 
 export default EmpComplaintinbox