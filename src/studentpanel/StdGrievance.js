import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  MenuItem,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  Container,
} from '@mui/material';
import {
  School as SchoolIcon,
  Home as HomeIcon,
  Restaurant as RestaurantIcon,
  Build as BuildIcon,
  LibraryBooks as LibraryBooksIcon,
  Sports as SportsIcon,
  Payment as PaymentIcon,
  CardGiftcard as CardGiftcardIcon,
  Gavel as GavelIcon,
  MoreHoriz as MoreHorizIcon,
  AttachFile as AttachFileIcon,
} from '@mui/icons-material';
const grievanceCategories = [
  { id: 'academic', name: 'Academic', icon: <SchoolIcon /> },
  { id: 'hostel', name: 'Hostel', icon: <HomeIcon /> },
  { id: 'canteen', name: 'Canteen', icon: <RestaurantIcon /> },
  { id: 'infrastructure', name: 'Infrastructure', icon: <BuildIcon /> },
  { id: 'library', name: 'Library', icon: <LibraryBooksIcon /> },
  { id: 'sports', name: 'Sports Issue', icon: <SportsIcon /> },
  { id: 'fees', name: 'Fees Issue', icon: <PaymentIcon /> },
  { id: 'scholarship', name: 'Scholarship', icon: <CardGiftcardIcon /> },
  { id: 'disciplinary', name: 'Disciplinary', icon: <GavelIcon /> },
  { id: 'others', name: 'Others', icon: <MoreHorizIcon /> },
];

const StdGrievance = () => {
     const [selectedCategory, setSelectedCategory] = useState(null);
     const [grievanceForm, setGrievanceForm] = useState({
         title: '',
         description: '',
         priority: 'medium',
         attachments: [],
         studentDetails: {
           name: '',
           rollNumber: '',
           department: '',
           year: '',
           semester: '',
           contactNumber: '',
           email: '',
         },
         categorySpecific: {
           academic: {
             subject: '',
             facultyName: '',
             issueType: '',
           },
           hostel: {
             roomNumber: '',
             block: '',
             issueType: '',
           },
           canteen: {
             foodItem: '',
             date: '',
             time: '',
           },
           infrastructure: {
             location: '',
             equipment: '',
             issueType: '',
           },
           library: {
             bookTitle: '',
             issueType: '',
           },
           sports: {
             facility: '',
             equipment: '',
             issueType: '',
           },
           fees: {
             feeType: '',
             amount: '',
             transactionId: '',
           },
           scholarship: {
             scholarshipType: '',
             applicationNumber: '',
           },
           disciplinary: {
             incidentDate: '',
             incidentType: '',
             description: '',
           },
           others: {
             issueType: '',
             additionalDetails: '',
           },
         },
       });

     const handleFormClose = () => {
        setSelectedCategory(null);
        setGrievanceForm({
          title: '',
          description: '',
          priority: 'medium',
          attachments: [],
          studentDetails: {
            name: '',
            rollNumber: '',
            department: '',
            year: '',
            semester: '',
            contactNumber: '',
            email: '',
          },
          categorySpecific: {
            academic: {
              subject: '',
              facultyName: '',
              issueType: '',
            },
            hostel: {
              roomNumber: '',
              block: '',
              issueType: '',
            },
            canteen: {
              foodItem: '',
              date: '',
              time: '',
            },
            infrastructure: {
              location: '',
              equipment: '',
              issueType: '',
            },
            library: {
              bookTitle: '',
              issueType: '',
            },
            sports: {
              facility: '',
              equipment: '',
              issueType: '',
            },
            fees: {
              feeType: '',
              amount: '',
              transactionId: '',
            },
            scholarship: {
              scholarshipType: '',
              applicationNumber: '',
            },
            disciplinary: {
              incidentDate: '',
              incidentType: '',
              description: '',
            },
            others: {
              issueType: '',
              additionalDetails: '',
            },
          },
        });
      };
      const handleCategoryClick = (category) => {
        setSelectedCategory(category);
      };
    
      const handleFormSubmit = () => {
        // Handle form submission logic here
        console.log('Grievance Form Data:', {
          category: selectedCategory,
          ...grievanceForm,
        });
        handleFormClose();
      };
    
  
    const renderGrievanceForm = () => {
        const category = selectedCategory?.id;
        return (
          <Dialog
            open={Boolean(selectedCategory)}
            onClose={handleFormClose}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle>
              Submit {selectedCategory?.name} Grievance
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mt: 2 }}>
                {/* Student Details Section */}
                <Typography variant="h6" gutterBottom>
                  Student Details
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      value={grievanceForm.studentDetails.name}
                      onChange={(e) => setGrievanceForm({
                        ...grievanceForm,
                        studentDetails: {
                          ...grievanceForm.studentDetails,
                          name: e.target.value
                        }
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Roll Number"
                      value={grievanceForm.studentDetails.rollNumber}
                      onChange={(e) => setGrievanceForm({
                        ...grievanceForm,
                        studentDetails: {
                          ...grievanceForm.studentDetails,
                          rollNumber: e.target.value
                        }
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Department"
                      value={grievanceForm.studentDetails.department}
                      onChange={(e) => setGrievanceForm({
                        ...grievanceForm,
                        studentDetails: {
                          ...grievanceForm.studentDetails,
                          department: e.target.value
                        }
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Year"
                      value={grievanceForm.studentDetails.year}
                      onChange={(e) => setGrievanceForm({
                        ...grievanceForm,
                        studentDetails: {
                          ...grievanceForm.studentDetails,
                          year: e.target.value
                        }
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Semester"
                      value={grievanceForm.studentDetails.semester}
                      onChange={(e) => setGrievanceForm({
                        ...grievanceForm,
                        studentDetails: {
                          ...grievanceForm.studentDetails,
                          semester: e.target.value
                        }
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Contact Number"
                      value={grievanceForm.studentDetails.contactNumber}
                      onChange={(e) => setGrievanceForm({
                        ...grievanceForm,
                        studentDetails: {
                          ...grievanceForm.studentDetails,
                          contactNumber: e.target.value
                        }
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      value={grievanceForm.studentDetails.email}
                      onChange={(e) => setGrievanceForm({
                        ...grievanceForm,
                        studentDetails: {
                          ...grievanceForm.studentDetails,
                          email: e.target.value
                        }
                      })}
                    />
                  </Grid>
                </Grid>
    
                {/* Grievance Details Section */}
                <Typography variant="h6" gutterBottom>
                  Grievance Details
                </Typography>
                <TextField
                  fullWidth
                  label="Title"
                  value={grievanceForm.title}
                  onChange={(e) => setGrievanceForm({ ...grievanceForm, title: e.target.value })}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={4}
                  value={grievanceForm.description}
                  onChange={(e) => setGrievanceForm({ ...grievanceForm, description: e.target.value })}
                  sx={{ mb: 2 }}
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Priority</InputLabel>
                  <Select
                    value={grievanceForm.priority}
                    label="Priority"
                    onChange={(e) => setGrievanceForm({ ...grievanceForm, priority: e.target.value })}
                  >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                  </Select>
                </FormControl>
    
                {/* Category Specific Fields */}
                <Typography variant="h6" gutterBottom>
                  {selectedCategory?.name} Specific Details
                </Typography>
                {category === 'academic' && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        value={grievanceForm.categorySpecific.academic.subject}
                        onChange={(e) => setGrievanceForm({
                          ...grievanceForm,
                          categorySpecific: {
                            ...grievanceForm.categorySpecific,
                            academic: {
                              ...grievanceForm.categorySpecific.academic,
                              subject: e.target.value
                            }
                          }
                        })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Faculty Name"
                        value={grievanceForm.categorySpecific.academic.facultyName}
                        onChange={(e) => setGrievanceForm({
                          ...grievanceForm,
                          categorySpecific: {
                            ...grievanceForm.categorySpecific,
                            academic: {
                              ...grievanceForm.categorySpecific.academic,
                              facultyName: e.target.value
                            }
                          }
                        })}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Issue Type</InputLabel>
                        <Select
                          value={grievanceForm.categorySpecific.academic.issueType}
                          label="Issue Type"
                          onChange={(e) => setGrievanceForm({
                            ...grievanceForm,
                            categorySpecific: {
                              ...grievanceForm.categorySpecific,
                              academic: {
                                ...grievanceForm.categorySpecific.academic,
                                issueType: e.target.value
                              }
                            }
                          })}
                        >
                          <MenuItem value="grading">Grading Issue</MenuItem>
                          <MenuItem value="attendance">Attendance Issue</MenuItem>
                          <MenuItem value="syllabus">Syllabus Issue</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
    
                {category === 'hostel' && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Room Number"
                        value={grievanceForm.categorySpecific.hostel.roomNumber}
                        onChange={(e) => setGrievanceForm({
                          ...grievanceForm,
                          categorySpecific: {
                            ...grievanceForm.categorySpecific,
                            hostel: {
                              ...grievanceForm.categorySpecific.hostel,
                              roomNumber: e.target.value
                            }
                          }
                        })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Block"
                        value={grievanceForm.categorySpecific.hostel.block}
                        onChange={(e) => setGrievanceForm({
                          ...grievanceForm,
                          categorySpecific: {
                            ...grievanceForm.categorySpecific,
                            hostel: {
                              ...grievanceForm.categorySpecific.hostel,
                              block: e.target.value
                            }
                          }
                        })}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Issue Type</InputLabel>
                        <Select
                          value={grievanceForm.categorySpecific.hostel.issueType}
                          label="Issue Type"
                          onChange={(e) => setGrievanceForm({
                            ...grievanceForm,
                            categorySpecific: {
                              ...grievanceForm.categorySpecific,
                              hostel: {
                                ...grievanceForm.categorySpecific.hostel,
                                issueType: e.target.value
                              }
                            }
                          })}
                        >
                          <MenuItem value="maintenance">Maintenance Issue</MenuItem>
                          <MenuItem value="cleanliness">Cleanliness Issue</MenuItem>
                          <MenuItem value="security">Security Issue</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
    
                {/* Add similar sections for other categories */}
    
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<AttachFileIcon />}
                  sx={{ mt: 2, mb: 2 }}
                >
                  Attach Files
                  <input
                    type="file"
                    hidden
                    multiple
                    onChange={(e) => setGrievanceForm({ ...grievanceForm, attachments: e.target.files })}
                  />
                </Button>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleFormClose}>Cancel</Button>
              <Button onClick={handleFormSubmit} variant="contained" color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        );
      };
    
      const renderGrievance = () => (
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Grievance Section
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Select a category to submit your grievance
            </Typography>
          </Box>
    
          <Grid container spacing={3}>
            {grievanceCategories.map((category) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: 6,
                    },
                  }}
                  onClick={() => handleCategoryClick(category)}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{category.icon}</Box>
                    <Typography variant="h6">{category.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
    
          {renderGrievanceForm()}
        </Container>
      );
      return renderGrievance();
}

export default StdGrievance