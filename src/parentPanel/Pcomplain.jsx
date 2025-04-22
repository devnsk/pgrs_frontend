import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Assignment as AssignmentIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';

const Pcomplain = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        Complaint Status
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Complaint Timeline
            </Typography>
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  Resolved
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="success">
                    <CheckCircleIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">Complaint #1234</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hostel maintenance issue resolved
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Resolved on: 2024-03-15
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  Pending
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <PendingIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">Complaint #1235</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mess food quality issue under review
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Filed on: 2024-03-10
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  Pending for Assignment
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="info">
                    <AssignmentIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">Complaint #1236</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Academic issue waiting for assignment
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Filed on: 2024-03-05
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  Complaint Filed
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="error">
                    <ErrorIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">Complaint #1237</Typography>
                  <Typography variant="body2" color="text.secondary">
                    New complaint filed about hostel facilities
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Filed on: 2024-03-01
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pcomplain;