import React, { useState, useEffect } from "react";
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
  Alert,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Mail as GrievanceIcon,
  Assignment as StatusIcon,
  Feedback as FeedbackIcon,
  School as MentorIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  Add as AddIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Assignment as AssignmentIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { authenticateUser, getParentAuth, logoutUser } from "../utils/auth";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const drawerWidth = 240;

// Mock data for visualizations
const complaintStats = [
  { name: "Total Complaints", value: 12 },
  { name: "Resolved", value: 8 },
  { name: "Pending", value: 3 },
  { name: "In Progress", value: 1 },
];

const statusDistribution = [
  { name: "Resolved", value: 8 },
  { name: "Pending", value: 3 },
  { name: "In Progress", value: 1 },
];

const COLORS = ["#4CAF50", "#FFC107", "#2196F3"];

// Sample data for complaints
const complaints = [
  {
    id: 1,
    complaintNo: "CMP2023001",
    type: "Academic",
    description: "Issue with course material access",
    status: "In Progress",
    date: "2023-01-15",
    response: "We are looking into the issue and will update you soon.",
  },
  {
    id: 2,
    complaintNo: "CMP2023002",
    type: "Hostel",
    description: "Room maintenance issue",
    status: "Resolved",
    date: "2023-01-16",
    response: "The maintenance work has been completed.",
  },
];

// Sample data for feedback
const feedbackList = [
  {
    id: 1,
    date: "2023-01-10",
    rating: 4,
    comment: "Good response time and resolution.",
    response: "Thank you for your feedback!",
  },
  {
    id: 2,
    date: "2023-01-15",
    rating: 5,
    comment: "Excellent service and support.",
    response: "We appreciate your kind words!",
  },
];

// Sample data for student mentor
const mentorInfo = {
  name: "Dr. Amit Kumar",
  email: "amit.kumar@cutm.ac.in",
  phone: "+91 9876543210",
  department: "Computer Science",
  designation: "Associate Professor",
  officeHours: "Monday to Friday, 10:00 AM - 4:00 PM",
};

const Pdashboard = () => {
  const navigate = useNavigate();
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const [newComplaintOpen, setNewComplaintOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});
  const [complaintForm, setComplaintForm] = useState({
    type: "",
    description: "",
  });

  useEffect(() => {
    const auth = authenticateUser();
    if (!auth) {
      navigate("/login");
    }
  }, [navigate]);

  const handleComplaintClick = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const handleNewComplaintClose = () => {
    setNewComplaintOpen(false);
    setComplaintForm({ type: "", description: "" });
  };
  const handleRowClick = (complaintId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [complaintId]: !prev[complaintId],
    }));
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        Parent Dashboard
      </Typography>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ height: "100%", bgcolor: "#f5f5f5" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Total Complaints
              </Typography>
              <Typography variant="h4" component="div">
                12
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ height: "100%", bgcolor: "#e8f5e9" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Resolved
              </Typography>
              <Typography variant="h4" component="div" color="success.main">
                8
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ height: "100%", bgcolor: "#fff3e0" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Pending
              </Typography>
              <Typography variant="h4" component="div" color="warning.main">
                3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ height: "100%", bgcolor: "#e3f2fd" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                In Progress
              </Typography>
              <Typography variant="h4" component="div" color="info.main">
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Complaint Status Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Complaint Statistics
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={complaintStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#4285F4" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activity Timeline */}
      <Paper sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              10:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success">
                <CheckCircleIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1">
                Complaint #1234 Resolved
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your complaint about hostel maintenance has been resolved
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              09:15 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning">
                <PendingIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1">New Complaint Filed</Typography>
              <Typography variant="body2" color="text.secondary">
                Complaint #1235 about mess food quality has been filed
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              08:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="info">
                <AssignmentIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1">Complaint Assigned</Typography>
              <Typography variant="body2" color="text.secondary">
                Complaint #1236 has been assigned to Mr. John Doe
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Paper>

      {/* Existing Complaint Table */}
      <Paper sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Your Complaints</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setNewComplaintOpen(true)}
          >
            File New Complaint
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Complaint ID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {complaints.map((complaint) => (
                <React.Fragment key={complaint.id}>
                  <TableRow
                    hover
                    onClick={() => handleRowClick(complaint.id)}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell>{complaint.id}</TableCell>
                    <TableCell>{complaint.type}</TableCell>
                    <TableCell>
                      <Chip
                        label={complaint.status}
                        color={
                          complaint.status === "Resolved"
                            ? "success"
                            : complaint.status === "Pending"
                            ? "warning"
                            : "info"
                        }
                      />
                    </TableCell>
                    <TableCell>{complaint.date}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          handleComplaintClick(complaint);
                        }}
                      >
                        {expandedRows[complaint.id] ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  {expandedRows[complaint.id] && (
                    <TableRow>
                      <TableCell colSpan={5}>
                        <Box sx={{ p: 2 }}>
                          <Typography variant="subtitle1">Details</Typography>
                          <Typography>{complaint.description}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Pdashboard;
