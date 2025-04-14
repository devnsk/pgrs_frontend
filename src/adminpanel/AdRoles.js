import React, { useState } from 'react';
import {
  Box,
  Typography,
  MenuItem,
  Grid,
  Paper,
  TextField,
  FormControl,
  Select,
  InputLabel,
  Button,
} from '@mui/material';
  const RoleManagement = () => {
     const [roleForm, setRoleForm] = useState({
        employeeName: '',
        email: '',
        phone: '',
        department: '',
        college: '',
        designation: '',
        joiningDate: ''
      });
    const handleRoleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Role Form Submitted:', roleForm);
        // Here you would typically send the data to your backend
      };
      const handleRoleFormChange = (e) => {
        const { name, value } = e.target;
        setRoleForm(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
    return (
      <>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Add New Role
          </Typography>
        </Box>

        <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
          <form onSubmit={handleRoleFormSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Employee Name"
                  name="employeeName"
                  value={roleForm.employeeName}
                  onChange={handleRoleFormChange}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={roleForm.email}
                  onChange={handleRoleFormChange}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={roleForm.phone}
                  onChange={handleRoleFormChange}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Department</InputLabel>
                  <Select
                    name="department"
                    value={roleForm.department}
                    onChange={handleRoleFormChange}
                    label="Department"
                  >
                    <MenuItem value="Computer Science">Computer Science</MenuItem>
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Mechanical">Mechanical</MenuItem>
                    <MenuItem value="Civil">Civil</MenuItem>
                    <MenuItem value="Mathematics">Mathematics</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>College</InputLabel>
                  <Select
                    name="college"
                    value={roleForm.college}
                    onChange={handleRoleFormChange}
                    label="College"
                  >
                    <MenuItem value="CUTM">CUTM</MenuItem>
                    <MenuItem value="Silicon">Silicon</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Designation</InputLabel>
                  <Select
                    name="designation"
                    value={roleForm.designation}
                    onChange={handleRoleFormChange}
                    label="Designation"
                  >
                    <MenuItem value="Professor">Professor</MenuItem>
                    <MenuItem value="Associate Professor">Associate Professor</MenuItem>
                    <MenuItem value="Assistant Professor">Assistant Professor</MenuItem>
                    <MenuItem value="Lecturer">Lecturer</MenuItem>
                    <MenuItem value="Head of Department">Head of Department</MenuItem>
                    <MenuItem value="Dean">Dean</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Joining Date"
                  name="joiningDate"
                  type="date"
                  value={roleForm.joiningDate}
                  onChange={handleRoleFormChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => setRoleForm({
                      employeeName: '',
                      email: '',
                      phone: '',
                      department: '',
                      college: '',
                      designation: '',
                      joiningDate: ''
                    })}
                  >
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ bgcolor: '#4285F4' }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </>
    );
  };
export default RoleManagement;