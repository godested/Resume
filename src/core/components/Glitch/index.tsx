import React, { useState, useEffect } from 'react';
import {
  getRandomInt,
  getRandomLetter,
  setRandomInterval,
  shuffle,
} from './utils';
import classes from './styles.module.scss';

interface Options {
  min?: number;
  max?: number;
  duration?: number;
}

function useGlitch(string: string, options: Options = {}) {
  const { min = 200, max = 500, duration = 40 } = options;
  const [state, setState] = useState(string.split(''));

  useEffect(() => {
    const initialState = [...state];

    function makeGlitch() {
      const letterIndex = getRandomInt(0, state.length - 1);
      const newLetter = getRandomLetter();

      setState(prevState =>
        prevState.map((letter, index) =>
          index === letterIndex ? newLetter : letter
        )
      );

      setTimeout(() => {
        setState(prevState =>
          prevState.map((letter, index) =>
            index === letterIndex ? initialState[index] : letter
          )
        );
      }, duration);
    }

    function makeShuffle() {
      let stateBeforeShuffle: typeof state;

      setState(prevState => {
        stateBeforeShuffle = prevState;
        return shuffle(prevState);
      });

      setTimeout(() => {
        setState(stateBeforeShuffle);
      }, duration);
    }

    const interval = setRandomInterval(
      () => {
        if (Math.random() > 0.2) {
          makeGlitch();
        } else {
          makeShuffle();
        }
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
