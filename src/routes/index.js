import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Feed from '../pages/feed';
import New from '../pages/new';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/new" component={New} />
  </Switch>
);

export default Routes;
