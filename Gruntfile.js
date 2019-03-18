module.exports = function(grunt) {
  grunt.initConfig({
    htmlhint: {
      html: {
        options: {
          htmlhintrc: '.htmlhintrc'
        },
        src: ['*.html']
      }
                
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: '*.css'
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'    
      },
      target: ['rectangle.js']
    },
    mochacli: {
      options: {
        reporter: 'spec',
        bail: true
      },
      all: ['test/*.js']
    },
    mocha_istanbul: {
      coverage: {
        src: 'test'
      }
    },
    istanbul_check_coverage: {
      default: {
        options: {
          coverageFolder: 'coverage*',
          check: {
            lines: 90,
            statements: 90
          }
        }
      }
    },
    mocha: {
      test: {
        src: ['test/index.html'],
      },
      options: {
        run: true,
        reporter: 'Spec'
      }
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
                          
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
                          
      }
        
    },
    cssmin: {
      'dist/rectangle.css': 'rectangle.css'
              
    },
    uglify: {
      release:{
        files: {
          'dist/rectangle.js': 'rectangle.js',
          'dist/calc.js': 'calc.js'
                                
        }
          
      }
    }

  });
  
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['htmlhint','csslint','eslint']);
  grunt.registerTask('cover', ['mocha_istanbul']);
  grunt.registerTask('check-cover', ['istanbul_check_coverage']);
  grunt.registerTask('unitTest', ['mocha']);
  grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);

};

