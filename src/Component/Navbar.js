import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Service/Services";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
          <h3 className="logo">Coffe Senja</h3>

          <ul className="nav-links">
                <Link style={{textDecoration:'none'}} to="/">
                    <li>Home</li>
                </Link >
                <Link style={{textDecoration:'none'}} to="/about">
                    <li>About</li>
                </Link>
                <Link style={{textDecoration:'none'}} to="/services">
                    <li>Services</li>
                </Link>
                <Link style={{textDecoration:'none'}} to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
