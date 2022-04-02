import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./navigation/index";
import './global.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
  document.getElementById('root')
);