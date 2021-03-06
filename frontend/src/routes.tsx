import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

const Home = lazy(() => import('./pages/Home'));
const Pokemon = lazy(() => import('./pages/Pokemon'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pokemon/:id" component={Pokemon} />
      <Route path="/pokedex/:page" component={Home} />
    </Switch>
  </Suspense>
);

export default routes;
