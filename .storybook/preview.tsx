import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import './style.css';

// Storybook parameters
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

// Wrap all stories in React.StrictMode
export const decorators: Decorator[] = [
  (Story) => (
    <React.StrictMode>
      <Story />
    </React.StrictMode>
  ),
];

// Provides Storybook with your global config.
export default preview;
