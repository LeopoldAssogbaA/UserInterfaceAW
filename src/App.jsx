import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Col, Row } from 'antd';

import Header from './components/Header';
import RightMenu from './components/Menu';
import RegistrationForm from './components/Registration';
import Home from './components/Home';
import PatientList from './components/PatientList';
import PatientCard from './components/PatientList/Card';

import PATIENTS from './constants/patients';
import './App.less';

const App = () => {
  const [patients, setPatients] = useState(PATIENTS);
  const addNewPatient = newPatient => {
    setPatients(state => [...state, newPatient]);
  }

  return (
    <div className="app">
      <header className="header">
        <Header patients={patients} />
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
              <Route exact path="/registration">
                <RegistrationForm addNewPatient={addNewPatient} />
              </Route>
              <Route exact path="/patientList">
                <PatientList patients={patients} />
              </Route>
              <Route path={`/patientCard/:index`}>
                <PatientCard patients={patients} />
              </Route>
            </Switch>
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default App;
