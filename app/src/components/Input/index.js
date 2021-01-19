import React from 'react';

import './styles.css';

const Input = (props) => {
  const { name, label, ...rest} = props;
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;