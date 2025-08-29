import React from "react";
// import { FaHome, FaSearch, FaTachometerAlt, FaEnvelope } from "react-icons/fa";
import "./Navbar.css"; // Import the CSS file
import logo from "../assets/logo.png";
import browse from "../assets/browse.png";
import home from "../assets/home_icon.png";
import dashboard from "../assets/dashboard.png";
import messages from "../assets/messages.png";


const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img
          src={logo} // Replace with your logo image path
          alt="TalentZest Logo"
          className="logo-img"
        />
        <span className="logo-text">TalentZest</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="/home" className="active">
                <img src={home} alt="Home" className="icon" /> Home
          </a>
        </li>
        <li>
          <a href="/browse">
            <img src={browse} alt="Browse Skills" className="icon" /> Browse Skills
          </a>
        </li>
        <li>
          <a href="/dashboard">
            <img src={dashboard} alt="Dashboard" className="icon" />  Dashboard
          </a>
        </li>
        <li>
          <a href="/messages">
            <img src={messages} alt="Messages" className="icon" />  Messages
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
