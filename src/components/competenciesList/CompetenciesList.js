import React from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const CompetenciesList = props => {
  const CHART_HEIGHT = Math.ceil(props.competencies.length / 3) * 100;

  return (
    <div>
      <h3>{props.title}</h3>
      <BarChart
        width={window.innerWidth}
        height={CHART_HEIGHT}
        data={props.competencies}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis type="number" tickCount={2} hide domain={[0, 10]} />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="proficiency" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

CompetenciesList.propTypes = {
  title: PropTypes.string.isRequired,
  competencies: PropTypes.array.isRequired
};

export default CompetenciesList;
