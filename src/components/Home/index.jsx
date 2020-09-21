import React from 'react';

import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import { UserAddOutlined, TeamOutlined } from '@ant-design/icons';

import './index.less';

const Home = () => {
  const history = useHistory();

  return (
    <div className="homeContainer">
      <Row>
        <Col span={24}>
          <div className="logoContainer">
            <img src="/assets/logoAW.png" alt="logo Audio Wizard" />
          </div>
        </Col>
        <Col span={24}>
          <div className="titleContainer">
            <h2>Bienvenue sur le site d'AudioWizard!</h2>
          </div>
        </Col>
        <Col span={12}>
          <Button
            icon={<UserAddOutlined />}
            type="primary"
            onClick={() => {
              history.push("/registration")
            }}
          >
            Ajouter un nouveau patient
          </Button>
        </Col>
        <Col span={12}>
          <Button
            icon={<TeamOutlined />}
            onClick={() => {
              history.push("/patientList")
            }}
          >
            Liste des Patients
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;