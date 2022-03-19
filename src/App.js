import React from 'react';
import { ThemeProvider } from 'styled-components';

import FunctionPage from './pages/FunctionPage';
import { theme } from './common/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <FunctionPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
