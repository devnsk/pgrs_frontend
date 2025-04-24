import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';

const ComplaintDialog = ({ open, onClose }) => {
  const [complaintForm, setComplaintForm] = useState({
    type: '',
    description: '',
  });

  const handleComplaintSubmit = () => {
    console.log('Complaint Form Data:', complaintForm);
    onClose();
    setComplaintForm({ type: '', description: '' });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>File New Complaint</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Complaint Type</InputLabel>
              <Select
                value={complaintForm.type}
                onChange={(e) => setComplaintForm({ ...complaintForm, type: e.target.value })}
                label="Complaint Type"
              >
                <MenuItem value="hostel">Hostel</MenuItem>
                <MenuItem value="mess">Mess</MenuItem>
                <MenuItem value="academic">Academic</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              value={complaintForm.description}
              onChange={(e) => setComplaintForm({ ...complaintForm, description: e.target.value })}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleComplaintSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComplaintDialog;