import React, { useRef, useEffect } from 'react';
import { useWindowSize } from 'core/hooks/useWindowSize';
import { useScrollY } from 'core/hooks/useScroll';
import { createCanvas } from './canvas';
import classes from './styles.module.scss';

export function Background() {
  const ref = useRef<HTMLDivElement>(null);
  const { height } = useWindowSize();
  const scrollY = useScrollY();

  useEffect(() => {
    const { init, animate, removeEventListeners } = createCanvas(
      ref.current as HTMLElement
    );

    init();
    animate();

    return () => {
      removeEventListeners();
    };
  }, []);

  const progress = Math.max((height - scrollY) / height, 0);

  return (
    <div
      style={{
        opacity: progress,
      }}
      className={classes.Background}
      ref={ref}
    />
  );
}
