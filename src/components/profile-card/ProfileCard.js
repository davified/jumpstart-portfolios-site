import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Card } from "reactstrap";
import ProfileDescription from "../profile-description/ProfileDescription";
import image from "../../images/man.svg";
import ProfileIcon from "../profile-icon/ProfileIcon";

import "./ProfileCard.css";
import "../profile-icon/ProfileIcon.css";

const ProfileCard = props => {
  return (
    <div>
      <Card className="profile-card">
        <Container>
          <Row>
            <Col className="left-panel" xs="4">
              <ProfileIcon image={image} />
            </Col>
            <Col className="main-panel" xs="8">
              <ProfileDescription profile={props.profile} />
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default ProfileCard;
