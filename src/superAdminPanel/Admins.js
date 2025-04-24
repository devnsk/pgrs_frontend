import React, { useState } from "react";
import {
  Button,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import AddAdminForm from "../pages/AddAdminForm";
import AddIcon from '@mui/icons-material/Add';

const AdminManagement = () => {
  const [isAddAdminFormOpen, setIsAddAdminFormOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    status: "Active",
  });

  const handleAddAdminClick = () => {
    setIsAddAdminFormOpen(true);
  };

  const handleAddAdminClose = () => {
    setIsAddAdminFormOpen(false);
  };

  const handleAddAdminSubmit = (formData) => {
    console.log("New Admin Data:", formData);
    setIsAddAdminFormOpen(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4">Admin Management</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddAdminClick}
          >
            Add Admin
          </Button>
          <AddAdminForm
            open={isAddAdminFormOpen}
            handleClose={handleAddAdminClose}
            onSubmit={handleAddAdminSubmit}
          />
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  id: 1,
                  name: "John Doe",
                  email: "john.doe@example.com",
                  department: "Academic",
                  status: "Active",
                },
                {
                  id: 2,
                  name: "Jane Smith",
                  email: "jane.smith@example.com",
                  department: "Administration",
                  status: "Active",
                },
                {
                  id: 3,
                  name: "Robert Johnson",
                  email: "robert.j@example.com",
                  department: "Finance",
                  status: "Inactive",
                },
                {
                  id: 4,
                  name: "Emily Davis",
                  email: "emily.d@example.com",
                  department: "Student Affairs",
                  status: "Active",
                },
                {
                  id: 5,
                  name: "Michael Brown",
                  email: "michael.b@example.com",
                  department: "IT",
                  status: "Active",
                },
              ].map((admin) => (
                <TableRow key={admin.id}>
                  <TableCell>{admin.name}</TableCell>
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>{admin.department}</TableCell>
                  <TableCell>
                    <Chip
                      label={admin.status}
                      color={admin.status === "Active" ? "success" : "error"}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" color="primary" onClick={handleOpen}>
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Edit Dialog */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Details</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              fullWidth
              margin="dense"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <TextField
              label="Email"
              fullWidth
              margin="dense"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <TextField
              select
              label="Department"
              fullWidth
              margin="dense"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Academic">Academic</MenuItem>
              <MenuItem value="Administration">Administration</MenuItem>
            </TextField>
            <TextField
              select
              label="Status"
              fullWidth
              margin="dense"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default AdminManagement;
