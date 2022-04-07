import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from 'react-redux'
import { store, persistor } from './redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from "./navigation/index";
import './global.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  </StrictMode>
);