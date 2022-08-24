import React from 'react';
import { createRoot } from 'react-dom/client';

import './scss/index.scss';
import Application from './Application';
import Providers from './Providers';

createRoot(document.querySelector('.root')).render(
  <React.StrictMode>
    <Providers>
      <Application />
    </Providers>
  </React.StrictMode>
);
