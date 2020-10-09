import React, {Component} from 'react';
import Details from './Details/Details';
import DataPanel from '../../components/DataPanel/DataPanel';

class DetailedInfo extends Component {
  state = {
    isDetailedButtonClicked: false,
  };

  moreDetailsButtonClickedHandler = () => {
    this.setState({
      isDetailedButtonClicked: !this.state.isDetailedButtonClicked,
    });
  };

  render() {
    let detailsElement = null;

    if (this.state.isDetailedButtonClicked) {
      detailsElement =
          <DataPanel title1="humidity" title2="clouds" title3="pressure"
                     value1={this.props.value1} value2={this.props.value2}
                     value3={this.props.value3}/>;
    }

    return (
        <div className="DetailedInfo">
          <button onClick={this.moreDetailsButtonClickedHandler}> More details
          </button>
          {detailsElement}
        </div>
    );
  };
}

export default DetailedInfo;