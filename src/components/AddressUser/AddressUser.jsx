import React from 'react'
import '../../App.css';

const AddressUser = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="box-container">
        <div className="form-control">
          <label htmlFor="cep">CEP</label>
          <input
            type="cep" name="cep" id="cep" required value={data.cep || ""}
            onChange={(e) => updateFieldHandler('cep', e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="street">Rua</label>
          <input
            type="text" name="street" id="street" required value={data.street || ""}
            onChange={(e) => updateFieldHandler('street', e.target.value)}
          />
        </div>
      </div>

      <div className="box-container">
        <div className="form-control">
          <label htmlFor="numberHome">Número</label>
          <input
            type="number" name="numberHome" id="numberHome" required value={data.numberHome || ""}
            onChange={(e) => updateFieldHandler('numberHome', e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="district">Bairro</label>
          <input
            type="text" name="district" id="district" required value={data.district || ""}
            onChange={(e) => updateFieldHandler('district', e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="city">Cidade</label>
          <input
            type="text" name="city" id="city" required value={data.city || ""}
            onChange={(e) => updateFieldHandler('city', e.target.value)}
          />
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="referencePoint">Ponto de Referência</label>
        <input
          type="text" name="referencePoint" id="referencePoint" required value={data.referencePoint || ""}
          onChange={(e) => updateFieldHandler('referencePoint', e.target.value)}
        />
      </div>
    </div>
  )
}

export default AddressUser