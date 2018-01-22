import React, { Component } from "react";
import CustomNavbar from "../customNavbar/CustomNavbar";
import Body from "../body/Body";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <Body />
      </div>
    );
  }
}

export default App;
