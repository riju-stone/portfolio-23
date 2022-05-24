import React from "react";

import { ContactSection } from "../../styles/contactStyles";

function Contact() {
  return (
    <ContactSection id="contact">
      <div className="form">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Your Message" />
        <button>Send</button>
      </div>
      <div className="contact-title">Let's Talk</div>
    </ContactSection>
  );
}

export default Contact;
