import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
  const sidebarItems = [
    { text: 'Dashboard', to: '/' },
    { text: 'Grievance Inbox', to: '/inbox' },
    { text: 'Apply Leave', to: '/apply-leave' },
    { text: 'Profile', to: '/profile' },
    { text: 'Log-Out', to: '/logout' },
  ];

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="left"
      PaperProps={{
        sx: {
          width: drawerWidth,
          bgcolor: 'grey.100',
          pt: 2,
        },
      }}
    >
      <Box sx={{ px: 2 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Grievance Dashboard
        </Typography>
        <Divider />
      </Box>

      <List>
        {sidebarItems.map(({ text, to }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={to}
              onClick={onClose} // Close drawer on item click
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
