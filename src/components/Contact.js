import React from 'react';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact-container">
      <div className="contact-image">
        <img src="/contact.jpg" alt="Contact Us" />
        <div className="contact-text-overlay">
          <h2>Contact Us</h2>
          <p>Email: 14devpatel00@gmail.com</p>
          <p>Phone: +1 437-221-2087</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://www.x.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;