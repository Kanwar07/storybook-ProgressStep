import React from "react";
import "./ProgressStep.css";

function ProgressStepElement({
  labeldirection,
  color,
  index,
  label,
  description,
}) {
  return (
    <div class={`${labeldirection} ${color}`}>
      <span class="circle">{index + 1}</span>
      <div class={`${label}`}>
        <br />
        Step
        <br />
        <span style={{ color: "#000000" }}>{description}</span>
      </div>
    </div>
  );
}

export default ProgressStepElement;
