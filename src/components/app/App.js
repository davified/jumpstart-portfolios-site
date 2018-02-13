import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopNavbar from "../customNavbar/CustomNavbar";
import Body from "../body/Body";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNavbar />
          <Body />
        </div>
      </Router>
    );
  }
}

export default App;
