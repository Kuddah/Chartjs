// ChartControls.js
import React, { useState } from 'react';

export default function ChartControls({ data, initialConfig = {}, onChartConfigChange }) {
  const [config, setConfig] = useState(initialConfig);

  const handleConfigChange = (newConfig) => {
    setConfig(newConfig);
    onChartConfigChange(newConfig);
  };

  return (
    <div>
      <select onChange={e => handleConfigChange({...config, xColumn: e.target.value})}>
        {data && data[0] && Object.keys(data[0]).map(column =>
          <option key={column} value={column}>{column}</option>)}
      </select>
      <select onChange={e => handleConfigChange({...config, yColumn: e.target.value})}>
        {data && data[0] && Object.keys(data[0]).map(column =>
          <option key={column} value={column}>{column}</option>)}
      </select>
      <input type="color" onChange={e => handleConfigChange({...config, color: e.target.value})} />
    </div>
  );
}
