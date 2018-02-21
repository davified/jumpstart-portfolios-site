import React from "react";
import { CardImg } from "reactstrap";
import PropTypes from "prop-types";

const ProfileIcon = props => (
  <CardImg src={props.image} className="profile-icon" />
);

ProfileIcon.propTypes = {
  image: PropTypes.string.isRequired
};

export default ProfileIcon;
