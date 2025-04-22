
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Events from './pages/Events';
import Groups from './pages/Groups';


function App() {

  return (
    <><NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/groups" element={<Groups />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
