import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'antd';

import Header from './components/Header';
import RightMenu from './components/Menu';

import './App.less';
import RegistrationForm from './components/Registration';


const App = () => {
  const history = useHistory();

  // TODO: Add form initValues 
  // TODO: Enable item menu active with path

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
            <Row>
              <Col span={16} offset={4}>
                <Switch>
                  <Route exact path="/">
                    <Button onClick={() => {
                      history.push("/registration")
                    }}>Ajouter un nouveau patient</Button>
                  </Route>
                  <Route exact path={`/registration`}>
                    <RegistrationForm />
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
