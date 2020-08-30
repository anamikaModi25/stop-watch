import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './Component/Stopwatch';
import PrivadoHeader from './Component/privadoHeader';

function App() {
  return (
    <div className="row">
        <div className="col-md-12" id="stop-watch-container">
          <PrivadoHeader />
          <Stopwatch />
        </div>
    </div>
  );
}

export default App;
