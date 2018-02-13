import React from "react";
import PropTypes from "prop-types";

const CompetenciesList = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.competencies.map((competency, i) => (
          <li key={i}>
            {competency.name}: {competency.proficiency}
          </li>
        ))}
      </ul>
    </div>
  );
};

CompetenciesList.propTypes = {
  title: PropTypes.string.isRequired,
  competencies: PropTypes.array.isRequired
};

export default CompetenciesList;
