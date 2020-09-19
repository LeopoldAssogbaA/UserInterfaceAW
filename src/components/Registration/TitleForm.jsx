import React from 'react';
import { Button, Form, Radio } from 'antd';


const TitleForm = ({ stepFoward, stepBackward }) => {

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
      <Radio.Group defaultValue="m" size="large">
        <Radio.Button value="m">Homme</Radio.Button>
        <Radio.Button value="f">Femme</Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Button onClick={stepBackward}>
      Retour
    </Button>
    <Button type="primary" onClick={onFinish}>
      Suivant
    </Button>
  </Form>
  );

};

export default TitleForm;


