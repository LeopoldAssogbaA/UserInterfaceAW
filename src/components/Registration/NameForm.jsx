import React from 'react';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';


const NameForm = ({ stepFoward, setPatient, newPatient }) => {
  const [nameForm] = useForm();

  const onFinish = values => {
    setPatient(values);
    stepFoward();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={nameForm}
      initialValues={{
        firstName: newPatient.firstName ? newPatient.firstName : "",
        lastName: newPatient.lastName ? newPatient.lastName : ""
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="inline"
      name="horizontal_login"
    >
      <Form.Item
        label="Prénom"
        name="firstName"
        rules={[{ required: true, message: 'Merci d\'indiquer le nom du patient ' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Nom"
        name="lastName"
        rules={[{ required: true, message: 'Merci d\'indiquer le prénom du patient ' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={() => nameForm.submit()}>
          Suivant
      </Button>
      </Form.Item>
    </Form>
  );

};

export default NameForm;


