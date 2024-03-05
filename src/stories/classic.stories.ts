import type { Meta, StoryObj } from "@storybook/react";

import Classic from "./Classic";

// import LinkingTextarea from "../LinkingTextarea";

const meta: Meta<typeof Classic> = {
  title: "Example/LinkingTextarea",
  component: Classic,
  parameters: {
    layout: "centered"
  }
};

type Story = StoryObj<typeof Classic>;

export const Primary: Story = {
  args: {
    containerStyle: { width: "100%", height: "100%" },
    caretColor: "red"
  }
};

export const Warning: Story = {
  args: {
    containerStyle: { width: "100%", height: "100%" },
    caretColor: "black"
  }
};

export default meta;
