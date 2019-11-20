import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from 'core/utils/serviceWorker';
import { IS_DEV } from 'core/utils/vars';
import { App } from './App';

const MOUNT_NODE = document.getElementById('root');

render(<App />, MOUNT_NODE);

serviceWorker.register();

/* --------------------- HMR ------------------------ */
if (IS_DEV && module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { App: NextApp } = require('./App');
    render(<NextApp />, MOUNT_NODE);
  });
}
