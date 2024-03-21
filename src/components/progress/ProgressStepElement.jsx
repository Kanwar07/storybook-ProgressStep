import React from "react";
import "./ProgressStep.css";

function ProgressStepElement({
  labeldirection,
  color,
  index,
  label,
  item,
  description,
}) {
  return (
    <div class={`${labeldirection} ${color}`}>
      <span class="circle">{index + 1}</span>
      <div class={`${label}`}>
        <br />
        {item}
        <br />
        <span style={{ color: "#000000", marginTop: "0.5rem" }}>
          {description}
        </span>
      </div>
    </div>
  );
}

export default ProgressStepElement;
