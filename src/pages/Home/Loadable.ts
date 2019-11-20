import loadableComponent from 'core/utils/loadableComponent';

export default loadableComponent(() =>
  import(/* webpackChunkName: "completion", webpackPrefetch: true */ '.')
);
