import React from 'react';
import { Wrapper } from 'core/components/Wrapper';
import { Typography } from 'core/components/Typography';
import { Glitch } from 'core/components/Glitch';
import { useResume } from 'core/providers/Resume';
import classes from './styles.module.scss';

export function Hero() {
  const { lastname, firstname, profession } = useResume();

  const fullName = `${lastname} ${firstname}`;

  return (
    <main className={classes.Section}>
      <Wrapper>
        <Typography
          font="secondary"
          variant="heading"
          weight="regular"
          align="center"
          component="h1"
          marginBottom="sm"
          uppercase
          className={classes.Heading}
        >
          <Glitch>{fullName}</Glitch>
        </Typography>
        <Typography
          variant="title"
          align="center"
          uppercase
          weight="regular"
          className={classes.Title}
        >
          {profession}
        </Typography>
      </Wrapper>
    </main>
  );
}
