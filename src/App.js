import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import SelectServicesAndEmployee from '../src/pages/select_services_and_employees/select_services_and_employees';
import SelectDateAndTime from '../src/pages/select_date_and_time/select_date_and_time';
import Confirmation from '../src/pages/confirmaition/confirmation';
import Congratulation from '../src/pages/congratulation/congratulation';

import 'sanitize.css';
import './assets/global.scss';

function App() {
  return (
    <Router basename="/">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
      <main>
        <Route path="/" exact component={SelectServicesAndEmployee} />
        <Route path="/select-date-time" exact component={SelectDateAndTime} />
        <Route path="/confirmation" exact component={Confirmation} />
        <Route path="/congratulation" exact component={Congratulation} />
      </main>
    </Router>
  );
}

export default App;
