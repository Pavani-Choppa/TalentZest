import React, { useState } from "react";
import "./BrowseSkills.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BrowseSkills = () => {
  const [view, setView] = useState("grid");

  return (
    <div>
        <Navbar />
        <section className="browse-skills">
        <div className="browse-header">
            <h2>Browse Skills</h2>
            <p>Discover amazing skills from our community</p>
        </div>

        <div className="browse-controls">
            {/* Search */}
            <input type="text" placeholder="🔍 Search skills..." />

            {/* Category Filter */}
            <select>
            <option value="all">All</option>
            <option value="tech">Tech</option>
            <option value="art">Art</option>
            <option value="business">Business</option>
            </select>

            {/* Sort */}
            <select>
            <option value="highest">Highest Rated</option>
            <option value="latest">Latest</option>
            <option value="popular">Most Popular</option>
            </select>

            {/* View Toggle */}
            <div className="view-toggle">
            <button
                className={view === "grid" ? "active" : ""}
                onClick={() => setView("grid")}
            >
                ⬛
            </button>
            <button
                className={view === "list" ? "active" : ""}
                onClick={() => setView("list")}
            >
                ☰
            </button>
            </div>
        </div>
        </section>
        <Footer />
    </div>
  );
};

export default BrowseSkills;
