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

  const steps = ["Sign up", "Enter OTP", "Success"];
  return (
    <>
      <div class={`${direction} ${linecolor}`}>
        {steps.map((item, index) => (
          <ProgressStepElement
            key={index}
            {...{ labeldirection, color, index, label, item, description }}
          />
        ))}
      </div>
    </>
  );
}

export default ProgressStep;
