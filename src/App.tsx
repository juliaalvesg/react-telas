import React from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicsInput from './Components/DynamicsInput';
import OriginalDatabase from './Components/OriginalDatabase';
import TargetDatabase from './Components/TargetDatabase';
import ButtonConnect from './Components/ButtonConnect';
import Layout from "./Layout"
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />        
      </Layout>
    </div>
  );
}

export default App;
