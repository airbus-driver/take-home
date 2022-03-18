import React, { useState } from 'react';

import { Select, ListItem } from './components';

const options = [
  { label: 'koko', value: 'koko' },
  { label: 'popo', value: 'popo' },
  { label: 'ssss', value: 'ssss' },
];

function App() {
  const [opt, setOpt] = useState('koko');
  return (
    <div className="App">
      <div>
        <Select options={options} selectedValue={opt} onChange={(v) => setOpt(v)} />
      </div>
    </div>
  );
}

export default App;
