import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getCurrentUser } from "./utils/auth";
// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Admins from "./superAdminPanel/Admins";
import Employees from "./superAdminPanel/Employees";
import Students from "./superAdminPanel/Students";
import Layout from "./superAdminPanel/Layout";
import Dashboard from "./superAdminPanel/Dashboard";

import AdLayout from "./adminpanel/AdLayout";
import AdEmployee from "./adminpanel/AdEmployee";
import AdStudent from "./adminpanel/AdStudent";
import Adepartment from "./adminpanel/Adepartment";
import AdRoles from "./adminpanel/AdRoles";
import AdComplain from "./adminpanel/AdComplain";
import Adashboard from "./adminpanel/Adashboard";

import StdLayout from "./studentpanel/StdLayout";
import Stdashboard from "./studentpanel/Stdashboard";
import StdGrievance from "./studentpanel/StdGrievance";
import StdComplain from "./studentpanel/StdComplain";
import StdFeedback from "./studentpanel/StdFeedback";
import ErrorBoundary from "./parentPanel/ErrorBoundary";
import Pfeedback from "./parentPanel/Pfeedback";
import Pcomplain from "./parentPanel/Pcomplain";
import Pgrievance from "./parentPanel/Pgrievance";
import Pdashboard from "./parentPanel/Pdashboard";
import ParLayout from "./parentPanel/ParLayout";

import EmpLayout from "./employeepanel/EmpLayout";
import Empdashboard from "./employeepanel/Empdashboard";
import EmpComplaintinbox from "./employeepanel/EmpComplaintinbox";
import EmpComplaintStatus from "./employeepanel/EmpComplaintStatus";
import EmpStudent from "./employeepanel/EmpStudent";

// Keep the theme configuration

const theme = createTheme({
  palette: {
    primary: { main: "#4285F4" },

    secondary: { main: "#34A853" },

    error: { main: "#EA4335" },

    warning: { main: "#FBBC05" },
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    h4: { fontWeight: 500 },

    subtitle2: { fontWeight: 500 },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={
              getCurrentUser() ? (
                <Navigate
                  to={`/${getCurrentUser().role.toLowerCase()}/dashboard`}
                />
              ) : (
                <Login />
              )
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Dashboard Routes */}
          <Route path="/superadmin" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admin" element={<Admins />} />
            <Route path="employee" element={<Employees />} />
            <Route path="student" element={<Students />} />
          </Route>
          <Route path="/admin" element={<AdLayout />}>
            <Route path="dashboard" element={<Adashboard />} />
            <Route path="employees" element={<AdEmployee />} />
            <Route path="students" element={<AdStudent />} />
            <Route path="Departments" element={<Adepartment />} />
            <Route path="role" element={<AdRoles />} />
            <Route path="complain inbox" element={<AdComplain />} />
          </Route>
          <Route path="/student" element={<StdLayout />}>
            <Route path="dashboard" element={<Stdashboard />} />
            <Route path="grievance" element={<StdGrievance />} />
            <Route path="complaint status" element={<StdComplain />} />
            <Route path="feedback" element={<StdFeedback />} />
          </Route>
          <Route path="/employee" element={<EmpLayout />}>
            <Route path="dashboard" element={<Empdashboard />} />
            <Route path="complaint inbox" element={<EmpComplaintinbox />} />
            <Route path="complaint status" element={<EmpComplaintStatus />} />
            <Route path="student" element={<EmpStudent />} />
          </Route>


          <Route
            path="/parent"
            element={
              <ErrorBoundary>
                <ParLayout />
              </ErrorBoundary>
            }
          >
            <Route path="dashboard" element={<Pdashboard />} />
            <Route path="grievance" element={<Pgrievance />} />
            <Route path="complaint status" element={<Pcomplain />} />
            <Route path="feedback" element={<Pfeedback />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
