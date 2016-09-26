'use strict';
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-fh-build');
  grunt.registerTask('default', ['fh:default']);
};