import type { Meta, StoryObj } from "@storybook/react";

import RotatingTextarea from "./RotatingTextarea";

const meta: Meta<typeof RotatingTextarea> = {
  title: "Example/RotatingTextarea",
  component: RotatingTextarea,
  parameters: {
    layout: "centered"
  }
};

type Story = StoryObj<typeof RotatingTextarea>;

export const classic: Story = {
  args: {
    containerStyle: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) rotate(10deg) scale(1.2)",
      transition: "transform 0.3s ease-in-out",
      borderRadius: "8px"
    },
    textareaStyle: {
      width: "100%",
      height: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "none",
      outline: "none",
      resize: "none",
      fontSize: "16px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    }
  }
};

export default meta;
