/**
 * Created by nikolai on 16.4.16.
 * @author nikolai
 */
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'report.html',
    reportTitle: "Report Title"
});

exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--no-sandbox', '--disable-impl-side-painting']
        }
    },

    suites: {
        login: 'specs/login_codefresh_spec.js'
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 180000,
        print: function() {}
    },

    beforeLaunch: function() {
        return new Promise(function(resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
        jasmine.getEnv().addReporter(reporter);
    },

    afterLaunch: function(exitCode) {
        return new Promise(function(resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};