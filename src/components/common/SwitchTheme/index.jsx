import React, { useState } from 'react';

export const SwitchTheme = () => {
  const [checkedTheme, setChacked] = useState(false);
  const setTheme = () => {
    const container = document.getElementById('app-container');
    container.classList.toggle('theme-dark');
    container.classList.toggle('theme-light');
    setChacked(!checkedTheme);
  };

  return (
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox"
      id="flexSwitchCheckChecked" onChange = { setTheme }/>
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
        {checkedTheme
          ? <i className="bi bi-sun-fill"></i>
          : <i className="bi bi-moon-stars-fill"></i>
        }
      </label>
    </div>
  );
};
