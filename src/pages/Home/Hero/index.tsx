import React from 'react';
import { Wrapper } from 'core/components/Wrapper';
import { Typography } from 'core/components/Typography';
import { Glitch } from 'core/components/Glitch';
import { useResume } from 'core/providers/Resume';
import { Background } from 'core/components/Background';
import { Contacts } from './Contacts';
import classes from './styles.module.scss';

export function Hero() {
  const { firstName, lastName, profession } = useResume();

  return (
    <div className={classes.Section}>
      <Background />
      <Wrapper className={classes.Container}>
        <Typography
          weight="medium"
          variant="heading"
          align="center"
          component="h1"
          marginBottom="sm"
          uppercase
          className={classes.Heading}
        >
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <Glitch>{firstName}</Glitch> <Glitch>{lastName}</Glitch>
        </Typography>
        <Typography
          variant="subtitle"
          align="center"
          uppercase
          weight="regular"
          className={classes.Title}
        >
          {profession}
        </Typography>
      </Wrapper>
      <Contacts />
    </div>
  );
}
