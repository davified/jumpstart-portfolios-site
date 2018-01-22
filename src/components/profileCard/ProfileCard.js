import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg } from "reactstrap";
import ProfileDescription from "../profileDescription/ProfileDescription";
import profileIcon from "../../images/man.svg";

import "./ProfileCard.css";

class ProfileCard extends Component {
  render() {
    return (
      <div>
        <Card className="profile-card">
          <Container>
            <Row>
              <Col className="left-panel" xs="3">
                <CardImg src={profileIcon} className="profile-icon" />
              </Col>
              <Col className="main-panel" xs="9">
                <ProfileDescription profile={this.props.profile} />
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}

export default ProfileCard;
