/////NEW GRUNT FILE//////
// Generated on 2014-11-18 using generator-angular-fullstack 2.0.13
// ============================================================================
// if you are seing this you have to modify this gruntfile
// God bless you and enlighten your way.
// I couldn't do much for it, that's why there are 2 Gruntfile.
// ============================================================================
'use strict';

module.exports = function (grunt) {
  var localConfig;
  try {
    localConfig = require('./server/config/local.env');
  } catch(e) {
    localConfig = {};
  }

  var currentCommit =  require('this-commit')();
  console.info('Current Commit', currentCommit);

  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    karma :'grunt-karma',
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn',
    protractor: 'grunt-protractor-runner',
    injector: 'grunt-asset-injector',
    ngconstant : 'grunt-ng-constant',
    sass : 'grunt-contrib-sass',
    browserSync : 'grunt-browser-sync'
  });

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    pkg: grunt.file.readJSON('package.json'),
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'public',
      dist: require('./bower.json').appPath + 'dist'
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            //'<%= yeoman.app %>/sass/**/*.scss',
            '<%= yeoman.app %>/styles/**/*.css',
            '<%= yeoman.app %>/scripts/**/*.js',
            '<%= yeoman.app %>/scripts/**/*.html'
          ]
        },
        options: {
          watchTask: true,
          proxy: 'http://local.tdangularjslaravel.com/'
        }
      }
    },
    ngconstant :{
      options:{
        name : 'constants',
        dest : '<%= yeoman.app %>/scripts/angular-constants.js',
        wrap : true,
        constants:{
          commit: currentCommit,
        }
      },
      build:{}
    },
    watch: {
      injectJS: {
        files: [
          '<%= yeoman.app %>/scripts/**/*.js',
          '!<%= yeoman.app %>/scripts/**/*.spec.js',
          '!<%= yeoman.app %>/scripts/**/*.mock.js',
          '!<%= yeoman.app %>/scripts/app.js'
        ],
        tasks: ['injector:scripts']
      },styles:{files: [
          '<%= yeoman.app %>/{components,styles,scripts}/**/*.styl'
        ],
        tasks:['stylus']
      },
      injectCss: {
        files: [
          '<%= yeoman.app %>/{components,styles,scripts}/**/*.css'
        ],
        tasks: ['injector:css'],
        options: {
          livereload: true,
        }
      },
      jsTest: {
        files: [
          '<%= yeoman.app %>/scripts/**/*.spec.js',
          '<%= yeoman.app %>/scripts/**/*.mock.js'
        ],
        tasks: ['newer:jshint:all', 'karma']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '{.tmp,<%= yeoman.app %>}/{components,scripts,styles}/**/*.css',
          '{.tmp,<%= yeoman.app %>}/{components,scripts,styles}/**/*.styl',
          '{.tmp,<%= yeoman.app %>}/{components,scripts,css}/**/*.html',
          '{.tmp,<%= yeoman.app %>}/{components,scripts,css}/**/*.js',
          '!{.tmp,<%= yeoman.app %>}{components,scripts,css}/**/*.spec.js',
          '<%= yeoman.app %>/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: true
        }
      },

    },

    // sass:{
    //   dist:{
    //     options:{
    //       update:true
    //     },
    //     files: [{
    //       expand :true,
    //       cwd : '<%= yeoman.app %>/styles/sass',
    //       src : ['**/*.scss'],
    //       dest : '<%= yeoman.app %>/styles',
    //       ext : '.css'
    //     }]
    //   }
    // },

    stylus:{
      compile:{
        options:{
          paths:['<%= yeoman.app %>'], compress: false
        },
        files:{
          '<%= yeoman.app %>/styles/main.css':'<%= yeoman.app %>/styles/stylus/**/*.styl'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '<%= yeoman.app %>/.jshintrc',
        reporter: require('jshint-stylish')
      },
      server: {
        options: {
          jshintrc: 'server/.jshintrc'
        },
        src: [
          'server/**/*.js',
          '!server/**/*.spec.js'
        ]
      },
      serverTest: {
        options: {
          jshintrc: 'server/.jshintrc-spec'
        },
        src: ['server/**/*.spec.js']
      },
      all: [
        '<%= yeoman.app %>/{scripts}/**/*.js',
        '!<%= yeoman.app %>/{scripts}/**/*.spec.js',
        '!<%= yeoman.app %>/{scripts}/**/*.mock.js'
      ],
      test: {
        src: [
          '<%= yeoman.app %>/{scripts}/**/*.spec.js',
          '<%= yeoman.app %>/{scripts}/**/*.mock.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*',
            '!<%= yeoman.dist %>/.openshift',
            '!<%= yeoman.dist %>/Procfile'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/',
          src: '{,*/}*.css',
          dest: '.tmp/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      target: {
        src: '<%= yeoman.app %>/index.html',
        ignorePath: '/<%= yeoman.app %>/',
        exclude: ['/json3/', '/es5-shim/']
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/public/**/{,*/}*.js',
            '<%= yeoman.dist %>/public/**/{,*/}*.css',
            // '<%= yeoman.dist %>/public/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/public/assets/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['<%= yeoman.app %>/index.html'],
      options: {
        dest: '<%= yeoman.dist %>/public'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/public/**/*.html'],
      css: ['<%= yeoman.dist %>/public/app/**/*.css'],
      js: ['<%= yeoman.dist %>/public/app/**/*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>/public',
          '<%= yeoman.dist %>/public/images'
        ],
        // This is so we update image references in our ng-templates
        patterns: {
          js: [
            [/(images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
          ]
        }
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/public/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/public/images'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat',
          src: '*/**.js',
          dest: '.tmp/concat'
        }]
      }
    },

    // Package all the html partials into a single javascript payload
    ngtemplates: {
      main: {
        options: {
          // This should be the name of your apps angular module
          module: 'viamericas',
          htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
          },
          usemin: '<%= yeoman.dist %>/public/scripts/scripts.js'
        },
        cwd: '<%= yeoman.app %>',
        src: ['{components,scripts,views}/**/*.html'],
        dest: '.tmp/templates.js'
      }
    },

    // Replace Google CDN references
    // cdnify: {
    //   dist: {
    //     html: ['<%= yeoman.dist %>/public/*.html']
    //   }
    // },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>/public',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'images/{,*/}*.{webp}',
            'assets/fonts/**/*',
            'index.html'
          ]
        },{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/fonts',
          dest: '<%= yeoman.dist %>/public/fonts',
          src: [
            '**/*.*',
          ]
        }, {
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            dest: '<%= yeoman.dist %>/public/images',
            src: ['**/*.*']
        }, {
            expand: true,
            cwd: '<%= yeoman.app %>/scripts/languages',
            dest: '<%= yeoman.dist %>/public/scripts/languages',
            src: ['**/*.*']
        }, {
          expand: true,
          dest: '<%= yeoman.dist %>',
          src: [
            'package.json',
            'server/**/*'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>',
        dest: '.tmp/',
        src: ['{components,scripts,views,css}/**/*.css', '{components,scripts,views,css}/**/*.styl']
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
      ],
      test: [
      ],
      debug: {
        tasks: [
          'nodemon'
        ],
        options: {
          logConcurrentOutput: true
        }
      },
      dist: [
//        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    injector: {
      options: {

      },
      // Inject application script files into index.html (doesn't include bower)
      scripts: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/public/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<script src="' + filePath + '"></script>';
          },
          starttag: '<!-- injector:js -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= yeoman.app %>/index.html': [
            [
              '{.tmp,<%= yeoman.app %>}/scripts/app.js',
              '{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
              '!{.tmp,<%= yeoman.app %>}/scripts/**/*.spec.js'
              // '!{.tmp,<%= yeoman.app %>}/scripts/**/*.mock.js'
            ]
          ]
        }
      },

      // Inject component css into index.html
      css: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/public/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<link rel="stylesheet" href="' + filePath + '">';
          },
          starttag: '<!-- injector:css -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= yeoman.app %>/index.html': [
            '<%= yeoman.app %>/styles/**/*.css'
          ]
        }
      }
    }
  });

  //usage, grunt serve dist, grunt serve debug, grunt serve.
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'env:all', 'env:prod', 'express:prod', 'wait', 'connect', 'express-keepalive']);
    }

    if (target === 'debug') {
      return grunt.task.run([
        'clean:server',
        'env:all',
        'concurrent:server',
        'injector',
        'wiredep',
        'autoprefixer',
        'concurrent:debug'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'stylus',
//      'env:all',
      'concurrent:server',
      'ngconstant',
      'injector', // inject js in index.brohtml file.
      'wiredep',  // inject bower js in index.html file.
      'autoprefixer', // inject css files into index.html file.
      'browserSync',
      // 'sass',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });


  grunt.registerTask('build', [
    'clean:dist',
//    'karma',
    'concurrent:dist',
    'ngconstant',
    'injector',
    'wiredep',
    'useminPrepare',
    'autoprefixer',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'copy:dist',
    // 'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    // 'test',
    'build'
  ]);
};
