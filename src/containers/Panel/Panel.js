import React, {Component} from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import CitySelector from '../CitySelector/CitySelector';
import DataPanel from '../../components/DataPanel/DataPanel';
import DetailedInfo from '../DetailedInfo/DetailedInfo';

class Panel extends Component {
  state = {
    selectedCity: null,
    selectedCityData: null,
  };

  citySelectionHandler = (city) => {
    const key = "c03b0aac46b0db195134d5cb5ef38931";
    if (city !== this.state.selectedCity) {
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +
          '&appid=' + key).then(resp => {
        let data = {...resp.data};
        this.setState({
          selectedCity: city,
          selectedCityData: data,
        });
      }).catch(err => {
        console.log(err);
      });
    }
  };

  render() {
    let tempMin = null, tempMax = null, feelsLike = null;
    let humidity = null, clouds = null, pressure = null;
    if (this.state.selectedCityData) {
      tempMin = this.state.selectedCityData.main.temp_min;
      tempMax = this.state.selectedCityData.main.temp_max;
      feelsLike = this.state.selectedCityData.main.feels_like;
      humidity = this.state.selectedCityData.main.humidity;
      clouds = this.state.selectedCityData.clouds.all;
      pressure = this.state.selectedCityData.main.pressure;
    }

    let subSection = null;
    if (this.state.selectedCity) {
      subSection = <div>
        <DataPanel title1="TempMin" title2="TempMax" title3="FeelsLike"
                   value1={tempMin} value2={tempMax} value3={feelsLike}/>
        <DetailedInfo title1="humidity" title2="clouds" title3="pressure"
                      value1={humidity} value2={clouds} value3={pressure}/>
      </div>;
    }

    return (
        <div>
          <Header/>
          <CitySelector selectHandler={this.citySelectionHandler}/>
          {subSection}
        </div>
    );
  }
}

export default Panel;