/* #############################################################################
 * Title: Gruntfile.js
 * Desc: The grunt build configuration file. 
 * Author: Marco Gomes
 * Date: 14th Nov 2015
 * License: MIT
 * #############################################################################
*/

module.exports = function(grunt) {  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
   
   

    copy: {
      images: {
        expand: true,
        flatten: true,
        src: ['src/img/**'],
        dest: 'build/img',
        filter: 'isFile'
      },

      js: {
        expand: true,
        flatten: true,
        src: ['src/js/**'],
        dest: 'build/js',
        filter: 'isFile'
      }

    
    },

    jade: {
      compile: {
        files: [ {
          expand: true,
          cwd: "src/view/",      
          src: "*.jade",
          dest: "build/",      
          ext: ".html"
        } ]
      }
    },
  
    watch: {
      options: {
        livereload: true
      },

       sass: {
          files: ['src/css/**.scss'],
          tasks: ['sass']
        },

        jade:{
          files: ['src/views/*.jade','src/views/_partials/*.jade'],
          tasks: ['jade']          
        }     
    },

    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
         style: 'compressed',
          sourcemap: 'none'
        },

        files: [{
          expand: true,
          cwd: 'src/css/',
          src: 'styles.scss',
          dest: 'build/css',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/css',
          src: ['style.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    }

  });

  grunt.registerTask('default',['copy', 'jade', 'sass', 'cssmin', 'watch']);
};