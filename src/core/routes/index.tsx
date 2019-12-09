import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'core/components/Route';
import NotFound from 'pages/NotFound';
import { ROUTES } from './constants';

const routesToRender = Object.values(ROUTES);

export function Routes() {
  return (
    <Switch>
      {routesToRender.map(route => (
        <Route
          key={Array.isArray(route.path) ? route.path[0] : route.path}
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
