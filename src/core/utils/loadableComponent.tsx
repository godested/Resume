import React from 'react';
import createLoadable, { DefaultImportedComponent } from '@loadable/component';
import { ProgressBar } from 'core/components/ProgressBar';

export default function loadableComponent<T>(
  loadable: (props: T) => Promise<DefaultImportedComponent<T>>,
  options = {}
) {
  return createLoadable(loadable, {
    fallback: <ProgressBar />,
    ...options,
  });
}
