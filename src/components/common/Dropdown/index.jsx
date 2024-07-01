/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const mock = [
  { id: 1, text: 'Action' },
  { id: 2, text: 'Another action' },
  { id: 3, text: 'Something else here' },
];

export const Dropdown = ({
  label, options = mock, emptyLine = false, hasSeparated = false, secondaryDropMenu,
}) => {
  const [copyOption, setCopyOption] = useState([]);
  useEffect(() => {
    setCopyOption(options);
  }, [options]);

  return (
    <div className="dropdown mb-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        {label}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {emptyLine && (
          <li className="dropdown-item" onClick={() => {}}>
            &nbsp;
          </li>
        )}
        {copyOption.map((el) => (
          <li key={el.id}>
            <a className="dropdown-item" href="#">{el.text}</a>
          </li>
        ))}

        { secondaryDropMenu && (
        <>
          {hasSeparated && (
            <li>
              <hr className="dropdown-divider"/>
            </li>
          )}
          { secondaryDropMenu.map((el) => (
            <li key={el.id}>
              <a className="dropdown-item" href="#">{el.text}</a>
            </li>
          ))}
        </>
        )}
      </ul>
    </div>
  );
};
