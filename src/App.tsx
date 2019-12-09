import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Layout } from 'core/components/Layout';
import { ResumeProvider } from 'core/providers/Resume';
import { Routes } from 'core/routes';
import { BASEURL } from 'core/utils/vars';
import 'normalize.css';
import 'core/styles/global.scss';

export function App() {
  return (
    <HelmetProvider>
      <Helmet defaultTitle="godested" titleTemplate="%s | godested" />
      <Router basename={BASEURL}>
        <ResumeProvider>
          <Layout>
            <Routes />
          </Layout>
        </ResumeProvider>
      </Router>
    </HelmetProvider>
  );
}
