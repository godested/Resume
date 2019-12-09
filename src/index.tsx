import React from 'react';
import { render } from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import * as serviceWorker from 'core/utils/serviceWorker';
import { IS_DEV, FIREBASE_CONFIG } from 'core/utils/vars';
import { App } from './App';

firebase.initializeApp(FIREBASE_CONFIG);
firebase.analytics();

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
