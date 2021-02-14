import React from 'react';
import lul from './icons/lul.png'
//components
import SideNav from './components/SideNav';
import Chart from './components/Chart';
 
//styling
import {
  Container,
  CssBaseline
} from '@material-ui/core';

const background = {
  backgroundImage: 'url('+lul+')'
}

function App() {

  return (
    <div className="App">
      <Chart />
      <div >
        <>
        <SideNav />
        </>
      </div>
    </div>
  );
}

export default App;
