global.$ = {
    gulp: require("gulp"),
    watch: require("gulp-watch"),
    browsersync: require("browser-sync").create(),
    pug: require("gulp-pug"),
    clean: require("gulp-clean"),
    replace: require("gulp-replace"),
    debug: require("gulp-debug"),
    sass: require('gulp-sass'),
    notify: require('gulp-notify'),
    autoprefixer: require('gulp-autoprefixer'),

    path: {
        tasks: require("./gulp/config.js")
    }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task("default", 
    $.gulp.series("clean",
    $.gulp.parallel("pug", "sass"),
    $.gulp.parallel("watch", "serve"),
));