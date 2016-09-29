module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }

    pug: {

        compile: {

            options: {

                client: false,

                pretty: true,

                basedir: 'public/views/'

            },

            files: [ {

              cwd: "public",

              src: "**/*.pug",

              dest: "www",

              expand: true,

              ext: ".html"

            } ]

        }

    },

    jshint: {

      options: {

        node: true,

        globals:{

            angular: true

        }

      },

      all: ['Gruntfile.js', 'app/**/*.js', 'public/**/*.js']

    },

    clean: {

      all: [

        'www/**/*',

        '!www/bower_components/**'

      ]

    },

    compass: {

        dist: {

            options: {

                sassDir: 'public/styles',

                specify: 'public/styles/app.scss',

                cssDir: 'www/styles',

                // environment: 'development',

                outputStyle: 'compressed'

            }

        }

    },

    copy: {

      main: {

        files: [

          {

            expand: true,

            cwd: 'public/scripts/',

            src: ['**'],

            dest: 'www/scripts/'

          }

        ]

      },

      images: {

        files: [

          {

            expand: true,

            cwd: 'public/images/',

            src: ['**'],

            dest: 'www/images/'

          }

        ]

      }

    },

    ngconstant: {

      options: {

        dest: 'www/scripts/app.config.js',

        name: 'eb.config',

        constants: 'public/config/default.json'

      },

      pkg: {

        constants: {

          PACKAGE: grunt.file.readJSON('package.json')

        }

      }

    },

    wiredep: {

      task: {

        directory: 'www/bower_components',

        src: ['www/index.html']

      }

    }

  });

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-ng-constant');

  grunt.registerTask('default', [

    'jshint',

    'clean',

    'pug',

    'compass',

    'wiredep',

    'copy:images',

    'copy:main',

    'ngconstant:pkg'

  ]);

};
