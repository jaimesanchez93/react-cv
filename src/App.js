import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';

import CVHeader from './components/Header';
import CVBody from './components/Body';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas} from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function App() {


  const GlobalStyle = createGlobalStyle`
    @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

    body {
      color: white;
      font-family: Roboto, sans-serif;
    }
  `

  return (
    <div className="App">
      <React.Fragment>
        <GlobalStyle />
        <CVHeader></CVHeader>
        <CVBody></CVBody>
      </React.Fragment>
    </div>
  );
}

export default App;
