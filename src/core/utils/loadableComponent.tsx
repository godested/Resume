import React from 'react';
import createLoadable, {
  DefaultImportedComponent,
  Options,
} from '@loadable/component';
import { ProgressBar } from 'core/components/ProgressBar';

export default function loadableComponent<T>(
  loadable: (props: T) => Promise<DefaultImportedComponent<T>>,
  options: Options<T> = {}
) {
  return createLoadable(loadable, {
    fallback: <ProgressBar />,
    ...options,
  });
}
