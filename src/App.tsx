import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Layout } from 'core/components/Layout';
import { ResumeProvider } from 'core/providers/Resume';
import { Router } from 'core/routes';
import { BASEURL } from 'core/utils/vars';
import 'normalize.css';
import 'core/styles/global.scss';

export function App() {
  return (
    <HelmetProvider>
      <Helmet defaultTitle="godested" titleTemplate="%s | godested" />
      <BrowserRouter basename={BASEURL}>
        <ResumeProvider>
          <Layout>
            <Router />
          </Layout>
        </ResumeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
