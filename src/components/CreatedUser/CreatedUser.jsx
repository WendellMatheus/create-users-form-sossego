import React from 'react'
import '../../App.css';

const CreatedUser = ({ data }) => {
  return (
    <div>
      <h2 className="title">Usuário criado!</h2>
      <div className="form-control">
        <label htmlFor="name">Nome</label>
        <input className="result-data" type="text" name="text" id="name" value={data.name} disabled />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input className="result-data" type="email" name="email" value={data.email} disabled />
      </div>
      <div className="box-container">
        <div className="form-control">
          <label htmlFor="street">Rua</label>
          <input className="result-data" type="text" name="street" id="street" value={data.street} disabled />
        </div>
        <div className="form-control">
          <label htmlFor="numberHome">Número</label>
          <input className="result-data" type="text" name="numberHome" id="numberHome" value={data.numberHome} disabled />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="cep">CEP</label>
        <input className="result-data" type="text" name="cep" id="cep" value={data.cep} disabled />
      </div>
    </div>
  )
}

export default CreatedUser