// Load Grunt
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourceMap: true,
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        postcss: { // Begin Post CSS Plugin
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        "overrideBrowserslist": [
                            "defaults"
                        ]
                    })
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },
        cssmin: { // Begin CSS Minify Plugin
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        watch: { // Compile everything into one task with Watch Plugin
            css: {
                files: 'css/*.scss',
                tasks: ['sass', 'postcss', 'cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-postcss')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('default', ['watch']);
};
