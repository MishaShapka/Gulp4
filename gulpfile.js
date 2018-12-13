global.$ = {
    gulp: require("gulp"),
    watch: require("gulp-watch"),
    browsersync: require("browser-sync").create(),
    pug: require("gulp-pug"),
    clean: require("gulp-clean"),
    replace: require("gulp-replace"),
    debug: require("gulp-debug"),

    path: {
        tasks: require("./gulp/config.js")
    }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task("default", 
    $.gulp.series("clean",
    $.gulp.parallel("pug"),
    $.gulp.parallel("watch", "serve"),
));