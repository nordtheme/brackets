/*
 * Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2017-present Sven Greb <code@svengreb.de>
 *
 * Project:    Nord Brackets
 * Repository: https://github.com/arcticicestudio/nord-brackets
 * License:    MIT
 * References
 *   http://gulpjs.com
 *   https://www.npmjs.com
 */

"use strict";

/*+---------+
  + Imports +
  +---------+*/
const gulp = require("gulp-help")(require("gulp"));
const gulpStylelint = require("gulp-stylelint");

/*+---------------+
  + Configuration +
  +---------------+*/
const lesscssSources = ["styles/**/*.less"];

/*+-------+
  + Tasks +
  +-------+*/
/**
 * Shows the help.
 *
 * @since 0.1.0
 */
gulp.task("default", ["help"]);

/**
 * Runs all lint tasks.
 *
 * @since 0.1.0
 */
gulp.task("lint", "Runs all lint tasks", ["lint-lesscss"]);

/**
 * Lints all LESSCSS sources.
 *
 * @since 0.1.0
 */
gulp.task("lint-lesscss", "Lints all LESSCSS sources", () => {
  return gulp.src(lesscssSources)
    .pipe(gulpStylelint({
      failAfterError: true,
      reporters: [
        {formatter: "verbose", console: true}
      ]
    }));
});
