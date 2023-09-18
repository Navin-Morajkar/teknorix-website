import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Styles from "../WantToLearnMoreForm/WantToLearnMoreForm.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // New phone state
  const [message, setMessage] = useState(""); // New message state
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value); // Update phone state
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value); // Update message state
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
        "template_zrqo015",
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
    <div className={Styles.formStyle}>
      <div className="text-2xl md:text-3xl lg:text-4xl mb-4">
        <div className={" text-white  rounded-lg "}>
          <h1 className="text-center ...">Want to discuss a product idea?</h1>
        </div>
      </div>
      <div className="mb-4">
        <div className={" text-white rounded-lg "}>
          <p className="text-center ...">
            Share your contact details and one of our Product Engineering
            Specialists will get in touch.
          </p>
        </div>
      </div>
      <form onSubmit={sendEmail}>
        <div className="mb-4 ">
          <label
            htmlFor="name"
            className="block mb-1 text-white  rounded-lg "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 text-white  rounded-lg "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block mb-1 text-white  rounded-lg "
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-1 text-white  rounded-lg "
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      {successMessage && (
        <p className="text-green-500 mt-4">{successMessage}</p>
      )}
    </div>
  );
};

export default Contact;
