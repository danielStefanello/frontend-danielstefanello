import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Jobs from './pages/Jobs';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/jobs" component={Jobs} />
      </Switch>
    </BrowserRouter>
  );
}
