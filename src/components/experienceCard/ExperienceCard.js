import React from "react";

import "./ExperienceCard.css";

const ExperienceCard = props => {
  return (
    <div>
      <h3 className="experience-card-title">
        {props.entry.job_role || props.entry.course}
        <span className="organisation">{props.entry.organisation}</span>
      </h3>

      <p className="date">
        {props.entry.start_date} - {props.entry.end_date}
      </p>
      <p className="experience-card-description">{props.entry.description}</p>
    </div>
  );
};

export default ExperienceCard;
