import React, {useState, useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, XAxis, YAxis, Label } from 'recharts';
import AWS from 'aws-sdk';

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

const Chart = () => {
  const theme = useTheme();
  const [commands, setCommands] = useState([]);
  

  useEffect(() => {
    let listOfCommands = [];
    let params = {
      TableName: 'Logger'
    };

    docClient.scan(params, (err, data) => {
      console.log('Scanning logger db');
      if (err) {
        console.error('Unable to get command - ' + JSON.stringify(err, null, 2));
      } else {
        console.log('Scan success!');

        data.Items.forEach(item => {
          if (!(item.command in listOfCommands)) {
            listOfCommands[item.command] = 0;
          };

          listOfCommands[item.command] += 1;
          setCommands(listOfCommands[item.command]);
        })
      }
    })
    console.log(listOfCommands);
  }, []);

  return (
    <BarChart
      width={500}
      height={300}
      data={commands}
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