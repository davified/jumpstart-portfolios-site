import React from "react";
import ProfileCard from "../profileCard/ProfileCard";

const ListView = props => {
  return props.profiles.map((profile, i) => (
    <ProfileCard profile={profile} key={i} />
  ));
};

export default ListView;
