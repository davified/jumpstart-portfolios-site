import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomNavbar from "../customNavbar/CustomNavbar";
import Body from "../body/Body";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CustomNavbar />
          <Body />
        </div>
      </Router>
    );
  }
}

export default App;
