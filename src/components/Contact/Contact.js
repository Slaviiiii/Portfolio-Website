import React from "react";
import "./Contact.css";

const email = "karaslavovslavi@gmail.com";

const Contact = () => {
  return (
    <section className="contact-text" id="contact">
      <h1>Contact</h1>
      <p className="contact-p">You can contact me at </p>
      <a href=`#`>{email}</a>
    </section>
  );
};

export default Contact;
