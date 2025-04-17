import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  MenuItem,
  Grid,
  Paper,
  Button,
  TextField,
  Rating,
  FormControl,
  InputLabel,
  Select,
  Container,
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material';

const StdFeedback = () => {
     const [newFeedbackOpen, setNewFeedbackOpen] = useState(false);
    const [feedbackForm, setFeedbackForm] = useState({
        studentDetails: {
          name: '',
          rollNumber: '',
          department: '',
          year: ''
        },
        type: '',
        subject: '',
        description: '',
        rating: 0,
        anonymous: false
      });
      const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        // Handle feedback submission logic here
        console.log('Feedback Form Data:', feedbackForm);
        handleNewFeedbackClose();
      };
      const handleNewFeedbackOpen = () => {
        setNewFeedbackOpen(true);
      };
    
      const handleNewFeedbackClose = () => {
        setNewFeedbackOpen(false);
        setFeedbackForm({
          studentDetails: {
            name: '',
            rollNumber: '',
            department: '',
            year: ''
          },
          type: '',
          subject: '',
          description: '',
          rating: 0,
          anonymous: false
        });
      };
       return (
        <>
         <Container maxWidth="md">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Feedback Form
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Share your feedback to help us improve our services
            </Typography>
          </Box>
    
          <Paper sx={{ p: 4 }}>
            <form onSubmit={handleFeedbackSubmit}>
              <Grid container spacing={3}>
                {/* Student Details */}
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Student Details
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={feedbackForm.studentDetails.name}
                    onChange={(e) => setFeedbackForm({
                      ...feedbackForm,
                      studentDetails: {
                        ...feedbackForm.studentDetails,
                        name: e.target.value
                      }
                    })}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Roll Number"
                    value={feedbackForm.studentDetails.rollNumber}
                    onChange={(e) => setFeedbackForm({
                      ...feedbackForm,
                      studentDetails: {
                        ...feedbackForm.studentDetails,
                        rollNumber: e.target.value
                      }
                    })}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    value={feedbackForm.studentDetails.department}
                    onChange={(e) => setFeedbackForm({
                      ...feedbackForm,
                      studentDetails: {
                        ...feedbackForm.studentDetails,
                        department: e.target.value
                      }
                    })}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Year"
                    value={feedbackForm.studentDetails.year}
                    onChange={(e) => setFeedbackForm({
                      ...feedbackForm,
                      studentDetails: {
                        ...feedbackForm.studentDetails,
                        year: e.target.value
                      }
                    })}
                    required
                  />
                </Grid>
    
                {/* Feedback Details */}
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Feedback Details
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Feedback Type</InputLabel>
                    <Select
                      value={feedbackForm.type}
                      label="Feedback Type"
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, type: e.target.value })}
                    >
                      <MenuItem value="academic">Academic</MenuItem>
                      <MenuItem value="facilities">Facilities</MenuItem>
                      <MenuItem value="services">Services</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    value={feedbackForm.subject}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, subject: e.target.value })}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Feedback"
                    multiline
                    rows={4}
                    value={feedbackForm.description}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, description: e.target.value })}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Typography variant="subtitle1" gutterBottom>
                      Rating
                    </Typography>
                    <Rating
                      name="feedback-rating"
                      value={feedbackForm.rating}
                      onChange={(event, newValue) => {
                        setFeedbackForm({ ...feedbackForm, rating: newValue });
                      }}
                      size="large"
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: 'primary.main',
                        },
                        '& .MuiRating-iconHover': {
                          color: 'primary.light',
                        },
                      }}
                    />
                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="caption" color="text.secondary">
                        Poor
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Excellent
                      </Typography>
                    </Box>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={feedbackForm.anonymous}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, anonymous: e.target.checked })}
                      />
                    }
                    label="Submit anonymously"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Submit Feedback
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
        </>
       )
}

export default StdFeedback