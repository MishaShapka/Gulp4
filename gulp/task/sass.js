module.exports = function() {
    $.gulp.task('sass', function(){
	    return $.gulp.src(['./src/sass/**/*.sass']) // Берем все sass файлы из папки sass и дочерних, если таковые будут
	    	.pipe( $.sass().on( 'error', $.notify.onError( //уведомления
			      {
			        message: "<%= error.message %>",
			        title  : "Кэп! Твой код пошел по пизде!"
			      } ) )
			  )
	        .pipe($.sass())
	        .pipe($.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) //автопрефикс
	        .pipe($.gulp.dest('dest/css'))
	        // .pipe( notify( 'Кэп! Твой код великолепен!' ) )
            // .pipe($.browserSync.stream());
            .on("end", $.browsersync.reload);
	});
};