import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
 
const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

addons.setConfig({
  theme: create({
    // base: 'light',
    brandTitle: 'React Openlayers',
    brandUrl: 'https://github.com/allenhwkim/react-openlayers',
    brandImage: darkTheme ? './logo-dark.png' : './logo.png',
    brandTarget: '_self',

    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
  }),
});