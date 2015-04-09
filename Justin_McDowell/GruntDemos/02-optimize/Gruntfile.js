module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      files: ['build']
    },
    concat: {
      css: {
        src: [
          'src/css/module.css',
          'src/css/thing.css',
          'src/css/widget.css'
        ],
        dest: 'build/css/styles.css'
      },
      js: {
        src: [
          'src/js/module.js',
          'src/js/thing.js',
          'src/js/widget.js'
        ],
        dest: 'build/js/scripts.js'
      }
    },
    cssmin: {
      main: {
        files: {
          'build/css/styles.min.css': [
            'src/css/module.css',
            'src/css/thing.css',
            'src/css/widget.css'
          ]
        }
      }
    },
    uglify: {
      main: {
        files: {
          'build/js/scripts.min.js': [
            'src/js/module.js',
            'src/js/thing.js',
            'src/js/widget.js'
          ]
        }
      }
    }
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['clean']);

  // Concatenate files.
  grunt.registerTask('build', ['concat']);

  // Concatenate and compress files.
  grunt.registerTask('release', ['cssmin', 'uglify']);

};
