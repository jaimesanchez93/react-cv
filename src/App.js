import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Career from './components/Career';

import {ResponsiveProvider} from './lib/ResponsiveProvider';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)


function App() {
  return (
    <ResponsiveProvider>
      <React.Fragment>
        <Header></Header>
        <AboutMe />
        <Skills />
        <Career />
      </React.Fragment>
    </ResponsiveProvider>
  );
}

export default App;
