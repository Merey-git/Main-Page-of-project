import React, { useState } from "react";
import PropTypes from 'prop-types';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 
  
  const handleChange = (e) => { 
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log(formData); 
    setIsSubmitted(true); 
    setFormData({ name: "", email: "", message: "" }); 
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-background">
      <div className="contact-overlay">
        <h1>Contact us</h1>
        <p>If you have questions, suggestions or requests, write to us!</p>
        
        {isSubmitted && <div className="success-message">Message sent</div>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {
  onSubmit: PropTypes.func.isRequired // Проверка, что передается функция для обработки отправки
};

export default Contact;
