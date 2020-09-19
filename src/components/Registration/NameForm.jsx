import React from 'react';
import { Button, Form, Input } from 'antd';


const NameForm = ({ stepFoward }) => {

  const onFinish = values => {
    console.log('Success:', values);
    stepFoward();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Prénom"
        name="firstName"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Nom"
        name="lastName"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Button type="primary" onClick={onFinish}>
        Suivant
    </Button>
    </Form>
  );

};

export default NameForm;


