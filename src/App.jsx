import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme/theme';
import Home from './pages/Home';
import { NavBar } from "./features/layout/components";
import Events from './pages/Events';
import Cards from './pages/Cards';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import EventSignUp from './pages/EventSignUp';
import EventCreate from "./pages/EventCreate";
import PayoutCalculation from "./pages/PayoutCalculation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/events"
              element={
                // <ProtectedRoute>
                  <Events />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/cards"
              element={
                // <ProtectedRoute>
                  <Cards />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/events/:id"
              element={
                // <ProtectedRoute>
                  <EventSignUp />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/events/new"
              element={
                //<ProtectedRoute>
                  <EventCreate />
                //</ProtectedRoute>
              }
            />
            <Route
              path="/payout-calculation"
              element={
                //<ProtectedRoute>
                  <PayoutCalculation />
                //</ProtectedRoute>
              }
            />
            <Route index element={<Home />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;