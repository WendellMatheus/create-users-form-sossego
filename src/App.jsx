// Components 
import ProfileUser from './components/ProfileUser/ProfileUser';
import AddressUser from './components/AddressUser/AddressUser';
import AboutUser from './components/AboutUser/AboutUser';
import CreatedUser from './components/CreatedUser/CreatedUser';
import Steps from './components/Steps/Steps';

// Hooks
import { useForm } from './hooks/useForm';
import { useState, useEffect } from 'react';

import './App.css';

const formTemplate = {
  name: "",
  // password: "",
  email: "",
  birthDate: "",
  cep: "",
  street: "",
  numberHome: "",
  district: "",
  city: "",
  referencePoint: "",
  aboutUser: "",
}

function App() {
  const [data, setData] = useState(formTemplate);
  const [passwordError, setPasswordError] = useState(false);

  const updateFieldHandler = (key, value) => {
    setData(prev => {
      return { ...prev, [key]: value };
    });
  };

  useEffect(() => {
    data.password !== data.confirmPassword ? setPasswordError(true) : setPasswordError(false)
  }, [setPasswordError, data.password, data.confirmPassword]);

  const reStart = () => {
    window.location.reload(false)
  }

  const formComponents = [
    <ProfileUser data={data} updateFieldHandler={updateFieldHandler} passwordError={passwordError} />,
    <AddressUser data={data} updateFieldHandler={updateFieldHandler} />,
    <AboutUser data={data} updateFieldHandler={updateFieldHandler} />,
    <CreatedUser data={data} />
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="app">
      <div className={!isLastStep ? 'createUser' : 'dataUserCreated'}>
        {!isLastStep && (
          <div className="header" >
            <h2>Criação de Usuário</h2>
            <Steps currentStep={currentStep} />
          </div>
        )}
        <div className="form-container">
          <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && !isLastStep && (
                <button
                  className="button-return"
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}>
                  Anterior
                </button>
              )}
              {!isLastStep ? (
                <button className="button-submit" type="submit" disabled={passwordError}>Próximo passo</button>
              ) : (
                <div className="">
                  <button className="button-restart" type="button" onClick={reStart}>Novo usuário</button> 
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
