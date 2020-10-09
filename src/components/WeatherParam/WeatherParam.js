import React from 'react';
import './WeatherParam.css';

const weatherParam = (props) => {
  return (
      <div className="WeatherParam">
        <p> {props.elemTitle} </p>
        <p> {props.value} </p>
      </div>
  );
};

export default weatherParam;
