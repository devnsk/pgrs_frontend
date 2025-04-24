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
  CircularProgress,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Mail as GrievanceIcon,
  Assignment as StatusIcon,
  Feedback as FeedbackIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';
import { authenticateUser, logoutUser } from '../utils/auth';

const drawerWidth = 240;

const StdLayout = () => {
     const navigate = useNavigate();
      const [mobileOpen, setMobileOpen] = useState(false);
      const [currentPage, setCurrentPage] = useState('dashboard');
      const [anchorEl, setAnchorEl] = useState(null);
      const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
       const [loading, setLoading] = useState(true);
       const [auth, setAuth] = useState(null);
       const handleDrawerToggle = () => {
           setMobileOpen(!mobileOpen);
         };
       
         const handleProfileMenuOpen = (event) => {
           setAnchorEl(event.currentTarget);
         };
       
         const handleNotificationMenuOpen = (event) => {
           setNotificationAnchorEl(event.currentTarget);
         };
       
         const handleMenuClose = () => {
           setAnchorEl(null);
           setNotificationAnchorEl(null);
         };
       
         const handleLogout = () => {
           logoutUser();
           navigate('/login');
         };
      
        useEffect(() => {
          const studentAuth = authenticateUser();
          if (!studentAuth) {
            navigate('/login');
          } else {
            setAuth(studentAuth);
            setLoading(false);
          }
        }, [navigate]);
          if (loading) {
            return (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
              </Box>
            );
          }
         const menuItems = [
                 { text: "Dashboard", icon: <DashboardIcon />, path: "/student/dashboard" },
                 { text: "Grievance", icon: <GrievanceIcon />, path: "/student/grievance" },
                 { text: "Complaint Status", icon: <StatusIcon />, path: "/student/complaint status" },
                 { text: "Feedback", icon: <FeedbackIcon />, path: "/student/feedback" },
              ];
        
          const drawer = (
            <div>
              <Toolbar>
                <Typography variant="h6" noWrap component="div">
                  Student Panel
                </Typography>
              </Toolbar>
              <Divider />
              <List>
                {menuItems.map((item) => (
                  <ListItem button key={item.text} onClick={() => navigate(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                  </ListItem>
                ))}
                <ListItem button onClick={handleLogout}>
                  <ListItemIcon><LogoutIcon /></ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </div>
          );
        
  return (
     <Box sx={{ display: 'flex' }}>
       <AppBar
         position="fixed"
         sx={{
           width: { sm: `calc(100% - ${drawerWidth}px)` },
           ml: { sm: `${drawerWidth}px` },
           bgcolor: '#4285F4',
         }}
       >
         <Toolbar>
           <IconButton
             color="inherit"
             aria-label="open drawer"
             edge="start"
             onClick={handleDrawerToggle}
             sx={{ mr: 2, display: { sm: 'none' } }}
           >
             <MenuIcon />
           </IconButton>
           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
             Student Grievance System
           </Typography>
           <IconButton
             size="large"
             aria-label="show notifications"
             color="inherit"
             onClick={handleNotificationMenuOpen}
           >
             <Badge badgeContent={4} color="error">
               <NotificationsIcon />
             </Badge>
           </IconButton>
           <IconButton
             size="large"
             edge="end"
             aria-label="account of current user"
             aria-controls="profile-menu"
             aria-haspopup="true"
             onClick={handleProfileMenuOpen}
             color="inherit"
           >
             <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
           </IconButton>
         </Toolbar>
       </AppBar>
 
       <Box
         component="nav"
         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
       >
         <Drawer
           variant="temporary"
           open={mobileOpen}
           onClose={handleDrawerToggle}
           ModalProps={{
             keepMounted: true,
           }}
           sx={{
             display: { xs: 'block', sm: 'none' },
             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
           }}
         >
           {drawer}
         </Drawer>
         <Drawer
           variant="permanent"
           sx={{
             display: { xs: 'none', sm: 'block' },
             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
           }}
           open
         >
           {drawer}
         </Drawer>
       </Box>
 
       <Box
         component="main"
         sx={{
           flexGrow: 1,
           p: 3,
           width: { sm: `calc(100% - ${drawerWidth}px)` },
           bgcolor: '#f5f5f5',
           minHeight: '100vh',
         }}
       >
         <Toolbar />
        <Outlet/>
       </Box>
 
       {/* Profile Menu */}
       <Menu
         anchorEl={anchorEl}
         open={Boolean(anchorEl)}
         onClose={handleMenuClose}
         onClick={handleMenuClose}
       >
         <MenuItem>Profile</MenuItem>
         <MenuItem onClick={handleLogout}>Logout</MenuItem>
       </Menu>
 
       {/* Notifications Menu */}
       <Menu
         anchorEl={notificationAnchorEl}
         open={Boolean(notificationAnchorEl)}
         onClose={handleMenuClose}
         onClick={handleMenuClose}
       >
         <MenuItem>New complaint response</MenuItem>
         <MenuItem>Complaint status updated</MenuItem>
         <MenuItem>Feedback response received</MenuItem>
       </Menu>
     </Box>
   );
}

export default StdLayout