import type { Meta, StoryObj } from "@storybook/react";

import MemoEditor from "./MemoEditor";

const meta: Meta<typeof MemoEditor> = {
  title: "Example/MemoEditor",
  component: MemoEditor,
  parameters: {
    layout: "centered"
  }
};

type Story = StoryObj<typeof MemoEditor>;

export const classic: Story = {
  args: {
    textareaStyle: {
      width: "100%",
      minHeight: 300,
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "10px"
    },
    fontColor: "#333"
  }
};

export default meta;
