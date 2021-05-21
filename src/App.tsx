import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import Routes from './routes/SignRoutes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
