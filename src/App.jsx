import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'antd';

import Header from './components/Header';
import RightMenu from './components/Menu';

import './App.less';
import RegistrationForm from './components/Registration';
import Home from './components/Home';
import PatientList from './components/PatientList';


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
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path={`/registration`}>
                <RegistrationForm />
              </Route>
              <Route exact path={`/patientList`}>
                <PatientList />
              </Route>
            </Switch>
          </Col>
        </Row>
      </main>
    </div>
  );
}


export default App;
