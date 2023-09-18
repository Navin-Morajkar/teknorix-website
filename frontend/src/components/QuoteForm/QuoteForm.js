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
          layout="vertical" // Change layout to vertical
          onFinish={onFinish}
        >
          <div className="flex flex-wrap justify-center"> {/* Wrap Name, Email, Phone in a flex container */}
            <div className="w-full md:w-1/3 px-4">
              <Form.Item
                name="username"
                label={<span className={Style.labelStyle}>Name</span>}
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Name!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your first name"
                  className="w-full py-2 px-3 rounded-sm"
                />
              </Form.Item>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <Form.Item
                name="email"
                label={<span className={Style.labelStyle}>Email Address</span>}
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
                  className="w-full py-2 px-3 rounded-sm"
                />
              </Form.Item>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <Form.Item
                name="number"
                label={<span className={Style.labelStyle}>Phone Number</span>}
                rules={[
                  {
                    required: true,
                    message: "Enter your correct number!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your phone number"
                  className="w-full py-2 px-3 rounded-sm"
                />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="intro"
            label={<span className={Style.labelStyle}>Project Brief</span>}
            rules={[{ required: true, message: "Please input Intro" }]}
          >
            <Input.TextArea
              showCount
              maxLength={100}
              className="w-full py-2 px-3 rounded-sm"
              placeholder="Tell Us About Your Project"
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <div className="text-center"> {/* Center the button */}
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-full px-6 py-2"
                >
                  Contact us
                </Button>
              </div>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default QuoteForm;
