import React from 'react';
import { useField } from 'formik';

import './input.scss';

const Input = ({ label, type = 'text', name }) => {
  const [{ onChange, onBlur, value }, { touched, error }] = useField(name);
  const shownError = !!error && !!touched;

  return (
    <div className="input">
      <label className="input__label">
        {label}
        <input
          type={type}
          className={`input__input ${shownError ? 'input__input--error' : ''}`}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </label>
      {shownError && <p className="input__message">{error}</p>}
    </div>
  );
};

export default Input;
