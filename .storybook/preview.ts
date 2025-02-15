import { Preview } from "@storybook/react";
import './style.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Intro', 'Layers', 'Controls', 'Interactions'],
      },
    },
  },
};

export default preview;
