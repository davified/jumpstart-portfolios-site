import React from "react";
import icon from "../../images/man.svg";
import ProfileIcon from "../profile-icon/ProfileIcon";
import CompetenciesList from "../competencies-list/CompetenciesList";
import ExperienceSection from "../experience-section/ExperienceSection";

const FullProfile = props => {
  return (
    <div>
      <ProfileIcon image={icon} />
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

      <ExperienceSection
        title="Work Experience"
        entries={props.profile.job_experience}
      />

      <ExperienceSection
        title="Education"
        entries={props.profile.education_experience}
      />
    </div>
  );
};

export default FullProfile;
