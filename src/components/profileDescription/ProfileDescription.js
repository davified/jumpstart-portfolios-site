import React, { Component } from "react";
import { CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import TruncatedCard from "../truncatedCard/TruncatedCard";

class ProfileDescription extends Component {
  render() {
    return (
      <CardBody>
        <CardTitle>{this.props.profile.name}</CardTitle>
        <CardSubtitle>{this.props.profile.tagline}</CardSubtitle>
        <TruncatedCard text={this.props.profile.description} />
        <Button>View Profile</Button>
      </CardBody>
    );
  }
}

export default ProfileDescription;
