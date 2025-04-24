import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material';

const Pgrievance = () => {
  const [grievanceForm, setGrievanceForm] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    address: '',
    relationship: '',
    studentName: '',
    studentRollNumber: '',
    category: '',
    description: '',
    dateOfIncident: '',
    supportingDocuments: null,
    preferredResolution: '',
    otherCategory: '',
  });

  const handleGrievanceSubmit = (e) => {
    e.preventDefault();
    console.log('Grievance Form Data:', grievanceForm);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setGrievanceForm({ ...grievanceForm, supportingDocuments: file });
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Grievance Registration Form
        </Typography>
        <form onSubmit={handleGrievanceSubmit}>
          <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#4285F4' }}>
            Parent/Guardian Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Full Name"
                value={grievanceForm.fullName}
                onChange={(e) => setGrievanceForm({ ...grievanceForm, fullName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Contact Number"
                value={grievanceForm.contactNumber}
                onChange={(e) => setGrievanceForm({ ...grievanceForm, contactNumber: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Email Address"
                type="email"
                value={grievanceForm.email}
                onChange={(e) => setGrievanceForm({ ...grievanceForm, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Relationship to Student</InputLabel>
                <Select
                  value={grievanceForm.relationship}
                  onChange={(e) => setGrievanceForm({ ...grievanceForm, relationship: e.target.value })}
                  label="Relationship to Student"
                >
                  <MenuItem value="mother">Mother</MenuItem>
                  <MenuItem value="father">Father</MenuItem>
                  <MenuItem value="guardian">Guardian</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Address"
                multiline
                rows={2}
                value={grievanceForm.address}
                onChange={(e) => setGrievanceForm({ ...grievanceForm, address: e.target.value })}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#4285F4' }}>
            Student Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Student Name"
                value={grievanceForm.studentName}
                onChange={(e) => setGrievanceForm({ ...grievanceForm, studentName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Student's Roll Number"
                value={grievanceForm.studentRollNumber}
                onChange={(e) => setGrievanceForm({ ...grievanceForm, studentRollNumber: e.target.value })}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#4285F4' }}>
            Grievance Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Category of Grievance</InputLabel>
                <Select
                  value={grievanceForm.category}
                  onChange={(e) => setGrievanceForm({ ...grievanceForm, category: e.target.value })}
                  label="Category of Grievance"
                >
                  <MenuItem value="academic">Academic Issues</MenuItem>
                  <MenuItem value="disciplinary">Disciplinary Concerns</MenuItem>
                  <MenuItem value="safety">Safety & Security</MenuItem>
                  <MenuItem value="teacher">Teacher/Staff Behavior</MenuItem>
                  <MenuItem value="facilities">Facilities & Infrastructure</MenuItem>
                  <MenuItem value="bullying">Bullying/Harassment</MenuItem>
                  <MenuItem value="administrative">Administrative Issues</MenuItem>
                  <MenuItem value="other">Others (Specify)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {grievanceForm.category === 'other' && (
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Specify Category"
                  value={grievanceForm.otherCategory}
                  onChange={(e) => setGrievanceForm({ ...grievanceForm, otherCategory: e.target.value })}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Description of the Issue"
                multiline
                rows={4}
                value={grievanceForm.description}
                onChange={(e) => setGrievanceForm({ ...grievanceForm, description: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Date of Incident"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={grievanceForm.dateOfIncident}
                onChange={(e) => setGrievanceForm({ ...grievanceForm, dateOfIncident: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="file"
                label="Supporting Documents"
                InputLabelProps={{ shrink: true }}
                onChange={handleFileChange}
                helperText="Upload any relevant documents (PDF, JPG, PNG)"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Preferred Resolution"
                multiline
                rows={2}
                value={grievanceForm.preferredResolution}
                onChange={(e) => setGrievanceForm({ ...grievanceForm, preferredResolution: e.target.value })}
                helperText="Please describe how you would like this issue to be resolved"
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ px: 4 }}
            >
              Submit Grievance
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Pgrievance;