import React, { useEffect, useState } from "react";
import "./FeaturedSkills.css";

const FeaturedSkills = () => {
  const [skills, setSkills] = useState([
     // Dummy content (shown by default)
    // { id: 1, name: "Web Development", icon: "🌐" },
    // { id: 2, name: "Graphic Design", icon: "🎨" },
    // { id: 3, name: "Data Science", icon: "📊" },
  ]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/skills");
        const data = await res.json();
        setSkills(data);
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section className="featured-skills">
      <h2>Featured Skills</h2>
      <p>Discover amazing skills offered by our talented community members</p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.title} />
            <div className="skill-info">
              <span className="category">{skill.category}</span>
              <h3>{skill.title}</h3>
              <p>by {skill.author}</p>
              <p className="rating">⭐ {skill.rating}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="view-btn">View All Skills →</button>
    </section>
  );
};

export default FeaturedSkills;
