// Import necessary dependencies
import React from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, Button } from "antd";
import Styles from "../WantToLearnMoreForm/WantToLearnMoreForm.module.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jx4by2i",
        "template_zrqo015",
        e.target,
        "lX0vHePnHa2dOYepK"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
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
            <Form.Item
              name="Name"
              rules={[
                {
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input type="text" placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  htmlType="submit"
                  style={{ backgroundColor: "#09ab6f", borderColor: "#09ab6f" }}
                >
                  Contact us
                </Button>
              )}
            </Form.Item>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
