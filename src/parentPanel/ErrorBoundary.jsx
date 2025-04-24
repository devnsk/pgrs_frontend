import React from 'react';
import { Typography, Box } from '@mui/material';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" color="error">
            Something went wrong.
          </Typography>
          <Typography>{this.state.error?.message}</Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;