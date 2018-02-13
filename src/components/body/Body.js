import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Route } from "react-router-dom";
import IndexPanel from "../indexPanel/IndexPanel";
import ProfilePage from "../profilePage/ProfilePage";

import profiles from "../../profiles.js";

class Body extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="left-panel" xs="3">
            Left panel placeholder
          </Col>
          <Col className="main-panel" xs="9">
            <Route
              exact
              path="/"
              render={() => {
                return <IndexPanel profiles={profiles} />;
              }}
            />

            <Route
              path="/profiles/:profileId"
              render={({ match }) => {
                return (
                  <ProfilePage
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
