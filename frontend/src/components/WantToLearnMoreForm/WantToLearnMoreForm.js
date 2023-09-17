import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Styles from "../WantToLearnMoreForm/WantToLearnMoreForm.module.css";

const WantToLearnMore = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    // Clear any previous error or success message
    setErrorMessage("");
    setSuccessMessage("");

    // Send the email using emailjs
    emailjs
      .sendForm(
        "service_jx4by2i",
        "template_59ungrs",
        e.target,
        "azUTjfG6BJE6Jmzv-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Error sending the message. Please try again.");
        }
      );
  };

  return (
    <div className={Styles.flexContainer}>
      <div className={Styles.formStyle}>
        <div className={Styles.formContainer}>
          <h1>Want to Learn More?</h1>
          <p>
            Share your contact details, and one of our Product Specialists will
            get in touch with you.
          </p>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default WantToLearnMore;
