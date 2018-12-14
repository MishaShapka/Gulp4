module.exports = function() {
    $.gulp.task('css-min', function() {
		return $.gulp.src('app/css/main.css') // Выбираем файл для минификации
			.pipe(cssnano()) // Сжимаем
			.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
			.pipe($.gulp.dest('app/css')); // Выгружаем в папку app/css
	});
};