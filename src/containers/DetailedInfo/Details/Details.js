import React from "react";

import WeatherParam from "../../../components/WeatherParam/WeatherParam";
import "./Details.css";

const details = (props) => {
    return (
        <div className="Details">
            <WeatherParam value={props.humidity} elemTitle={"Humidity"}/>
            <WeatherParam value={props.clouds} elemTitle={"Clouds"}/>
            <WeatherParam value={props.pressure} elemTitle={"Pressure"}/>
        </div>
    )
}

export default details;