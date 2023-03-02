import React from 'react';
import ReactDOM from 'react-dom/client';
import MainLayout from './src/layout/MainLayout';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './src/style/style';
import { AuthContextProvider } from './src/context/Auth.context';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout />
      </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
