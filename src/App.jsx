import Header from "./component/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Kamathi Routes tika dala hadaganna */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
