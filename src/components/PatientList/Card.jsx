import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Col, Row, Card } from 'antd';

import './index.less';

// TODO: Clean

const PatientCard = ({ patients }) => {
  let { index } = useParams();
  const history = useHistory();
  const currentPatient = patients[index];

  useEffect(() => {
    if (currentPatient === undefined) {
      history.push('/patientList');
    } else {
    }
  }, [currentPatient, history]);


  return (
    <div className="patientCardContainer">
      <Row>
        <Col span={24}>
          {currentPatient === undefined
            ?
            <div>Le patient a été suprimé de la liste. Veuillez créer un nouveau patient.</div>
            :
            <Card title={`${currentPatient.firstName} ${currentPatient.lastName}`} extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          }
        </Col>
      </Row>
    </div>
  );
}

export default PatientCard;