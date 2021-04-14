import React, {useState, useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, XAxis, YAxis, Label } from 'recharts';

import {getCommands} from "../utils/awsUtil";

const Chart = () => {
  const theme = useTheme();

  let results = getCommands();
  console.log(typeof results);
  console.dir(results);

  const data = [
    {
      name: 'add review',
      Command: 3,
      amt: 3
    },];

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 90, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Command" fill="#c12b12" />
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