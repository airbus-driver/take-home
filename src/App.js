import React from 'react';
import { ThemeProvider } from 'styled-components';

import FunctionPage from './pages/FunctionPage';
import { theme } from './common/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <FunctionPage />
      </main>
    </ThemeProvider>
  );
}

export default App;
