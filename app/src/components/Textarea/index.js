import React from 'react';

import './styles.css';

const Textarea = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
}

export default Textarea;