module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-env');
    // Configuration de Grunt
    //set any local environment config
    var localConfig;
    try {
        localConfig = require('./config/local.env.js');
    } catch (e) {
        localConfig = {};
    }
    var target = grunt.option('ENV');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            server: {
                options: {
                    wait: true
                },
                args: [
                    'server.js'
                ]
            }
        },
        //grunt-env plugin
        //NB by default process.env.NODE_ENV is set to 'development' in server.js
        env: {
            dev: {
                NODE_ENV:  'development'
            },
            build: {
                NODE_ENV:'production'
            },
            all:  localConfig
        }
    });

    grunt.registerTask('serve', function () {
        //for a production environment
        if (target === 'prod') {
            return grunt.task.run([

                'env:build', // assign production environment variables
                'env:all', //assign any local environment variables
                'run' // run server
            ]);
        }

        //for a test environment
        if (target === 'debug') {
            return grunt.task.run([
                'env:all'
            ]);
        }

        //default grunt serve task (for development environment)
        grunt.task.run([

            'env:dev',
            'env:all',
            'run'
        ]);
    });


    grunt.registerTask('test', function (target) {
        if (target === 'server') {
            return grunt.task.run([
                'env:all', //assign any local environment variables
                'env:test' // assign test environment variables
            ]);
        }
    });

    grunt.registerTask('default', ['serve']);
};