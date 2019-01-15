const gulp = require('gulp');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const strip = require('gulp-strip-comments');
const stripDebug = require('gulp-strip-debug');
const imagemin =require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

const dirs = {
    front: {
        scssDev:    './scss/style.scss',
        cssDist:    './css/',
        jsDev:      './scripts/**/*.js',
        jsDist:     './js/'
    },
    images: {
        origin:     './gfx/origin/*',
        optimized:  './gfx/optimized/' 
    }
}

// --- dev tasks

// front styles
gulp.task('front-styles-dev', () => {
    return gulp.src(dirs.front.scssDev)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dirs.front.cssDist))
        .pipe(notify({
            title: 'Gulp styles.',
            message: 'Front styles compilled successfully.'
        }));
});

// front scripts
gulp.task('front-scripts-dev', () => {
    return gulp.src(dirs.front.jsDev)
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dirs.front.jsDist))
        .pipe(notify({
            title: 'Gulp scripts.',
            message: "Front scripts compilled successfully.",
        }));
});

// --- dist tasks

// front styles
gulp.task('front-styles-dist', () => {
    return gulp.src(dirs.front.scssDev)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dirs.front.cssDist))
        .pipe(notify({
            title: 'Gulp styles - dist',
            message: 'Front styles compilled successfully.'
        }));
});

// front scripts
gulp.task('front-scripts-dist', () => {
    return gulp.src(dirs.front.jsDev)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(strip())
        .pipe(stripDebug())
        .pipe(gulp.dest(dirs.front.jsDist))
        .pipe(notify({
            title: 'Gulp scripts - dist',
            message: 'Front scripts compilled successfully.',
        }));
});

// optimize images
gulp.task('images', () => {
    return gulp.src(dirs.images.origin)
        .pipe(imagemin([
            imageminMozjpeg({
                quality: 85
            })
        ]))
        .pipe(gulp.dest(dirs.images.optimized))
        .pipe(notify({
            title: 'Gulp images',
            message: 'Images optimized successfully'
        }))
});

// --- watch tasks
gulp.task('watch:front-styles', () => {
    gulp.watch('./scss/**/*.scss', gulp.series('front-styles-dev'));
});

gulp.task('watch:front-scripts', () => {
    gulp.watch('./scripts/**/*.js', gulp.series('front-scripts-dev'));
});

gulp.task('watch:images', () => {
    gulp.watch(dirs.images.origin, gulp.series('images'));
});

gulp.task('default', gulp.parallel('watch:front-styles', 'watch:front-scripts', 'watch:images'));
gulp.task('dist', gulp.parallel('front-styles-dist', 'front-scripts-dist', 'images'));