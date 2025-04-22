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
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Mail as ComplainIcon,
  Assignment as StatusIcon,
  School as StudentsIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';
const drawerWidth = 240;
const EmpLayout = () => {
    const navigate = useNavigate();
      const [mobileOpen, setMobileOpen] = useState(false);
      const [currentPage, setCurrentPage] = useState('dashboard');
      const [anchorEl, setAnchorEl] = useState(null);
      const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
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
        localStorage.removeItem('employeeAuth');
        navigate('/login');
      };
       const menuItems = [
          { text: "Dashboard", icon: <DashboardIcon />, path: "/employee/dashboard" },
          { text: "Complaint Inbox", icon: <ComplainIcon />, path: "/employee/Complaint Inbox" },
          { text: "Complaint Status", icon: <StatusIcon />, path: "/employee/Complaint Status" },
          { text: "Students", icon: <StudentsIcon />, path: "/employee/student" },
        ];
      
        const drawer = (
          <div>
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Employee Panel
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
    <>
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
                Employee Grievance System
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
                <Avatar sx={{ width: 32, height: 32 }}>E</Avatar>
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
            <MenuItem>New complaint assigned</MenuItem>
            <MenuItem>Complaint status updated</MenuItem>
            <MenuItem>New student registered</MenuItem>
            <MenuItem>System update available</MenuItem>
          </Menu>
        </Box>
    </>
  )
}

export default EmpLayout