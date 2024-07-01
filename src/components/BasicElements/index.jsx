import React from 'react';

import { Buttons } from 'components/BasicElements/Buttons/index.jsx';
import { Inputs } from 'components/BasicElements/Inputs/index.jsx';
import { SelectionButtons } from 'components/BasicElements/SelectionButtons/index.jsx';
import { Dropdowns } from 'components/BasicElements/Dropdowns/index.jsx';
import { ProgressBar } from 'components/BasicElements/ProgressBar/index.jsx';
import { Paginations } from 'components/BasicElements/Paginations/index.jsx';

export const BasicElements = () => (
  <section className="section container" >
    <h2 className="title-2">Basic Elements</h2>
    <Buttons />
    <Inputs/>
    <SelectionButtons/>
    <Dropdowns/>
    <div className="row">
      <ProgressBar/>
      <Paginations/>
    </div>
  </section>
);
