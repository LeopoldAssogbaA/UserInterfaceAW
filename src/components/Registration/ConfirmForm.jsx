import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Button } from 'antd';


const ConfirmForm = ({ stepBackward, register, newPatient }) => {
  // const history = useHistory();

  return (
    <div>
      <p> Voulez-vous confirmer l'enregistrement de <b>{newPatient.firstName && newPatient.lastName && newPatient.title ? newPatient.title + " " + newPatient.firstName + " " + newPatient.lastName : ""}</b>?</p>
      <Button onClick={() => stepBackward()}>
        Retour
    </Button>
      <Button type="primary" onClick={() => register(newPatient)}>
        Enregistrer
    </Button>
    </div>
  );

};

export default ConfirmForm;


