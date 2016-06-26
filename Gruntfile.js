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

                pretty: true

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

        node: true

      },

      all: ['Gruntfile.js', 'app/**/*.js', 'public/**/*.js']

    }

  });

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [

    'jshint',

    'pug'

  ]);

};
