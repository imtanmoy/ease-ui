import { Button } from 'ease-ui-core';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  args: {
    children: 'Button',
  },
};
