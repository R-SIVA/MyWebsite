import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faYoutube, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/Contact.css';  // Assuming you create a CSS file for this component

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    alert('Mail sent.');

    emailjs.sendForm(
      'rsivamaha', 
      'template_dc36ybq',
      form.current,
      'Aq3KLIoNLE4NHIiIL' 
    ).then(
      (result) => {
        console.log(result.text);
        console.log('Message sent');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again later.');
      }
    );
  };

  return (
    <div id="section-contact" className="form-container">
       <h3 className='he text-5xl font-bold'>Contact</h3>
        <div className="wrapper">
      <a href="https://www.instagram.com/r_siva_ramesh/" className="icon" data-color="instagram"><FontAwesomeIcon icon={faInstagram} className="fa-icon" /></a>
      <a href="https://www.linkedin.com/in/siva-r-918955255/" className="icon" data-color="linkedin"><FontAwesomeIcon icon={faLinkedinIn} className="fa-icon" /></a>
      <a href="#" className="icon" data-color="youtube"><FontAwesomeIcon icon={faYoutube} className="fa-icon" /></a>
      <a href="#" className="icon" data-color="twitter"><FontAwesomeIcon icon={faTwitter} className="fa-icon" /></a>
      <a href="https://github.com/R-SIVA" className="icon" data-color="github"><FontAwesomeIcon icon={faGithub} className="fa-icon" /></a>
    </div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <label className="form-label">Your Name</label>
        <input
          type="text"
          name="from_name"
          placeholder="Enter your Name"
          required
          className="form-input"
        />

        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          name="number"
          placeholder="Enter your phone number"
          required
          className="form-input"
        />

        <label className="form-label">Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Enter your Mail"
          required
          className="form-input"
        />

        <label className="form-label">Message</label>
        <textarea name="message" required className="form-textarea"></textarea>

        <input type="submit" value="Send" className="form-button" />
      </form>
    </div>
  );
};

export default Contact;
