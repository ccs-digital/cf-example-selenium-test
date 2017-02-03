var helper      = require('./../module/helper.js');
var user        = require('./../model/user.js');
var github      = require('./../providers/github.js');
var bitbucket   = require('./../providers/bitbucket.js');
var cst         = require('./../module/utils.js');

describe('Login to Codefresh', function() {
    var constant, currentUser, screenshots;
    var reportFolder = 'target/';
    var users = [
        {
            "type": "github",
            "username": "GITHUB_ACCOUNT",
            "password": "GITHUB_PASSWORD"
        },
        {
            "type":"bitbucket",
            "username":"BITBUCKET_ACCOUNT",
            "password":"BITBUCKET_PASSWORD"
        }];

    beforeEach(function() {
        constant = new cst.Constant();
        browser.driver.ignoreSynchronization = true;
        browser.driver.get(process.env.URL);
    });

    it('sign in to Codefresh with github account', function() {
        screenshots = reportFolder + "270417/";
        currentUser = new user.User(users[0], screenshots);
        currentUser.login2(function () {
            helper.sleep(1000);
            helper.takeScreenshot('login_success.png', screenshots);
            currentUser.logout();
        });
    });

    // it('sign in to Codefresh using bitbucket account', function () {
    //     screenshots = reportFolder + "270418/";
    //     currentUser = new user.User(users[1], screenshots);
    //     currentUser.login2(function () {
    //         helper.sleep(1000);
    //         helper.takeScreenshot('login_success.png', screenshots);
    //         currentUser.logout();
    //     });
    // });
});