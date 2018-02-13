import React from "react";
import ProfileCard from "../profileCard/ProfileCard";

const ListView = props => {
  return (
    <div>
      {props.profiles.map((profile, i) => (
        <ProfileCard profile={profile} key={i} />
      ))}
    </div>
  );
};

export default ListView;
