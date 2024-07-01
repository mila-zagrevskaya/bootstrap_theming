/* eslint-disable react/prop-types */
import React from 'react';

export const DataList = ({ label, id, options = [] }) => (
  <div className="data-list" >
    <label htmlFor="exampleDataList" className="form-label">{label}</label>
    <input className="form-control" list="datalistOptions" id={id} placeholder="Type to search..."/>
    <datalist id="datalistOptions">
      {options.map((option) => {
        const { text, key } = option;
        return (
        <option value={text} key={key}/>);
      })
      }
    </datalist>
  </div>
);
