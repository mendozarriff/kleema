import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
import Header from './component/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body">
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;
