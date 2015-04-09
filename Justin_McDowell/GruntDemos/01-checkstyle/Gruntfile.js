module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    csslint: {
      strict: {
        options: {
          important: true,
          import: 2
        },
        src: ['src/css/**/*.css']
      }
    },
    jshint: {
      options: {
        curly: false,
        undef: true,
        eqeqeq: true
      },
      files: {
        src: ['src/js/**/*.js']
      }
    }
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['csslint', 'jshint']);

};
