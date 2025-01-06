import React from 'react';
import './index.css';

import UserProfile from "./pages/UserProfile";
import Instruction from "./pages/Instruction";
import Internships from "./pages/Internships";
import ApplyNow from "./pages/ApplyNow";
import CurrStatus from "./pages/CurrStatus";
import About from "./pages/About";
import Dairy from "./pages/Dairy";
import Feedback from "./pages/Feedback";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/Userprofile" element={<UserProfile />} />
          <Route path="/Instruction" element={<Instruction />} />
          <Route path="/Internships" element={<Internships />} />
          <Route path="/Applynow" element={<ApplyNow />} />
          <Route path="/CurrStatus" element={<CurrStatus />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dairy" element={<Dairy />} />
          <Route path="/Feedback" element={<Feedback />} />
          {/* Kamathi Routes tika dala hadaganna */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
