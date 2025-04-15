import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Switch,
  FormControlLabel,
  CssBaseline,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const MUIStyledNavbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.backgroundColor = '#121212';
      root.style.color = '#ffffff';
    } else {
      root.style.backgroundColor = '#ffffff';
      root.style.color = '#000000';
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color={darkMode ? 'default' : 'primary'}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            👤 Isha Chand
          </Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  color="default"
                />
              }
              label={darkMode ? 'Light Mode' : 'Dark Mode'}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MUIStyledNavbar;
