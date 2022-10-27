import "./App.css";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./routes/Company";
import Staff from "./routes/Staff";
import Services from "./routes/Services";
import GetStaff from "./routes/GetStaff";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route exact path="company" element={<GetStaff />} />
        <Route exact path="staff" element={<Staff />} />
        <Route exact path="services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
