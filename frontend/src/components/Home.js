import React from "react";
import "./Home.css"; // Import the CSS file
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      {/* <nav className="navbar">
        <div className="logo">TalentZest</div>
        <ul className="nav-links">
          <li><a href="/home" className="active">Home</a></li>
          <li><a href="/browse">Browse Skills</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/messages">Messages</a></li>
        </ul>
      </nav> */}
      <Navbar/>

      {/* Hero Section */}
      {/* <section className="hero">
        <h1>
          Exchange <span className="highlight">Skills</span>,{" "}
          <span className="highlight-alt">Expand Horizons</span>
        </h1>
        <p>
          Connect with others in your community to learn new skills and share
          your expertise.  
          No money needed – just passion and willingness to teach and learn.
        </p> */}

        {/* Search Bar */}
        {/* <div className="search-bar">
          <input type="text" placeholder="What skill do you want to learn today?" />
          <button>Search</button>
        </div> */}

        {/* Call to Action Buttons */}
        {/* <div className="cta-buttons">
          <button className="primary-btn">Browse Skills →</button>
          <button className="secondary-btn">Offer Your Skills</button>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
