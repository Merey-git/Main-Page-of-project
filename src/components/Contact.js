import React from "react";
import "../styles.css";

const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact-overlay">
        <h1>Contact us</h1>
        <p>If you have questions, suggestions or requests, write to us!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
