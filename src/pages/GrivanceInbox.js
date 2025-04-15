import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Select,
  MenuItem,
  TextField,
  Divider,
} from '@mui/material';

const GrievanceInbox = () => {
  return (
    <Box p={3}>
      {/* Breadcrumbs */}
      <Typography variant="body2" color="textSecondary">
        Home / Complaint Inbox
      </Typography>

      {/* Page Title */}
      <Typography variant="h4" fontWeight="bold" my={2}>
        Inbox
      </Typography>

      {/* Filters & Search Section */}
      <Grid container spacing={3}>
        {/* Left Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="h6" fontWeight="bold">
              Complaints
            </Typography>

            <Box mt={2}>
              <Typography variant="subtitle2" fontWeight="medium">
                Filter By:
              </Typography>
              <Button variant="text" size="small" sx={{ color: 'orange' }}>
                CLEAR ALL
              </Button>
            </Box>

            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <RadioGroup defaultValue="me" name="assigned">
                <FormControlLabel
                  value="me"
                  control={<Radio />}
                  label="Assigned to Me"
                />
                <FormControlLabel
                  value="all"
                  control={<Radio />}
                  label="Assigned to All"
                />
              </RadioGroup>
            </FormControl>

            <Box mt={3}>
              <FormLabel>Complaint Subtype</FormLabel>
              <Select fullWidth defaultValue="">
                <MenuItem value="">Select</MenuItem>
              </Select>
            </Box>

            <Box mt={3}>
              <FormLabel>Locality</FormLabel>
              <Select fullWidth defaultValue="">
                <MenuItem value="">Select</MenuItem>
              </Select>
            </Box>
          </Paper>
        </Grid>

        {/* Search Section */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ p: 3, bgcolor: 'background.paper' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Complaint No."
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Mobile No."
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ bgcolor: 'orange.main', '&:hover': { bgcolor: 'orange.dark' } }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>

            <Button
              variant="text"
              size="small"
              sx={{ mt: 2, color: 'orange' }}
            >
              Clear Search
            </Button>

            {/* No Records Found */}
            <Box mt={4}>
              <Paper variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
                <Typography color="text.secondary">
                  No Records Found
                </Typography>
              </Paper>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GrievanceInbox;
