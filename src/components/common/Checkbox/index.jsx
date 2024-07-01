/* eslint-disable react/prop-types */
import React from 'react';

export const Checkbox = ({
  id, label, checkboxGroupClassName, inputClassName, labelClassName, name, ...rest
}) => (
  <div className={checkboxGroupClassName ? `${checkboxGroupClassName} checkbox` : 'checkbox'}>
    <input className={inputClassName ? `${inputClassName} checkbox-control` : 'checkbox-control'}
    type="checkbox"
    name={name}
    id={id}
    onChange={() => {}}
    {...rest}
    />
    <label className={labelClassName ? `${labelClassName} checkbox-label` : 'checkbox-label'} htmlFor={id}>
      <span className="icon checked-icon bi bi-check2"></span>
      <span className="checkbox-label-text">{label}</span>
    </label>
  </div>
);
