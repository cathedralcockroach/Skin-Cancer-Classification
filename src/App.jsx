import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About/About';
import Login from './PatientInfo/PatientInfo';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
