module.exports = function (grunt) {
    require('time-grunt')(grunt);

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Configurable paths
    var config = {
            app: 'src/public',
            dist: 'dist',
            tmp: '.tmp',
            server: 'src',
            serverDist: 'compiled'
        },

        // Define the configuration for all the tasks
        grunt.initConfig({

            // Project settings
            config: config,

            // ugilify
            uglify: {
                dist: {
                    files: [{
                        expand: true,
                        cwd: '<%= config.dist %>/scripts',
                        src: ['{,**/}*.js'],
                        dest: '<%= config.dist %>/scripts'
                }]
                }
            },
            useminPrepare: {
                html: ['<%= config.serverDist %>/templates/*.marko', '<%= config.serverDist %>/modules/{,**/}*.marko'],
                options: {
                    root: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    flow: {
                        html: {
                            steps: {
                                css: ['concat', 'cssmin'],
                                js: ['concat', 'uglify']
                            },
                            post: {}
                        }
                    }
                }
            },
            usemin: {
                html: ['<%= config.serverDist %>/templates/*.marko', '<%= config.serverDist %>/tags/{,**/}*.marko', '<%= config.serverDist %>/modules/{,**/}*.marko', '<%= config.dist %>/scripts/pageModules/*.js', '<%= config.dist %>/scripts/dependency/*.js', '<%= config.dist %>/scripts/app.*.js'],
                css: ['<%= config.dist %>/styles/css/*.css'],
                options: {
                    assetsDirs: [
                    '<%= config.dist %>'
                ]
                }
            },

        });

    grunt.registerTask('build', [
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'usemin'
    ]);
    grunt.registerTask('default', [

    ]);

};