import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Style from "../WantToLearnMoreForm/WantToLearnMoreForm.module.css"
import Styles from "../ContainerLeft/ContainerLeft.module.css"
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
    <div  className={Styles.flexContainer}>
    <div className={Style.formStyle}> 
      <div className={Style.formContainer}>
      <h1>Want to Learn More?</h1> 
      <p>Share your contact details and one of our Product Specialists will get in touch with you.</p>
      <Form name="horizontal_login" layout="inline" >
        <Form.Item
          name="Name"
          rules={[
            {
              
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input 
          type="text"  
          placeholder='Name' />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
             
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
           
            type="email" 
            placeholder='Email'
          
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
            
              htmlType="submit" 
              style={{  backgroundColor: '#09ab6f',
                borderColor: "#09ab6f" }}
             
             
            >
             Contact us
            </Button>
          )}
        </Form.Item>
      </Form> 
      </div>
    </div> 
    </div>
  );
};

export default CustomForm;
