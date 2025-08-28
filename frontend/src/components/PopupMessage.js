import React, { useEffect } from "react";
import './PopupMessage.css'

const PopupMessage = ({ message, type, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 3000); // Auto close after 3 sec
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className={`popup ${type}`}>
      {message}
    </div>
  );
};

export default PopupMessage;
