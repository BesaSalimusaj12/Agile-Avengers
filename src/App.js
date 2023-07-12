import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Departamentet from "./pages/Departamentet";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fakulteti/departamentet" element={<Departamentet />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
