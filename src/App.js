import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';

import Sidebar from './components/Sidebar'; // MUI Sidebar
// import Navbar from './components/Navbar';   // MUI Navbar
import Dashboard from './pages/Dashboard';
import GrievanceInbox  from './pages/GrivanceInbox';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* Sidebar - fixed width */}
        <Sidebar />

        {/* Main content area */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* Navbar at the top */}
          {/* <Navbar /> */}
          
          {/* Spacer to push content below AppBar height (if AppBar is fixed) */}
          <Toolbar />

          {/* Page content */}
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
