import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import Style from "../WantToLearnMoreForm/WantToLearnMoreForm.module.css";
const CustomForm = () => {
  const [form] = Form.useForm(); // Uncomment this line

  useEffect(() => {
    form.validateFields(); // Validate fields at the beginning
  }, [form]); // Add form as a dependency

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div className={Style.formStyle}>
      <div className={Style.formContainer}>
        <h1>Want to Learn More?</h1>
        <p>
          Share your contact details and one of our Product Specialists will get
          in touch with you.
        </p>
        <Form
          form={form}
          name="horizontal_login"
          layout="inline"
          onFinish={onFinish}
        >
          <Form.Item
            name="username" 
            label="username"
            rules={[
              {
                message: "Please Enter Your Name!",
              },
            ]}
          >
            <Input type="text" placeholder="Enter your first name" />
          </Form.Item>
          <Form.Item
            name="email" 
            label="email"
            rules={[
              {
                message: "Enter your email address",
              },
            ]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="number" 
            label="Phone number:"
            rules={[
              {
                message: "Enter your correct number!",
              },
            ]}
          >
            <Input type="number" placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item
            name="intro"
            label="Project Brief"
            rules={[{ required: true, message: "Please input Intro" }]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button type="primary" htmlType="submit">
                Contact us
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CustomForm;
