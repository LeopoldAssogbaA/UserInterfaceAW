import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Button, Col, Input, Row, Form, Radio } from 'antd';

import Header from './components/Header';
import RightMenu from './components/Menu';
import StepRender from './components/Steps';

import './App.less';


const App = () => {
  const history = useHistory();
  const [stepIndex, setStepIndex] = useState(null);
  const [userDatas, setUserDatas] = useState(null);

  const signUp = () => {
    setStepIndex(0);
    history.push("/name");
  };

  // Form

  const onFinish = values => {
    console.log('Success:', values);
    setStepIndex(1);
    history.push("/title");
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  // TODO: Enhance navigation and variables
  // TODO: Add form initValues 
  // TODO: Dispatch Forms steps intos components

  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Row>
          <Col span={6}>
            <RightMenu />
          </Col>
          <Col span={18}>
            {stepIndex !== null &&
              <StepRender stepIndex={stepIndex} />
            }
            <Row>
              <Col span={16} offset={4}>
                <Switch>
                  <Route exact path="/">
                    <Button onClick={signUp}>Ajouter un nouveau patient</Button>
                  </Route>
                  <Route exact path="/name">
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
                  </Route>
                  <Route exact path="/title">
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
                      <Button type="primary" onClick={() => {setStepIndex(2)}}>
                        Suivant
                      </Button>
                    </Form>
                  </Route>
                  <Route exact path="/end">

                  </Route>
                </Switch>
              </Col>
            </Row>
          </Col>
        </Row>
      </main>
    </div>
  );
}


export default App;
