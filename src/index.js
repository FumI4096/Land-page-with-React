import React from 'react';
import ReactDOM from 'react-dom/client';
import { Nav } from './components/Nav';
import { Header } from './components/Header';

const nav = ReactDOM.createRoot(document.getElementsByTagName('nav')[0]);
const header = ReactDOM.createRoot(document.getElementsByTagName('header')[0]);

nav.render(
  <Nav />
)

header.render(
  <Header />
)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

