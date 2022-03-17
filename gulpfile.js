const gulp = require( "gulp" );
const mocha = require( "gulp-mocha" );
const webpack = require( "webpack-stream" );
const webpackConfig = require( "./webpack.config" );

const webpackTask = ( ) => (
  gulp.src( "./" )
    .pipe( webpack( webpackConfig ) )
    .pipe( gulp.dest( "build" ) )
);

const watchTask = ( ) => {
  gulp.watch( ["lib/**/*.js"], webpackTask );
};

const mochaTask = ( ) => (
  gulp.src( ["test/**/*.js"], { read: false } )
    // gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe( mocha( { recursive: true, reporter: "nyan" } ) )
);

const watchMochaTask = ( ) => {
  gulp.watch( ["lib/**/*.js", "./test/**/*.js"], mochaTask );
};

gulp.task( "test", gulp.series( webpackTask, mochaTask ) );

gulp.task( "default", gulp.series( webpackTask, gulp.parallel( watchTask, watchMochaTask ) ) );
