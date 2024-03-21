import ProgressStep from "./ProgressStep";

export default {
  title: "components/Progress Step",
  component: ProgressStep,
  argTypes: {
    onClick: { action: "clicked" },
    color: {
      control: { type: "select" },
      options: ["initial", "done", "progress"],
    },
    linecolor: {
      control: { type: "select" },
      options: ["lineintial", "linedone", "lineprogress"],
    },
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    labeldirection: {
      control: { type: "select" },
      options: ["down", "up"],
    },
    label: {
      control: { type: "select" },
      options: ["labeldown", "labelup"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Step Progress to showcase progress",
      },
    },
  },
};

export const Horizontal = {
  args: {
    color: "initial",
    linecolor: "lineintial",
    direction: "horizontal",
    labeldirection: "down",
    label: "labeldown",
    description: "Horizontal",
  },
};

export const Vertical = {
  args: {
    color: "initial",
    linecolor: "lineintial",
    direction: "vertical",
    labeldirection: "up",
    label: "labelup",
    description: "Vertical",
  },
};
