/* eslint-disable react/prop-types */
import React from 'react';

export const Input = ({
  id, label, type = 'text', isFloating, inputClassName, name, ...rest
}) => (
  <div className={isFloating ? 'field form-floating mb-3' : 'field mb-3'}>
    <input
      type={type}
      id={id}
      name={name}
      className={inputClassName ? `${inputClassName} form-control` : 'form-control'}
      {...rest}
    />
    <label className="form-label" htmlFor={id}>
      {label}
    </label>
  </div>
);
