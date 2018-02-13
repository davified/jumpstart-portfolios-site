import React from "react";
import profileIcon from "../../images/man.svg";
import ProfileIcon from "../profileIcon/ProfileIcon";
import CompetenciesList from "../competenciesList/CompetenciesList";

const FullProfile = props => {
  return (
    <div>
      <ProfileIcon image={profileIcon} />
      <h1>{props.profile.name}</h1>
      <p>{props.profile.tagline}</p>

      <p>{props.profile.description}</p>

      <CompetenciesList
        title="Hard Competencies"
        competencies={props.profile.hard_competencies}
      />

      <CompetenciesList
        title="Soft Competencies"
        competencies={props.profile.soft_competencies}
      />
    </div>
  );
};

export default FullProfile;
