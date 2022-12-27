import React from 'react';
import '../../App.css';

const AboutUser = ({ data, updateFieldHandler }) => {
  return (
    <div className="about-form">
      <div className="form-control">
        <label htmlFor="aboutUser">Nos conte mais sobre você</label>
        <textarea
          name="aboutUser" id="aboutUser" required value={data.aboutUser || ""}
          onChange={(e) => updateFieldHandler("aboutUser", e.target.value)}>
        </textarea>
      </div>
    </div>
  )
}

export default AboutUser