import React from "react";

import WeatherParam from "../WeatherParam/WeatherParam";
import "./DataPanel.css";

const dataPanel = (props) => {
    return (
      <div className="DataPanel">
          <WeatherParam value={props.value1} elemTitle={props.title1}/>
          <WeatherParam value={props.value2} elemTitle={props.title2} />
          <WeatherParam value={props.value3} elemTitle={props.title3}/>
      </div>
    );
}

export default dataPanel;