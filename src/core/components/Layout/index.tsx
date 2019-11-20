import React, { ReactNode } from 'react';
import classes from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export function Layout(props: Props) {
  const { children } = props;

  return <main className={classes.Layout}>{children}</main>;
}
