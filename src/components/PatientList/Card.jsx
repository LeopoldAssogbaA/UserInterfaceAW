import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Card } from 'antd';

import './Card.less';

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
    <div className="cardContainer">
          {currentPatient === undefined
            ?
            <div>Le patient a été suprimé de la liste. Veuillez créer un nouveau patient.</div>
            :
            <Card title={`${currentPatient.firstName} ${currentPatient.lastName}`} extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </Card>
          }
    </div>
  );
}

export default PatientCard;