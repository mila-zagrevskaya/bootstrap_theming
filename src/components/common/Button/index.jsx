/* eslint-disable react/prop-types */
import React from 'react';

export const Button = ({ content, ...rest }) => (
    <button {...rest}>{content}</button>
);
