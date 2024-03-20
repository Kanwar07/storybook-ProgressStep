import React from "react";
import "./ProgressStep.css";

function ProgressStep(props) {
  const {
    color = "initial",
    direction = "horizontal",
    position = "start",
    lineDirection = "horizontalline",
    labeldirection = "down",
    label = "labeldown",
    text = "textdown",
    value,
    description,
  } = props;
  return (
    <div className={`${direction} ${position}`}>
      <div className={`${labeldirection}`}>
        <div className={`circle ${color}`}>{value}</div>
        <div className={`${text}`}>
          <div className={`${label}`}>
            Step <br />
            <span>{description}</span>
          </div>
        </div>
      </div>
      <div>
        <hr className={`${lineDirection}`} />
      </div>
      <div className={`${labeldirection}`}>
        <div className={`circle ${color}`}>{value}</div>
        <div className={`${text}`}>
          <div className={`${label}`}>
            Step <br />
            <span>{description}</span>
          </div>
        </div>
      </div>
      <div>
        <hr className={`${lineDirection}`} />
      </div>
      <div className={`${labeldirection}`}>
        <div className={`circle ${color}`}>{value}</div>
        <div className={`${text}`}>
          <div className={`${label}`}>
            Step <br />
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressStep;
