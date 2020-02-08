import React from 'react';
import './Spinner.css';


function Spinner() {
    console.log('loader is working ')
  return (
    <div className="tasks-loader center">
    <div className="tasks-spinner"></div>
    </div>
  );
}


export default Spinner;