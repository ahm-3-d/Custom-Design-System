module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storybook-addon-styled-component-theme/dist/register',
    '@storybook/addon-backgrounds/register'
  ],
};
