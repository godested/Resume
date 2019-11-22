import React from 'react';
import { Page } from 'core/components/Page';
import { Glitch } from 'core/components/Glitch';
import { Typography } from 'core/components/Typography';
import { Wrapper } from 'core/components/Wrapper';
import { Background } from 'core/components/Background';

import classes from './styles.module.scss';

export default function NotFound() {
  return (
    <Page title="404">
      <Background />
      <section className={classes.Section}>
        <Wrapper>
          <Typography align="center" className={classes.Title} component="h2">
            <Glitch>404</Glitch>
          </Typography>
        </Wrapper>
      </section>
    </Page>
  );
}
