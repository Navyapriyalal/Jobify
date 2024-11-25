import React from "react";

const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        className="form-input"
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default FormRow;
