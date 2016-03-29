
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: "small",
            width: 120,
            suffix: '_1x',
            quality: 120
          },{     
            name:"normal",    
            width: 350,
            suffix: '_x1',
          },{
            name:"normal",
            width: 700,
            suffix:"_x2"
          },{
            name: "medium",
            suffix: "_x1",
            width: 800
          },{
            upscale: true,
            name: "medium",
            suffix: "_x2",
            width: 1600
          },{
            name: "small",
            width: 600,
            suffix: "_x1"
          },{
            name: "small",
            width: 1200,
            suffix: "_x2"
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'dist/images'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['dist/images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist/images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
