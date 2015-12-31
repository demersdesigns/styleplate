//** NPM Dependencies **//
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    autoprefix  = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    exec        = require('child_process').exec,
    kss         = require('kss');

//** Path Variables **//
var rootPath    = 'styleguide/';
var sassSource  = 'sass/**/*.scss';
var sassPath    = 'sass/**/*';
var kssNode     = 'node ' + __dirname + '/node_modules/kss/bin/kss-node ';

//Process CSS
gulp.task('sass', function() {
  return gulp.src(sassSource)
    .pipe(sass({ outputStyle: 'expanded', errLogToConsole: true }))
    .pipe(autoprefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(rootPath + 'css'))
    .pipe(reload({stream:true}));
});

//Generate styleguide
gulp.task('styleguide:generate', function(cb) {
  var cmd = exec(kssNode + 'sass styleguide --css ../css/style.css', function(err, stdout, stderr) {
    reload();
  });

  return cmd.on('close', cb);
});

//Fire up a server
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: rootPath
        }
    });
});

//Task That Runs the Processes Listed Above
gulp.task('styleguideBuild', ['sass', 'styleguide:generate']);

//Run the devBuild task and then fire up a local server
gulp.task('styleguide', ['styleguideBuild', 'server'], function() {
  gulp.watch(sassPath, ['styleguide:generate']);
  gulp.watch(sassSource, ['sass']);
});