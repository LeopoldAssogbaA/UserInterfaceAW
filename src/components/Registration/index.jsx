import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import NameForm from './NameForm';
import TitleForm from './TitleForm';
import ConfirmForm from './ConfirmForm';

import StepRender from '../Steps';


const RegistrationForm = ({ addNewPatient }) => {
  const history = useHistory();
  const [stepIndex, setStepIndex] = useState(0);
  const [newPatient, setNewPatient] = useState({});

  const registerPatient = patient => {
    addNewPatient(patient);
    setPatient({});
    history.push("/patientList");
  };

  const stepFoward = () => {
    setStepIndex(state => state + 1);
  };

  const stepBackward = () => {
    setStepIndex(state => state - 1);
  };

  const setPatient = values => {
    setNewPatient(state => ({ ...state, ...values }));
  }

  return (
    <div>
      <StepRender stepIndex={stepIndex} />
      {
        (() => {
          switch (stepIndex) {
            case 0:
              return (
                <NameForm
                  stepFoward={stepFoward}
                  setPatient={setPatient}
                  newPatient={newPatient}
                />
              );
            case 1:
              return (
                <TitleForm
                  stepBackward={stepBackward}
                  stepFoward={stepFoward}
                  setPatient={setPatient}
                  newPatient={newPatient}
                />
              );
            case 2:
              return (
                <ConfirmForm
                  stepBackward={stepBackward}
                  register={registerPatient}
                  newPatient={newPatient}
                />
              );
            default:
              return (
                <NameForm
                  stepBackward={stepBackward}
                  setPatient={setPatient}
                  newPatient={newPatient}
                />
              );
          }
        })()
      }
    </div>
  );

};

export default RegistrationForm;


