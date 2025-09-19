import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file

import Navbar from "./Navbar";
import FeaturedSkills from "./FeaturedSkills";
import Testimonial from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  const [stats, setStats] = useState({
    members: 0,
    skills: 0,
    swaps: 0,
    rating: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/stats"); // Backend API
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();

    // Optional: auto-refresh every 10s
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>
            Exchange <span className="highlight">Skills</span>,{" "}
            <span className="highlight-alt">Expand Horizons</span>
          </h1>
          <p>
            Connect with others in your community to learn new skills and share
            your expertise. No money needed – just passion and willingness to teach
            and learn.
          </p>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="What skill do you want to learn today?"
            />
            <button className="search-btn">Search</button>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="/browse">
            <button className="primary-btn">Browse Skills →</button> </a>
            <a href="/browse">

            <button className="secondary-btn">Offer Your Skills</button> </a>
          </div>
        </div>
      </section>
      <section className="stats-section">
      <div className="stat-card">
        <div className="stat-icon members">👥</div>
        <h3>{stats.members}K+</h3>
        <p>Active Members</p>
      </div>
      <div className="stat-card">
        <div className="stat-icon skills">📖</div>
        <h3>{stats.skills}+</h3>
        <p>Skills Available</p>
      </div>
      <div className="stat-card">
        <div className="stat-icon swaps">⚡</div>
        <h3>{stats.swaps}K+</h3>
        <p>Successful Swaps</p>
      </div>
      <div className="stat-card">
        <div className="stat-icon rating">⭐</div>
        <h3>{stats.rating}</h3>
        <p>Average Rating</p>
      </div>
    </section>
    <FeaturedSkills />
    <Testimonial />
    <section className="cta-section">
      <h2>Ready to Start Your Skill Journey?</h2>
      <p>
        Join thousands of learners and teachers in our vibrant community today
      </p>
      <Link to="/browse-skills" className="cta-btn">
        Get Started Now →
      </Link>
    </section>
    <Footer />
    </div>
  );
};

export default Home;
