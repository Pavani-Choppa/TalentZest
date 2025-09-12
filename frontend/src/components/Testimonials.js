// components/Testimonials.js
import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Community Says</h2>
      <p className="subtitle">
        Real stories from real people who've transformed their lives through skill sharing
      </p>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="message">"{t.message}"</p>
            <div className="user-info">
              <img src={t.image} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
