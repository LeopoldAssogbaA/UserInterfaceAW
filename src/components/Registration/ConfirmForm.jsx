import React from 'react';
import { Button } from 'antd';

import './ConfirmForm.less';

const ConfirmForm = ({ stepBackward, register, newPatient }) => {

  return (
    <div className="confirmContainer">
      <div>
        <p> Voulez-vous confirmer l'enregistrement de <b>{newPatient.firstName && newPatient.lastName && newPatient.title ? newPatient.title + " " + newPatient.firstName + " " + newPatient.lastName : ""}</b>?</p>
      </div>
      <div>
        <Button onClick={() => stepBackward()}>
          Retour
        </Button>
        <Button type="primary" onClick={() => register(newPatient)}>
          Enregistrer
        </Button>
      </div>
    </div>
  );
};

export default ConfirmForm;


