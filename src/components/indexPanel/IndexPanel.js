import React, { Component } from "react";
import ProfileCard from "../profileCard/ProfileCard";
import profiles from "../../profiles.js";

class IndexPanel extends Component {
  render() {
    return (
      <div>
        {profiles.map((profile, i) => (
          <ProfileCard profile={profile} key={i} />
        ))}
      </div>
    );
  }
}

export default IndexPanel;
