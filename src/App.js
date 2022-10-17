
import './App.css';
import Home from './routes/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from './routes/Company';
import Staff from './routes/Staff';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
  
        <Route exact path="company" element={<Company/>} />
        <Route exact path="staff" element={<Staff/>} />
   
    </Routes>
  </BrowserRouter>
  );
}

export default App;
