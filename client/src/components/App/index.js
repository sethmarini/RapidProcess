import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../HomePage';

import './App.css';

const App = () =>
  <Router>
    <div className="app">

      <Route exact path={'/'} component={() => <HomePage />} />
      {/* <Route exact path={'/aboutus'} component={() => <AboutUsPage />} />
      <Route exact path={'/quote'} component={() => <FormPage />} /> */}

   
    </div>
  </Router>

export default App;
