/* eslint-disable react/prop-types */
import React from 'react';

export const Radio = ({
  id, label, radioGroupClassName, inputClassName, labelClassName, name, ...rest
}) => (
  <div className={radioGroupClassName ? `${radioGroupClassName} radio` : 'radio'}>
    <input className={inputClassName ? `${inputClassName} radio-control` : 'radio-control'}
    type="radio"
    name={name}
    id={id}
    onChange={() => {}}
    {...rest}
    />
    <label className={labelClassName ? `${labelClassName} radio-label` : 'radio-label'} htmlFor={id}>
      <span className="radio-label-text">{label}</span>
    </label>
  </div>
);
