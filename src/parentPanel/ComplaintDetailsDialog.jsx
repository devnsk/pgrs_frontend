import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Grid,
  Typography,
  Button,
} from '@mui/material';

const ComplaintDetailsDialog = ({ complaint, onClose }) => {
  return (
    <Dialog open={!!complaint} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Complaint Details</DialogTitle>
      <DialogContent>
        {complaint && (
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Complaint ID: {complaint.id}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Type: {complaint.type}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Status: {complaint.status}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Description:</Typography>
                <Typography>{complaint.description}</Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComplaintDetailsDialog;