import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CurrentBlock from './CurrentBlock';
import LatestBlock from './LatestBlock';
import NotFound from './NotFound';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={CurrentBlock} />
      <Route exact path="/latest-block" component={LatestBlock} />
      <Route render={NotFound} />
    </Switch>
  </main>
);

export default Main;
