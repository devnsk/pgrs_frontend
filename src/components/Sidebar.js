import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Box,
  Divider,
  useTheme,
} from '@mui/material';

const Sidebar = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const sidebarItems = [
    { text: 'Dashboard', to: '/' },
    { text: 'Grievance Inbox', to: '/inbox' },
    { text: 'Apply Leave', to: '/inbox' }, // Consider using a different route if applicable
    { text: 'Profile', to: '/profile' },
    { text: 'Log-Out', to: '/logout', highlight: true },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: {
          width: 240,
          bgcolor: isDarkMode ? 'primary.dark' : 'grey.100',
          color: isDarkMode ? 'common.white' : 'common.black',
          pt: 2,
        },
      }}
    >
      <Box sx={{ px: 2 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
          Grievance Dashboard
        </Typography>
        <Divider />
      </Box>

      <List>
        {sidebarItems.map(({ text, to, highlight }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={to}
              sx={{
                m: 1,
                borderRadius: 1,
                bgcolor: isDarkMode ? 'primary.main' : 'grey.200',
                '&:hover': {
                  bgcolor: highlight
                    ? 'error.main'
                    : isDarkMode
                    ? 'primary.light'
                    : 'grey.300',
                  transform: 'scale(1.05)',
                },
                color: 'white',
              }}
            >
              <ListItemText primary={text} primaryTypographyProps={{ sx: { color: 'white' } }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
