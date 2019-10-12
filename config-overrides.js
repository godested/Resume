/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const { override, useEslintRc } = require('customize-cra'); // eslint-disable-line import/no-extraneous-dependencies

const overrideSassLoader = (loaderOptions = {}) => config => {
  const mode = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

  // Need these for production mode, which are copied from react-scripts
  const publicPath = require('react-scripts/config/paths').servedPath;
  const shouldUseRelativeAssetPaths = publicPath === './';
  const shouldUseSourceMap =
    process.env.GENERATE_SOURCEMAP !== 'false' || mode === 'dev';
  const sassModuleRegex = /\.module\.(scss|sass)$/;

  const localIdentName =
    loaderOptions.localIdentName || '[path][name]__[local]--[hash:base64:5]';

  const getSassLoader = cssOptions => {
    return [
      mode === 'dev'
        ? require.resolve('style-loader')
        : {
            loader: require('mini-css-extract-plugin').loader,
            options: Object.assign(
              {},
              shouldUseRelativeAssetPaths ? { publicPath: '../../' } : undefined
            ),
          },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
          ],
          sourceMap: shouldUseSourceMap,
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: Object.assign(loaderOptions, {
          sourceMap: shouldUseSourceMap,
        }),
      },
    ];
  };

  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf;

  // Insert sass-loader as the penultimate item of loaders (before file-loader)
  const loaderIndex = loaders.findIndex(
    loader =>
      loader.test && loader.test.toString() === sassModuleRegex.toString()
  );

  loaders.splice(loaderIndex, 0, {
    test: sassModuleRegex,
    use: getSassLoader({
      importLoaders: 2,
      modules: true,
      localIdentName,
    }),
  });

  return config;
};

module.exports = override(
  useEslintRc(),
  overrideSassLoader({
    localIdentName:
      process.env.NODE_ENV === 'production'
        ? '[sha1:hash:hex:5]'
        : '[folder]_[local]__[sha1:hash:hex:5]',
  })
);
