import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from './components/Sidebar'; // Sidebar drawer
import Navbar from './components/Navbar';   // Your top navbar
import Dashboard from './pages/Dashboard';
import GrievanceInbox from './pages/GrivanceInbox';
import Profile from './pages/Profile';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* Toggle Button (Hamburger icon) */}
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1300,
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Sidebar Drawer */}
        <Sidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />

        {/* Main content */}
        <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
          <Navbar />

          <Box sx={{ p: 3 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inbox" element={<GrievanceInbox />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
