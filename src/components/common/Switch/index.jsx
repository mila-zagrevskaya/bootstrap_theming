/* eslint-disable react/prop-types */
import React from 'react';

export const Switch = ({
  id, label, switchGroupClassName, inputClassName, labelClassName, name, ...rest
}) => (
  <div className={switchGroupClassName ? `${switchGroupClassName} form-check form-switch` : 'form-check form-switch'}>
    <input className={inputClassName ? `${inputClassName} form-check-input` : 'form-check-input'}
    type="checkbox"
    name={name}
    id={id}
    onChange={() => {}}
    {...rest}
    />
    <label className={labelClassName ? `${labelClassName} form-check-label` : 'form-check-label'} htmlFor={id}>
      {label}
    </label>
  </div>
);
