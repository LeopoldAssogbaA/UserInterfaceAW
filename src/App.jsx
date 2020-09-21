import React, { useState } from 'react';
import { Route, Switch, /* useHistory */ } from 'react-router-dom';
import { Col, Row } from 'antd';

import Header from './components/Header';
import RightMenu from './components/Menu';
import RegistrationForm from './components/Registration';
import Home from './components/Home';
import PatientList from './components/PatientList';

import PATIENTS from './constants/patients';
import './App.less';


const App = () => {
  // const history = useHistory();
  const [patients, setPatients] = useState(PATIENTS);

  // TODO: Enable item menu active with path
  // TODO: Enhance display and styles
  // TODO: Display Patient List in PatientList

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
              <Route exact path={`/registration`}>
                <RegistrationForm addNewPatient={addNewPatient} />
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
