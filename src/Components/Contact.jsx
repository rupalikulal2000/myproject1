import React, { useState } from 'react';
import './Contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formMessage, setFormMessage] = useState('');
  const [formMessageColor, setFormMessageColor] = useState('');
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormMessage("Please fill in all fields.");
      setFormMessageColor("red");
      return;
    }
    setFormMessage("Thank you for your message! We'll get back to you soon.");
    setFormMessageColor("green");
    // window.alert("Thank you for your message! We'll get back to you soon.");
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <div>
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Let us know how we can help you have a wonderful experience!</p>
      </section>
      <section className="contact-container">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
             <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
              required />
             <input type="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange}
              required/>
             <textarea id="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange}
              required />
             <button type="submit">Send Message</button>
             <p style={{ color: formMessageColor }}>{formMessage}</p>
          </form>
        </div>
        <div className="contact-info">
          <h2>Reach Us</h2>
          <p><strong>Address:</strong> GLOBAL BUSINESS HUB, 812, Kharadi, Pune, Maharashtra 411014</p>
          <p><strong>Phone:</strong> +91 234 567 890</p>
          <p><strong>Email:</strong> contact@formonex.com</p>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d121040.14552902068!2d73.86829008398377!3d18.55127841065314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sformonix%20solutions%20map%20location!5e0!3m2!1sen!2sin!4v1758597023833!5m2!1sen!2sin"
              width="100%" height="200"
              style={{ border: 0, borderRadius: '10px' }}  allowFullScreen=""  loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Formonix Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;