import React, { ElementType, ReactNode } from 'react';
import classNames from 'classnames';
import classes from './styles.module.scss';

const defaultComponentsMap = {
  heading: 'h2',
  subheading: 'h3',
  title: 'h4',
  subtitle: 'h5',
  caption: 'h6',
  tip: 'span',
  body: 'p',
  base: 'span',
};

interface Props {
  component?: ElementType;
  variant?:
    | 'heading'
    | 'subheading'
    | 'title'
    | 'subtitle'
    | 'body'
    | 'caption'
    | 'tip'
    | 'base';
  color?: 'black' | 'white' | 'primary' | 'secondary' | 'error' | 'inherit';
  align?: 'inherit' | 'left' | 'center' | 'right';
  weight?: 'inherit' | 'regular' | 'medium' | 'bold';
  marginBottom?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  font?: 'primary' | 'secondary';
  children?: ReactNode;
  noWrap?: boolean;
  italic?: boolean;
  underline?: boolean;
  inline?: boolean;
  uppercase?: boolean;
  className?: string;
}

export function Typography(props: Props) {
  const {
    font = 'primary',
    variant = 'body',
    component: Component = defaultComponentsMap[variant] || 'span',
    color = 'white',
    marginBottom,
    noWrap,
    align,
    weight,
    className,
    inline,
    uppercase,
    italic,
    underline,
    children,
    ...restProps
  } = props;

  const typographyClasses = classNames(
    classes.Typography,
    classes[`Typography--${variant}`],
    classes[`Typography--color-${color}`],
    classes[`Typography--align-${align}`],
    classes[`Typography--marginBottom-${marginBottom}`],
    classes[`Typography--weight-${weight}`],
    classes[`Typography--font-${font}`],
    uppercase && classes[`Typography--uppercase`],
    italic && classes[`Typography--italic`],
    noWrap && classes[`Typography--noWrap`],
    inline && classes[`Typography--inline`],
    underline && classes[`Typography--underline`],
    className
  );

  return (
    <Component className={typographyClasses} {...restProps}>
      {children}
    </Component>
  );
}
