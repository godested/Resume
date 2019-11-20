import React from 'react';
import { Route as RouteComponent, RouteProps } from 'react-router-dom';

export function Route(props: RouteProps) {
  const { component, exact, ...restProps } = props;

  return <RouteComponent component={component} exact={exact} {...restProps} />;
}
