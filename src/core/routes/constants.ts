import loadableComponent from 'core/utils/loadableComponent';

export const ROUTES = {
  HOME: {
    path: '/',
    exact: true,
    component: loadableComponent(() =>
      import(/* webpackChunkName: "home", webpackPrefetch: true */ 'pages/Home')
    ),
  },
};
