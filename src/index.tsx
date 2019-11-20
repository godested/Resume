import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from 'utils/serviceWorker';
import { IS_DEV } from 'utils/vars';
import { App } from './core';

const MOUNT_NODE = document.getElementById('root');

render(<App />, MOUNT_NODE);

serviceWorker.register();

/* --------------------- HMR ------------------------ */
if (IS_DEV && module.hot) {
  module.hot.accept('./core', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { App: NextApp } = require('./core');
    render(<NextApp />, MOUNT_NODE);
  });
}
