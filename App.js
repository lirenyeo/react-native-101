import 'react-native-gesture-handler';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import Routes from './src/navigations/Routes';
import { store, persistor } from './src/Store';

export default function App() {
  return (
    <StoreProvider store={store} persistor={persistor}>
      <Routes />
    </StoreProvider>
  );
}
