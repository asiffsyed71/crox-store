import React from "react";
import "./form-input.styles.scss";

const FormInput = (props) => {
  const { label, id, name, type, required, changeHandler, value } = props;

  return (
    <div className="group">
      <input
        className="form-input"
        name={name}
        type={type}
        required={required}
        onChange={changeHandler}
        value={value}
      />
      {label && (
        <label
          htmlFor={id}
          className={`${value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
