import React, { Component } from "react";
import {
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class ProfileDescription extends Component {
  render() {
    return (
      <CardBody>
        <CardTitle>{this.props.profile.name}</CardTitle>
        <CardSubtitle>{this.props.profile.tagline}</CardSubtitle>
        <CardText>{this.props.profile.description}</CardText>
        <Button>View Profile</Button>
      </CardBody>
    );
  }
}

export default ProfileDescription;
