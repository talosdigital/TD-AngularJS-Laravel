// Karma configuration
// Generated on Thu Nov 12 2015 09:48:48 GMT-0500 (COT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [

      'public/bower_components/angular/angular.js',
      // 'public/bower_components/angular-animate/angular-animate.js',
      // 'public/bower_components/angular-aria/angular-aria.js',
      // 'public/bower_components/angular-messages/angular-messages.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/bower_components/angular-route/angular-route.js',
      // 'public/bower_components/angular-sanitize/angular-sanitize.js',
      'public/bower_components/angular-touch/angular-touch.js',
      // 'public/bower_components/angular-translate/angular-translate.js',
      // 'public/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'public/bower_components/angular-ui-router/release/angular-ui-router.js',
      'public/bower_components/angular-cookies/angular-cookies.js',
      // 'public/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      // 'public/bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
      // 'public/bower_components/angular-datepicker/dist/angular-datepicker.js',
      // 'public/bower_components/angular-oauth2/dist/angular-oauth2.js',
      // 'public/bower_components/query-string/query-string.js',
      'public/bower_components/angular-local-storage/dist/angular-local-storage.js',
      'public/scripts/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 
      'public/scripts/**/*.controller.js':['coverage'],
      'public/scripts/**/*.service.js':['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['PhantomJS'],
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });
};