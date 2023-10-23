import React from 'react';
import './contact.css';
import { contactNumbers, supportHelplines } from '../../assets/data/data'; // Replace 'your-data' with the correct path to your dataset

const Contact = () => {
  return (
    <>
      <div><h2 id="center">Contact Us</h2></div>

      <div className="contact">
      <div className="contact-section">
        <h3>Contact Numbers</h3>
        <ul>
          {contactNumbers.map((contact) => (
            <li key={contact.title}>
              <span>{contact.title}</span>: {contact.number}
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-section">
        <h3>Support Helplines</h3>
        <ul>
          {supportHelplines.map((support) => (
            <li key={support.title}>
              <span>{support.title}</span>: {support.number}
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-section">
        <h3>Visit Links</h3>
        <ul>
            <li><a href="https://www.instagram.com/">instagram</a></li>
            <li><a href="https://www.facebook.com/">facebook</a></li>
            <li><a href="https://www.twitter.com/">twitter</a></li>
            <li><a href="https://www.linkedin.com/">linkedin</a></li>
            <li><a href="https://www.quora.com/">quora</a></li>
        </ul>
      </div>
      <div className="contact-section">
        <h3>Support Emails</h3>
        <ul>
            <li><a href="https://www.google.com/intl/en_in/gmail/about/">mehak1@blog0875expert.com</a></li>
            <li><a href="https://www.google.com/intl/en_in/gmail/about/">mehak2@blog0875expert.com</a></li>
            <li><a href="https://www.google.com/intl/en_in/gmail/about/">mehak3@blog0875expert.com</a></li>
            <li><a href="https://www.google.com/intl/en_in/gmail/about/">mehak4@blog0875expert.com</a></li>
        </ul>
      </div>
    </div>
    <div id="center" className='contactWebsiteLast'>
        <p>You can also contact us at the customer care website <span>@abcxyz/uvw/</span></p>
    </div>
    </>
  );
};

export default Contact;
