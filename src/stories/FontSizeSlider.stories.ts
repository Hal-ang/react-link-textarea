import type { Meta, StoryObj } from "@storybook/react";

import FontSizeSlider from "./FontSizeSlider";

const meta: Meta<typeof FontSizeSlider> = {
  title: "Example/FontSizeSlider",
  component: FontSizeSlider,
  parameters: {
    layout: "centered"
  }
};

type Story = StoryObj<typeof FontSizeSlider>;

export const shadow: Story = {
  args: {
    containerStyle: { width: "100%", height: "100%" },
    textareaStyle: {
      width: 300,
      height: 200,
      padding: 10,
      borderRadius: 8,
      border: "none",
      outline: "none",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    },
    caretColor: "black"
  }
};
export const classic: Story = {
  args: {
    containerStyle: { width: "100%", height: "100%" },
    textareaStyle: {
      width: 300,
      height: 200,
      padding: 10,
      borderRadius: 8,
      outline: "none",
      border: "1px solid #000"
    },
    caretColor: "black"
  }
};

export default meta;
