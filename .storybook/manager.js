import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
 
addons.setConfig({
  theme: create({
    // base: 'light',
    brandTitle: 'React Openlayers',
    brandUrl: 'https://github.com/allenhwkim/react-openlayers',
    brandImage: './logo.png',
    brandTarget: '_self',

    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
  }),
});