import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import PopupMessage from "./PopupMessage";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// import Home from "./Home";


function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [popupType, setPopupType] = useState(""); // "success" or "error"
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // for redirecting  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        localStorage.setItem("token", data.token); // Save token for authentication
       
        setTimeout(() => {
          navigate("/home"); // redirect after 1 sec
        }, 1000);
        
    } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      setMessage("Error connecting to server. Please try again later.");
    }

    // Show popup
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">Login</button>
        </form>
         {/* Show popup message */}
        {showPopup && (
        <PopupMessage
            message={message}
            type={popupType}
            onClose={() => setShowPopup(false)} // ✅ pass onClose
        />
        )}

        <p className="signup-link">
          Don’t have an account? <a href="/">Sign up here</a>
        </p>
      </div>
      
    </div>
  );
}

export default Login;
