import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({
  children,
  buttonType = 'button',
  onClick,
  type = 'primary',
}) => {
  return (
    <button
      className={`button button--${type}`}
      type={buttonType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'outline']),
  buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
