import React, { useEffect} from 'react';
import { Button, Form, Input } from 'antd';
import Style from "../WantToLearnMoreForm/WantToLearnMoreForm.module.css"

const CustomForm = () => {
    // const [form] = Form.useForm(); 
  
    // useEffect(() => {
    //   form.validateFields(); // Validate fields at the beginning
    // }, [form]); // Add form as a dependency
  
    // const onFinish = (values) => {
    //   console.log('Finish:', values);
    // };

  return (
    <div className={Style.formStyle}> 
      <div className={Style.formContainer}>
      <h1>Want to Learn More?</h1> 
      <p>Share your contact details and one of our Product Specialists will get in touch with you.</p>
      <Form name="horizontal_login" layout="inline" >
        <Form.Item
          name="username"
          rules={[
            {
              
              message: 'Please input your username!',
            },
          ]}
        >
          <Input 
          type="text"  />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
             
              message: 'Please input your password!',
            },
          ]}
        >
          <Input
           
            type="password"
          
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
             
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

export default CustomForm;
