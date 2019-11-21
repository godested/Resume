import React, { useRef, useEffect } from 'react';
import { createGlitchCanvas } from './canvas';
import classes from './styles.module.scss';

export function Background() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { init, animate, removeEventListeners } = createGlitchCanvas(
      ref.current as HTMLElement
    );

    init();
    animate();

    return () => {
      removeEventListeners();
    };
  }, []);

  return <div className={classes.Background} ref={ref} />;
}
