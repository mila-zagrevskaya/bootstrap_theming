import React from 'react';

export const AnimatedSearch = () => (
  <div className="animated-search">
    <input type="text" className="animated-input" placeholder="Search..." />
    <div className="animated-search-icon">
      <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="30px" height="30px">
        <path
          d="M503.866,477.974L360.958,335.052c28.725-34.544,46.017-78.912,46.017-127.336  c0-110.084-89.227-199.312-199.312-199.312C97.599,8.403,8.351,97.631,8.351,207.715c0,110.064,89.248,199.312,199.312,199.312  c48.435,0,92.792-17.292,127.336-46.017l142.908,142.922L503.866,477.974z M29.331,207.715c0-98.334,79.987-178.332,178.332-178.332  c98.325,0,178.332,79.998,178.332,178.332s-80.007,178.332-178.332,178.332C109.318,386.047,29.331,306.05,29.331,207.715z"
          fill="#37404D"
        />
      </svg>
    </div>
  </div>
);
