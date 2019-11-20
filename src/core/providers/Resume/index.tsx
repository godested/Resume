import React, { ReactNode, createContext, useContext } from 'react';
import { Resume } from './types';
import jsonData from './data.json';

export const ResumeContext = createContext(jsonData as Resume);

interface Props {
  children: ReactNode;
}

export function ResumeProvider(props: Props) {
  const { children } = props;

  return (
    <ResumeContext.Provider value={jsonData as Resume}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume(): Resume;
export function useResume<T extends Function>(selector?: T) {
  const data = useContext(ResumeContext);

  return selector ? selector(data) : data;
}
