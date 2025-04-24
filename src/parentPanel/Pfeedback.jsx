import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
  Rating,
} from '@mui/material';

const Pfeedback = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    rating: 0,
    comment: '',
    category: '',
    suggestions: '',
    recommendation: '',
    contactNumber: '',
  });

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Form Data:', feedbackForm);
    setFeedbackForm({
      rating: 0,
      comment: '',
      category: '',
      suggestions: '',
      recommendation: '',
      contactNumber: '',
    });
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Feedback Form
        </Typography>
        <form onSubmit={handleFeedbackSubmit}>
          <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#4285F4' }}>
            Overall Experience
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                How would you rate your overall experience with the grievance system?
              </Typography>
              <Rating
                name="overall-rating"
                value={feedbackForm.rating}
                onChange={(event, newValue) => {
                  setFeedbackForm({ ...feedbackForm, rating: newValue });
                }}
                size="large"
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#4285F4' }}>
            Specific Feedback
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Feedback Category</InputLabel>
                <Select
                  value={feedbackForm.category}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, category: e.target.value })}
                  label="Feedback Category"
                >
                  <MenuItem value="grievance">Grievance Handling</MenuItem>
                  <MenuItem value="response">Response Time</MenuItem>
                  <MenuItem value="communication">Communication</MenuItem>
                  <MenuItem value="resolution">Resolution Process</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Your Feedback"
                multiline
                rows={4}
                value={feedbackForm.comment}
                onChange={(e) => setFeedbackForm({ ...feedbackForm, comment: e.target.value })}
                helperText="Please provide detailed feedback about your experience"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Suggestions for Improvement"
                multiline
                rows={3}
                value={feedbackForm.suggestions}
                onChange={(e) => setFeedbackForm({ ...feedbackForm, suggestions: e.target.value })}
                helperText="Any suggestions to improve our services"
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#4285F4' }}>
            Additional Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Would you recommend our service?</InputLabel>
                <Select
                  value={feedbackForm.recommendation}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, recommendation: e.target.value })}
                  label="Would you recommend our service?"
                >
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                  <MenuItem value="maybe">Maybe</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Number (Optional)"
                value={feedbackForm.contactNumber}
                onChange={(e) => setFeedbackForm({ ...feedbackForm, contactNumber: e.target.value })}
                helperText="If you'd like us to follow up with you"
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
              Submit Feedback
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Pfeedback;