import MotionHoc from "./MotionHoc.js";
import {React, useState } from 'react';
import ChartControls from '../ChartControls';
import MyChart from '../MyChart';

const ChartComponent = (data) => {
    const [chartConfigs, setChartConfigs] = useState([]);
    const handleChartConfigChange = (index, newConfig) => {
        setChartConfigs(prevConfigs => {
          const newConfigs = [...prevConfigs];
          newConfigs[index] = newConfig;
          return newConfigs;
        });
      };
  return (
    <>
    <h1>Home</h1>
    {chartConfigs.map((config, i) => (
        <div key={i}>
    <ChartControls
            data={data}
            initialConfig={config}
            onChartConfigChange={newConfig => handleChartConfigChange(i, newConfig)}
          />
          <MyChart {...config} data={data} />
        </div>
      ))}
      <ChartControls
        data={data}
        onChartConfigChange={newConfig => setChartConfigs([...chartConfigs, newConfig])}
      />     
    </>
  )
};

const Chart = MotionHoc(ChartComponent);

export default Chart;