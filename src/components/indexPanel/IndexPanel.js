import React from "react";
import ProfileCard from "../profileCard/ProfileCard";

const IndexPanel = props => {
  return (
    <div>
      {props.profiles.map((profile, i) => (
        <ProfileCard profile={profile} key={i} />
      ))}
    </div>
  );
};

export default IndexPanel;
