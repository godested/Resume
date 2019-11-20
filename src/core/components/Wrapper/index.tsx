import React, { ReactNode, ElementType } from 'react';
import classNames from 'classnames';
import classes from './styles.module.scss';

interface Props {
  children?: ReactNode;
  component?: ElementType;
  className?: ReactNode;
}

export function Wrapper(props: Props) {
  const {
    component: Component = 'div',
    children,
    className,
    ...restProps
  } = props;

  return (
    <Component
      className={classNames(classes.Wrapper, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
}
