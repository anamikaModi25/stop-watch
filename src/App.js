import React from 'react';
import './App.css';
import Stopwatch from './Component/Stopwatch';
import PrivadoHeader from './Component/privadoHeader';

export default function App() {
  return (
    <div className="row">
        <div className="col-md-12" id="stop-watch-container">
          <PrivadoHeader />
          <Stopwatch />
        </div>
    </div>
  );
}