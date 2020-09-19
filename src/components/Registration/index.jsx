import React, { useState } from 'react';

import NameForm from './NameForm';
import TitleForm from './TitleForm';
import ConfirmForm from './ConfirmForm';

import StepRender from '../Steps';


const RegistrationForm = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const registerPatient = () => {
    console.log('Register Patient');
  };

  const stepFoward = () => {
    setStepIndex(state => state+1);
  };
  
  const stepBackward = () => {
    setStepIndex(state => state-1);
  };

  return (
    <div>
      <StepRender stepIndex={stepIndex} />
      { 
              (() => {
                  switch (stepIndex) {
                    case 0:
                      return (
                        <NameForm stepFoward={stepFoward} />
                      );
                    case 1:
                      return (
                        <TitleForm
                          stepBackward={stepBackward}
                          stepFoward={stepFoward} 
                        />
                      );
                    case 2:
                      return (
                        <ConfirmForm
                          stepBackward={stepBackward}
                          register={registerPatient}
                        />
                      );
                    default:
                      return (
                        <NameForm 
                          stepBackward={stepBackward}
                        />
                      );
                  }       
              })()
            }
    </div>
  );

};

export default RegistrationForm;


