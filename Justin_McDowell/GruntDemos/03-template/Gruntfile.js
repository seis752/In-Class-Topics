module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      files: ['build']
    },
    curl: {
        './build/page-1.html': 'http://demo.local/page-1.php',
        './build/page-2.html': 'http://demo.local/page-2.php',
        './build/page-3.html': 'http://demo.local/page-3.php'
    },
    'string-replace': {
      build: {
        options: {
          replacements: [
            {
              pattern: /(.php)/ig,
              replacement: '.html'
            }
          ]
        },
        files: {
          './build/page-1.html': './build/page-1.html',
          './build/page-2.html': './build/page-2.html',
          './build/page-3.html': './build/page-3.html'
        }
      }
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: [
              'css/**/*'
            ],
            dest: 'build/',
            filter: 'isFile'
          }
        ]
      }
    }
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['clean']);
  grunt.registerTask('build', ['clean', 'curl', 'string-replace:build', 'copy:build']);

};
