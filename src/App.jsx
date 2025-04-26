import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Events from './pages/Events';
import Groups from './pages/Groups';
import Login from './pages/Login';
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <NavBar />
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            }
          />
          <Route
            path="/groups"
            element={
              <ProtectedRoute>
                <Groups />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route index element={<Home />} />
        </Routes>
      
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
