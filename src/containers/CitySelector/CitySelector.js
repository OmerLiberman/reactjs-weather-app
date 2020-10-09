import React, {Component} from "react";
import "./CitySelector.css";

class CitySelector extends Component {

    selectionHandler = (event) => {
        if (event.target.value) {
            this.props.selectHandler(event.target.value);
        }
    }

    render() {
        return (
            <div className="CitySelector">
              <select onChange={this.selectionHandler}>
                <option value="" disabled selected> Select city </option>
                <option value="london"> London </option>
                <option value="paris"> Paris </option>
                <option value="jerusalem"> Jerusalem </option>
              </select>
            </div>
        );
    }
}


export default CitySelector;