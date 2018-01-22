import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import IndexPanel from "../indexPanel/IndexPanel";

import "./Body.css";

class Body extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="left-panel" xs="3">
            Left panel placeholder
          </Col>
          <Col className="main-panel" xs="9">
            <IndexPanel />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;
