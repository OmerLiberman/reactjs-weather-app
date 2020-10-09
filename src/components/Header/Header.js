import React from "react";

import "./Header.css";

const header = (props) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    return (
        <div className="Header">
            <h1> My weather app </h1>
            <h3> Today's date is: {today} </h3>
        </div>
    )
};

export default header;