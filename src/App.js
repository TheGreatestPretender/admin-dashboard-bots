import React from 'react';
import lul from './icons/lul.png'
//components
import SideNav from './components/SideNav';
 
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
      <CssBaseline />
      <Container style={{background}} maxWidth="sm">
        <SideNav />
      </Container>
    </div>
  );
}

export default App;
