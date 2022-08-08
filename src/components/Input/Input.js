import React from 'react';

import './input.scss';

const Input = ({
  field: { name, onChange, onBlur, value },
  form: { errors, touched },
  label,
  type = 'text',
}) => {
  const shownError = !!errors[name] && !!touched[name];

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
      {shownError && <p className="input__message">{errors[name]}</p>}
    </div>
  );
};

export default Input;
