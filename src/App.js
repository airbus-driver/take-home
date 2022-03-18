import React, { useState } from 'react';

import { Select, TextBoxValidator } from './components';

const options = [
  { label: 'koko', value: 'koko' },
  { label: 'popo', value: 'popo' },
  { label: 'ssss', value: 'ssss' },
];

const rules = [
  { label: 'Valid characters: A-Z, a-z, 0-9, -', expression: '^[A-Za-z0-9-]*$' },
  { label: 'Must start with A-Z', expression: '^[A-Z]' },
  { label: 'Max length: 8', expression: '^(?=.{0,8}$).*$' },
];

function App() {
  const [opt, setOpt] = useState('koko');
  return (
    <div className="App">
      <div>
        <Select options={options} selectedValue={opt} onChange={(v) => setOpt(v)} />
      </div>
      <div>
        <TextBoxValidator rules={rules} />
      </div>
    </div>
  );
}

export default App;
