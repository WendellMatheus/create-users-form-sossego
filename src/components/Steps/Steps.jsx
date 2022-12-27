import React from 'react'
import { RiUser5Fill, RiHome4Fill } from 'react-icons/ri'
import { RiFileTextFill } from 'react-icons/ri'

import './Steps.css'

const Steps = ({ currentStep }) => {
  return (
    // <div className="steps">
    //   <div className={`step ${currentStep >= 0 ? "active" : ""}`}>
    //     <RiUser5Fill />
    //     <p>Identificação do Usuário</p>
    //   </div>
    //   <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
    //     <RiHome4Fill />
    //     <p>Endereço do usuário</p>
    //   </div>
    //   <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
    //     <RiFileTextFill />
    //     <p>Sobre você</p>
    //   </div>
    // </div>

  <div className="steps">
    <div className={`step ${currentStep > 0 ? "filled" : currentStep === 0 ? "active" : ""}`}>
      <RiUser5Fill />
      <p>Identificação do Usuário</p>
    </div>
    <div className={`step ${currentStep === 1 ? "active" : currentStep === 2 ? "filled" : ""}`}>
      <RiHome4Fill />
      <p>Endereço do usuário</p>
    </div>
    <div className={`step ${currentStep === 2 ? "active" : currentStep === 3 ? "filled" : ""}`}>
      <RiFileTextFill />
      <p>Sobre você</p>
    </div>
  </div>
  )
}

export default Steps