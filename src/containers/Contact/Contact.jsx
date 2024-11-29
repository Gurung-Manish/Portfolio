import React from "react";
import "./Contact.css";
const Contact = () => {
  const handleContact = () => {};

  return (
    <div className="contact" id="contact">
      <h1>Manish Gurung</h1>
      <p>
        Wanna bounce off ideas,
        <br /> feel free to send me an email
      </p>
      <button className="contact__button" onClick={handleContact}>
        Contact
      </button>
    </div>
  );
};

export default Contact;
