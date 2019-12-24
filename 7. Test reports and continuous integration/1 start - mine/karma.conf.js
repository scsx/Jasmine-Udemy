// this line is shown at the docs: https://github.com/karma-runner/karma-chrome-launcher
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
    config.set({
        // frameworks (npm modules)
        frameworks: ['jasmine', 'jasmine-matchers'],
        // files - order mathers
        preprocessors: {
            '*.js':['coverage']
        },
        files: [
            './custom-matchers.js',
            '*.js',
            '*.spec.js'
        ],
        plugins: [
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-chrome-launcher',
            'karma-coverage'
        ],
        // whats's shown when running tests
        reporters: ['dots', 'coverage'],
        color: true,
        browser: ['ChromeHeadless'],
        // CI Prod: make the test and "move on"
        singleRun: true,
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                { type: 'html', subdir: 'html' }
            ]
        }
    });
}