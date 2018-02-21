import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Route } from "react-router-dom";
import ListView from "../list-view/ListView";
import FullProfile from "../full-profile/FullProfile";

import profiles from "../../profiles.js";

class Body extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="left-panel" xs="12">
            Left panel placeholder
          </Col>
          <Col className="main-panel" xs="12">
            <Route
              exact
              path="/"
              render={() => {
                return <ListView profiles={profiles} />;
              }}
            />

            <Route
              path="/profiles/:profileId"
              render={({ match }) => {
                return (
                  <FullProfile
                    profile={profiles.find(
                      profile => profile.id === match.params.profileId
                    )}
                  />
                );
              }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;
