import React, { useState, useEffect, useRef } from 'react';
import { getRandomInt, getRandomLetter, setRandomInterval } from './utils';
import classes from './styles.module.scss';

interface Options {
  min?: number;
  max?: number;
  duration?: number;
}

function useGlitch(string: string, options: Options = {}) {
  const { min = 80, max = 120, duration = 20 } = options;
  const [state, setState] = useState(string.split(''));

  const ref = useRef([...state]);

  useEffect(() => {
    const initialState = [...state];
    const interval = setRandomInterval(
      () => {
        const letterIndex = getRandomInt(0, state.length - 1);
        const newLetter = getRandomLetter();

        ref.current = ref.current.map((letter, index) =>
          index === letterIndex ? newLetter : letter
        );

        setState(ref.current);

        setTimeout(() => {
          ref.current = ref.current.map((letter, index) =>
            index === letterIndex ? initialState[index] : letter
          );

          setState(
            ref.current.map((letter, index) =>
              index === letterIndex ? initialState[index] : letter
            )
          );
        }, duration);
      },
      { min, max }
    );

    return interval.clear;
  }, []);

  return state;
}

interface Props {
  children: string;
  min?: number;
  max?: number;
  duration?: number;
}

export function Glitch(props: Props) {
  const { children, min, max, duration } = props;
  const glitchedText = useGlitch(children, { min, max, duration });

  return (
    <>
      {glitchedText.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span className={classes.Glitch} key={index} data-text={item}>
          {item}
        </span>
      ))}
    </>
  );
}
