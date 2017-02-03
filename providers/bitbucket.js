var helper = require('../module/helper.js');
var cst = require('../module/utils.js');
var constant = new cst.Constant();

var go = function () {
    browser.driver.get('https://bitbucket.org/');
};

var signIn = function (user, screenshots, callback) {
    browser.driver.wait(function() {
        return browser.driver.findElement(by.xpath(constant.XPATH_BITBUCKET_LOGINFORM));
    }, 10000).then(function () {
        console.log('Input username: ' + user.username);

        var usernameEditText = helper.findElement(by.name('username'));
        usernameEditText.sendKeys(user.username);

        console.log('Input password');

        var passwordEditText = helper.findElement(by.name('password'));
        passwordEditText.sendKeys(user.password);

        console.log('Click on the Log in');
        helper.findElement(by.xpath('//input[@value="Log in"]')).click();
        helper.sleep(5000);
        callback();
    }, function() {
        callback();
    });
};

module.exports.go = go;
module.exports.signIn = signIn;