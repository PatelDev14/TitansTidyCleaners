import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const headerText = document.querySelector('.header h1');
    setTimeout(() => {
      headerText.classList.add('show');
    }, 500);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  
    const formData = new FormData(event.target);
    const data = {
      type: formData.get("type"),
      services: Array.from(formData.getAll("service")),
      frequency: formData.get("frequency"),
      contactName: formData.get("contactName"),
      contactEmail: formData.get("contactEmail"),
      additionalInfo: formData.get("additionalInfo"),
    };
  
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzxl4z-K39LzfB-LqUIsYD7vrweVHb0y7Fhlhmjnwk4r-SDsFMZqJXMnUaYKWa6nC4/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors'
      });
  
      console.log("Form submitted successfully");
      
      setTimeout(() => {
        event.target.reset();
        setFormSubmitted(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 5000);
  
    } catch (error) {
      console.error('Error:', error);
      setFormSubmitted(false);
    }
  };
  

  return (
    <div className="app">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu}>
        <Carousel />
      </Header>
      <div className="section-container">
        <About />
        <Services />
        <Contact />
        <QuoteForm onSubmit={handleSubmit} formSubmitted={formSubmitted} />
      </div>
      <Footer />
    </div>
  );
}

export default App;




