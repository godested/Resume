import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  children?: ReactNode;
}

export function Page(props: Props) {
  const { title, children } = props;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}
