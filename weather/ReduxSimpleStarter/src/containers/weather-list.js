import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js';
import GoogleMap from '../components/google-map.js';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData
            .list
            .map(weather => weather.main.temp);
        const pressures = cityData
            .list
            .map(weather => weather.main.pressure);
        const Humidities = cityData
            .list
            .map(weather => weather.main.humidity);
        const {lon,lat} = cityData.city.coord;   

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="orange" unit="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" unit="hPa"/>
                </td>
                <td>
                    <Chart data={Humidities} color="blue" unit="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this
                        .props
                        .weather
                        .map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);