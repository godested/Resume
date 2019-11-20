import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import 'normalize.css';
import 'styles/global.scss';

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
