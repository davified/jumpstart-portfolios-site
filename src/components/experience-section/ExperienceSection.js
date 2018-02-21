import React from "react";
import ExperienceList from "../experience-list/ExperienceList";

const ExperienceSection = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ExperienceList title="Work Experience" entries={props.entries} />
    </div>
  );
};

export default ExperienceSection;
