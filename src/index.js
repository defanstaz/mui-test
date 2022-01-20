import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import Map from './map';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>,
  document.querySelector("#root")
);

ReactDOM.render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>,
  document.querySelector("#map")
);
