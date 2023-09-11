import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Style from '../WantToLearnMoreForm/WantToLearnMoreForm.module.css';

const CustomForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
    <div className={Style.formStyle}>
      <div className={Style.formContainer}>
        <h1>Want to Learn More?</h1>
        <p>Share your contact details, and one of our Product Specialists will get in touch with you.</p>
        <Form name="horizontal_login" layout="inline" onSubmit={handleSubmit}>
          <Form.Item
            name="name" 
            rules={[
              {
                required: true,
                message: 'Please input your name!', 
              },
            ]}
          >
            <Input type="text" name="name" onChange={handleChange} value={formData.name} />
          </Form.Item>
          <Form.Item
            name="email" 
            rules={[
              {
                required: true,
                message: 'Please input your email!', 
              },
            ]}
          >
            <Input type="email" name="email" onChange={handleChange} value={formData.email} />
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
