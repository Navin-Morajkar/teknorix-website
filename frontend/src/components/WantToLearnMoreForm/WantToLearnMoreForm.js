import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Styles from "../ContainerLeft/ContainerLeft.module.css";

const CustomForm = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="mt-4 sm:p-4 md:p-8 lg:p-12 xl:p-20">
      <div className="bg-yellow-400 bg-cover bg-center p-8">
        <div className="max-w-screen-xl mx-auto text-white">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
            Want to Learn More?
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-8">
            Share your contact details, and one of our Product Specialists will get in touch with you.
          </p>
          <Form
            form={form}
            onFinish={handleSubmit}
            initialValues={{ name: '', email: '' }}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your Name!',
                },
              ]}
            >
              <Input
                placeholder="Name"
                className="bg-white px-4 py-2 rounded-lg w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 mx-auto"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please input a valid Email!',
                },
              ]}
            >
              <Input
                placeholder="Email"
                className="bg-white px-4 py-2 rounded-lg w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 mx-auto"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-full px-6 py-2"
                style={{ backgroundColor: '#09ab6f', borderColor: '#09ab6f' }}
              >
                Contact us
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
