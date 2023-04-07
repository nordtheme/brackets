/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Configurations for Stylelint.
 * @see https://stylelint.io
 * @see https://stylelint.io/user-guide/rules
 * @see https://github.com/stylelint/stylelint-config-standard
 * @see https://stylelint.io/user-guide/options#customsyntax
 */
module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-less", "stylelint-prettier"],
  overrides: [
    {
      files: ["*.less"],
      customSyntax: "postcss-less",
      rules: {
        "at-rule-no-unknown": null,
        "color-no-invalid-hex": true,
        "less/color-no-invalid-hex": true,
        /**
         * Allow non-kebab-case class names (regular expression) like "CodeMirror".
         * @see https://stylelint.io/user-guide/rules/selector-class-pattern/#options
         * @see https://github.com/stylelint/stylelint/issues/4660
         */
        "selector-class-pattern": "^[a-z][a-zA-Z0-9-]+$|^CodeMirror.*",
      },
    },
  ],
};
