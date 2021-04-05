import React, {useState, useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, XAxis, YAxis, Label } from 'recharts';

import {getCommands} from "../utils/awsUtil";

const Chart = () => {
  const theme = useTheme();

  let results = getCommands();
  console.log(typeof results);
  console.dir(results);
  
  
  useEffect(() => {
    console.dir(typeof results);
    for (let key in results) {
      if (results.hasOwnProperty(key)) console.log(`${key}:${results[key]}`);
      else console.log('fuck')
      
    }
  });

  return (
    <BarChart
      width={500}
      height={300}
      data={'test'}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export default Chart;

/**
 * import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
}
 */