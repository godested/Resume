import { RouteProps } from 'react-router-dom';
import loadableComponent from 'core/utils/loadableComponent';

export const ROUTES: Readonly<Record<string, Readonly<RouteProps>>> = {
  HOME: {
    path: '/',
    exact: true,
    component: loadableComponent(() =>
      import(/* webpackChunkName: "home", webpackPrefetch: true */ 'pages/Home')
    ),
  },
};
