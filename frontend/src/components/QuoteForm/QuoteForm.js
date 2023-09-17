import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import Style from "../WantToLearnMoreForm/WantToLearnMoreForm.module.css";

const QuoteForm = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.validateFields();
  }, [form]);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div className={Style.formStyle}>
      <div className="max-w-screen-xl mx-auto text-white">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
          Get a Quote for your Project!
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-8">
          Contact us to discuss more about your project and get a quote.
        </p>
        <Form
          form={form}
          name="horizontal_login"
          layout="horizontal"
          onFinish={onFinish}
        >
        
          <Form.Item
            name="username"
            label="Your Name"
            rules={[
              {
                required: true,
                message: "Please Enter Your Name!",
              },
            ]}
          >
            <Input
              placeholder="Enter your first name"
              className="w-48 py-2 px-3 rounded-sm"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              {
                required: true,
                type: "email",
                message: "Enter your email address",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              className="w-48 py-2 px-3 rounded-sm"
            />
          </Form.Item>
          <Form.Item
            name="number"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Enter your correct number!",
              },
            ]}
          >
            <Input
              placeholder="Enter your phone number"
              className="w-48 py-2 px-3 rounded-sm"
            />
          </Form.Item>
          <Form.Item
            name="intro"
            label="Project Brief"
            rules={[{ required: true, message: "Please input Intro" }]}
          >
            <Input.TextArea
              showCount
              maxLength={100}
              className="w-64 py-2 px-3 rounded-sm"
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-full px-6 py-2"
              >
                Contact us
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default QuoteForm;
