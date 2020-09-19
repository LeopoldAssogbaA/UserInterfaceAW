import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Button } from 'antd';


const ConfirmForm = ({ stepBackward, register }) => {
  // const history = useHistory();

  return (
  <div>
    <p> Voulez-vous confirmer l'enregistrement de "Nouveau Patient"</p>
    <Button onClick={() => stepBackward()}>
      Retour
    </Button>
    <Button type="primary" onClick={() => register()}>
      Enregistrer
    </Button>
  </div>
  );

};

export default ConfirmForm;


