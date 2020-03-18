import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Jobs from './pages/Jobs';
import Job from './pages/Job';
import Skills from './pages/Skills';
import About from './pages/About';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/jobs/:job_id" component={Job} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/skills" component={Skills} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
