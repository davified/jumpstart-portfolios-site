import React from "react";
import ExperienceCard from "../experienceCard/ExperienceCard";

const ExperienceList = props => {
  return props.entries.map((entry, i) => (
    <ExperienceCard entry={entry} key={i} />
  ));
};

export default ExperienceList;
