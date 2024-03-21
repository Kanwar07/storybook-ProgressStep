import React from "react";
import "./ProgressStep.css";
import ProgressStepElement from "./ProgressStepElement";

function ProgressStep(props) {
  const {
    color = "initial",
    direction = "horizontal",
    labeldirection = "down",
    label = "labeldown",
    linecolor = "lineintial",
    description,
  } = props;
  return (
    <div class={`${direction} ${linecolor}`}>
      {Array(3)
        .fill(true)
        .map((item, index) => (
          <ProgressStepElement
            key={index}
            {...{ labeldirection, color, index, label, description }}
          />
        ))}
    </div>
  );
}

export default ProgressStep;
