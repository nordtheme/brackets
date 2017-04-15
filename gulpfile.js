"use strict";
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
title      Project Gulp File                                +
project    nord-brackets                                    +
repository https://github.com/arcticicestudio/nord-brackets +
author     Arctic Ice Studio                                +
email      development@arcticicestudio.com                  +
copyright  Copyright (C) 2017                               +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

[References]
Gulp
  http://gulpjs.com
npmjs
  https://www.npmjs.com
*/
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
