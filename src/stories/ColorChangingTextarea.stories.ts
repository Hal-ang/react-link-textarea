import type { Meta, StoryObj } from "@storybook/react";

import ColorChangingTextarea from "./ColorChangingTextarea";

const meta: Meta<typeof ColorChangingTextarea> = {
  title: "Example/ColorChangingTextarea",
  component: ColorChangingTextarea,
  parameters: {
    layout: "centered"
  }
};

type Story = StoryObj<typeof ColorChangingTextarea>;

export const classic: Story = {
  args: {
    containerStyle: {
      width: "300px",
      height: "200px"
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
      transition: "background-color 0.3s ease"
    }
  }
};

export default meta;
