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
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="Patient" style={{ marginBottom: 0 }}>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', paddingLeft: '1em' }}
          name="firstName"
          rules={[{ required: true, message: 'Merci d\'indiquer le nom du patient ' }]}
        >
          <Input placeholder="Prénom" />
        </Form.Item>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', paddingLeft: '1em' }}
          name="lastName"
          rules={[{ required: true, message: 'Merci d\'indiquer le prénom du patient ' }]}
        >
          <Input placeholder="Nom" />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false} style={{ paddingLeft: '1em' }}>
        <Button type="primary" onClick={() => nameForm.submit()}>
          Suivant
    </Button>
      </Form.Item>
    </Form>
  );

};

export default NameForm;


