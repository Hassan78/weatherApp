import React from "react";
import Weather from "./components/WeatherApiCall";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
