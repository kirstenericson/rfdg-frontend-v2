import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Events from './pages/Events';
import Groups from './pages/Groups';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import EventSignUp from './pages/EventSignUp';
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <AuthProvider>
      <NavBar />
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
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
          <Route
            path="/events/:id"
            element={
              <ProtectedRoute>
                <EventSignUp />
              </ProtectedRoute>
            }
          />
          <Route index element={<Home />} />
        </Routes>
      
    </AuthProvider>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
