import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import App from './App';


function Api({ airtableData }) {
  return (
    <div>
      <h2>Character Data</h2>
      <ul>
        {airtableData.map((record, index) => (
          <div key={index}>
            <strong>Name:</strong> {record.fields.name} <br />
            <strong>Height:</strong> {record.fields.height} <br />
            <strong>Mass:</strong> {record.fields.mass}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Api;






















