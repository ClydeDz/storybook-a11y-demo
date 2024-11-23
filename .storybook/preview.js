import { getRules } from "axe-core";

const enabledTags = ["wcag2aa", "wcag21aa"];

const enabledRules = getRules(enabledTags).map((ruleMetadata) => ({
  id: ruleMetadata.ruleId,
  enabled: true,
}));

const a11y = {
  config: {
    rules: enabledRules,
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y,
  },
};

export default preview;
