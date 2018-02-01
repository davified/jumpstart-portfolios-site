import React from "react";
import { CardText } from "reactstrap";

const TRUNCATED_CARD_THRESHOLD_LENGTH = 20;

const TruncatedCard = props => {
  return (
    <CardText>
      {truncateText(props.text, TRUNCATED_CARD_THRESHOLD_LENGTH)}
    </CardText>
  );
};

export const truncateText = (text, truncate_threshold) => {
  const array = text.split(" ");
  if (array.length < truncate_threshold) return text;

  const truncatedArray = array.slice(0, truncate_threshold);
  const truncatedArrayWithDots = [...truncatedArray, "..."];
  return truncatedArrayWithDots.join(" ");
};

export default TruncatedCard;
