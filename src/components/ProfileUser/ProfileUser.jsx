import React from 'react'
import { MdErrorOutline } from 'react-icons/md'
import '../../App.css';

const ProfileUser = ({ data, updateFieldHandler, passwordError }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome</label>
        <input
          type="text" name="text" id="name" required value={data.name || ""}
          onChange={(e) => updateFieldHandler('name', e.target.value)}
        />
      </div>

      <div className="box-container">
        <div className="form-control">
          <label htmlFor="password">Senha</label>
          <input
            type="text" name="password" id="password" required
            maxLength="8" minLength="8" value={data.password || ""}
            onChange={(e) => updateFieldHandler('password', e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirmar Senha</label>
          <input
            type="text" name="confirmPassword" id="confirmPassword" required
            minLength="8" maxLength="8" value={data.confirmPassword || ""}
            onChange={(e) => updateFieldHandler('confirmPassword', e.target.value)}
          />
          {passwordError && <span> <MdErrorOutline /> As senhas não são iguais. Tente novamente.</span>}
        </div>
      </div>

      <div className="box-container">
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email" name="email" id="email" required
            autoComplete="email" value={data.email || ""}
            onChange={(e) => updateFieldHandler('email', e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="birthDate">Data de Nascimento</label>
          <input
            type="date" name="birthDate" id="birthDate" required
            min="1904-12-31" max="2022-12-31" value={data.birthDate || ""}
            onChange={(e) => updateFieldHandler('birthDate', e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default ProfileUser