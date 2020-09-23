import React from 'react';
import { Button, Form, Radio } from 'antd';
import { useForm } from 'antd/lib/form/Form';

const TitleForm = ({ stepFoward, stepBackward, setPatient, newPatient }) => {
  const [titleForm] = useForm();

  const onFinishTitle = values => {
    stepFoward();
    values.sex === "m"
      ? setPatient({ ...values, title: "Monsieur" })
      : setPatient({ ...values, title: "Madame" });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={titleForm}
      initialValues={{ sex: newPatient.sex ? newPatient.sex : null }}
      onFinish={onFinishTitle}
      onFinishFailed={onFinishFailed}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item
        label="Genre"
        name="sex"
        rules={[{ required: true, message: 'Choisissez un genre.' }]}
        wrapperCol={{ sm: { offset: 0}, xs: {span: 14, offset: 4 } }}
      >
        <Radio.Group size="large">
          <Radio.Button value="m">Homme</Radio.Button>
          <Radio.Button value="f">Femme</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item  wrapperCol={{ sm: {span: 14, offset: 10}, xs: {span: 14, offset: 4 } }}>
        <Button onClick={stepBackward} style={{ marginRight: '1.55em'}}>
            Retour
        </Button>
        <Button type="primary" onClick={() => titleForm.submit()}>
          Suivant
      </Button>
      </Form.Item>
    </Form>
  );
};

export default TitleForm;


