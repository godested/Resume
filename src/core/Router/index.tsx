import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'components/Route';
import { NotFound } from 'pages/NotFound';
import { ROUTES } from './constants';

const routesToRender = Object.values(ROUTES);

export function Router() {
  return (
    <Switch>
      {routesToRender.map(route => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

export { ROUTES };
