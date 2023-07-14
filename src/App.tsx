import React from 'react';
import {Home} from './pages/Home';
import {TamaguiProvider} from 'tamagui';
import config from '../tamagui.config';

function App(): JSX.Element {
  return (
    <TamaguiProvider config={config}>
      <Home />
    </TamaguiProvider>
  );
}

export default App;
