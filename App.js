import 'react-native-gesture-handler';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import Routes from './src/navigations/Routes';
import { store } from './src/Store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <Routes />
    </StoreProvider>
  );
}
