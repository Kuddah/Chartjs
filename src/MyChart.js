import React, { useEffect } from 'react';
import Plotly from 'plotly.js/dist/plotly';

export default function MyChart({ data, xColumn, yColumn, color }) {
  const divId = `chart-${Math.random()}`;

  useEffect(() => {
    if (data.length > 0) {
      Plotly.newPlot(divId, [{
        x: data.map(row => row[xColumn]),
        y: data.map(row => row[yColumn]),
        type: 'scatter',
        mode: 'lines',
        marker: {color: color},
      }]);
    }
  }, [data, xColumn, yColumn, color, divId]);

  return <div id={divId}></div>;
}
