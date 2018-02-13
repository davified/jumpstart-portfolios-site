import React from "react";
import { CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import TruncatedCard from "../truncatedCard/TruncatedCard";

const ProfileDescription = props => {
  return (
    <CardBody>
      <CardTitle>{props.profile.name}</CardTitle>
      <CardSubtitle>{props.profile.tagline}</CardSubtitle>
      <TruncatedCard text={props.profile.description} />
      <Button href={"/profiles/" + props.profile.id}>View Profile</Button>
    </CardBody>
  );
};

export default ProfileDescription;
