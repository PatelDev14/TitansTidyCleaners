// import React from 'react';

// const QuoteForm = ({ onSubmit, formSubmitted }) => (
//   <section className="quote" id="quote">
//     <h2>Get a Quote</h2>
//     <form onSubmit={onSubmit}>
//       <label htmlFor="cleaningType">Cleaning Type:</label>
//       <div id="cleaningType">
//         <label>
//           <input type="radio" name="type" value="residential" /> Residential
//         </label>
//         <label>
//           <input type="radio" name="type" value="commercial" /> Commercial
//         </label>
//         <label>
//           <input type="radio" name="type" value="industrial" /> Industrial
//         </label>
//       </div>

//       <label htmlFor="services">Select Services:</label>
//       <div id="services">
//         <label><input type="checkbox" name="service" value="deep-cleaning" /> Deep Cleaning</label>
//         <label><input type="checkbox" name="service" value="pressure-washing" /> Pressure Washing</label>
//         <label><input type="checkbox" name="service" value="window-cleaning" /> Window Cleaning</label>
//         <label><input type="checkbox" name="service" value="move-in-out" /> Move-In/Move-Out Cleaning</label>
//         <label><input type="checkbox" name="service" value="carpet-cleaning" /> Carpet Cleaning</label>
//         <label><input type="checkbox" name="service" value="carpet-cleaning" /> Floor Cleaning & Maitenance</label>
//         <label><input type="checkbox" name="service" value="carpet-cleaning" /> Post-Construction Cleaning</label>
//         <label><input type="checkbox" name="service" value="carpet-cleaning" /> Event </label>
//         <label><input type="checkbox" name="service" value="carpet-cleaning" /> Deck & Patio Cleaning</label>
//         <label><input type="checkbox" name="service" value="carpet-cleaning" /> Pool Area Cleaning</label>
//         <label><input type="checkbox" name="service" value="carpet-cleaning" /> Light Fixture & Fan Cleaning</label>
//       </div>

//       <label htmlFor="frequency">Frequency:</label>
//       <select id="frequency" name="frequency">
//         <option value="one-time">One-Time</option>
//         <option value="weekly">Weekly</option>
//         <option value="bi-weekly">Bi-Weekly</option>
//         <option value="monthly">Monthly</option>
//       </select>

//       <label htmlFor="contactName">Your Name:</label>
//       <input type="text" id="contactName" name="contactName" placeholder="Enter your name" required />

//       <label htmlFor="contactEmail">Your Email:</label>
//       <input type="email" id="contactEmail" name="contactEmail" placeholder="Enter your email" required />

//       <label htmlFor="additionalInfo">Additional Information:</label>
//       <textarea id="additionalInfo" name="additionalInfo" placeholder="Any special requests or information..."></textarea>

//       <button type="submit">Submit</button>
//     </form>

//     {formSubmitted && <p className="confirmation-message">Thank you for your submission! We will get back to you shortly.</p>}
//   </section>
// );

// export default QuoteForm;

import React from 'react';

const QuoteForm = ({ onSubmit, formSubmitted }) => (
  <section className="quote" id="quote">
    <h2>Get a Quote</h2>
    <form onSubmit={onSubmit}>
      <label htmlFor="cleaningType">Cleaning Type:</label>
      <div id="cleaningType">
        <label>
          <input type="radio" name="type" value="residential" /> Residential
        </label>
        <label>
          <input type="radio" name="type" value="commercial" /> Commercial
        </label>
        <label>
          <input type="radio" name="type" value="industrial" /> Industrial
        </label>
      </div>

      <label htmlFor="services">Select Services:</label>
      <div id="services">
        <label><input type="checkbox" name="service" value="deep-cleaning" /> Deep Cleaning</label>
        <label><input type="checkbox" name="service" value="pressure-washing" /> Pressure Washing</label>
        <label><input type="checkbox" name="service" value="window-cleaning" /> Window Cleaning</label>
        <label><input type="checkbox" name="service" value="move-in-out" /> Move-In/Move-Out Cleaning</label>
        <label><input type="checkbox" name="service" value="carpet-cleaning" /> Carpet Cleaning</label>
        <label><input type="checkbox" name="service" value="floor-cleaning" /> Floor Cleaning & Maintenance</label>
        <label><input type="checkbox" name="service" value="post-construction" /> Post-Construction Cleaning</label>
        <label><input type="checkbox" name="service" value="event" /> Event</label>
        <label><input type="checkbox" name="service" value="deck-patio-cleaning" /> Deck & Patio Cleaning</label>
        <label><input type="checkbox" name="service" value="pool-area-cleaning" /> Pool Area Cleaning</label>
        <label><input type="checkbox" name="service" value="light-fixture-cleaning" /> Light Fixture & Fan Cleaning</label>
      </div>

      <label htmlFor="frequency">Frequency:</label>
      <select id="frequency" name="frequency">
        <option value="one-time">One-Time</option>
        <option value="weekly">Weekly</option>
        <option value="bi-weekly">Bi-Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <label htmlFor="contactName">Your Name:</label>
      <input type="text" id="contactName" name="contactName" placeholder="Enter your name" required />

      <label htmlFor="contactEmail">Your Email:</label>
      <input type="email" id="contactEmail" name="contactEmail" placeholder="Enter your email" required />

      <label htmlFor="additionalInfo">Additional Information:</label>
      <textarea id="additionalInfo" name="additionalInfo" placeholder="Any special requests or information..."></textarea>

      <button type="submit">Submit</button>
    </form>

    {formSubmitted && <p className="confirmation-message">Thank you for your submission! We will get back to you shortly.</p>}
  </section>
);

export default QuoteForm;
