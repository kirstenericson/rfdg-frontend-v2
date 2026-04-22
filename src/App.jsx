import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import { NavBar } from "./features/layout/components";
import Events from './pages/Events';
import Groups from './pages/Groups';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import EventSignUp from './pages/EventSignUp';
import EventCreate from "./pages/EventCreate";

function App() {
  return (
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
            path="/groups"
            element={
              // <ProtectedRoute>
                <Groups />
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
          <Route index element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;