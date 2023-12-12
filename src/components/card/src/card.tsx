import * as React from "react";
import { CardIcon, CardText, CardBody } from "../../../../";
export const Card: React.FC<{ title?: string; details?: string; icon?: string, addressedTo?: string }> = ({
  title,
  details,
  icon,
}) => {
  return (
    <CardBody>
      <CardIcon>
        <span className="icon">
          <i className={icon} aria-hidden="true"></i>
        </span>
      </CardIcon>
      <CardText>
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="details">
          <span>{details}</span>
        </div>
      </CardText>
    </CardBody>
  );
};

export default Card;
