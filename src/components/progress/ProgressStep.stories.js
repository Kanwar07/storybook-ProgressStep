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
    position: {
      control: { type: "select" },
      options: ["start", "center", "end"],
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
    directional: "horizontal",
    lineDirection: "horizontalline",
    labeldirection: "down",
    label: "labeldown",
    text: "textdown",
    description: "Horizontal",
    value: "1",
  },
};

export const Vertical = {
  args: {
    direction: "vertical",
    lineDirection: "verticalline",
    labeldirection: "up",
    label: "labelup",
    text: "textup",
    description: "Vertical",
    value: "1",
  },
};
