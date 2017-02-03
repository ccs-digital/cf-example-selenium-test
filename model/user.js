var helper      = require('./../module/helper.js');
var github      = require('./../providers/github.js');
var bitbucket   = require('../providers/bitbucket.js');
var cst         = require('./../module/utils.js');

var constant = new cst.Constant();
var self;

var User = function (user, screenshots) {
    this.type = user.type;
    this.username = process.env[user.username];
    this.password = process.env[user.password];
    this.screenshots = screenshots;
    self = this;
};

User.prototype.login2 = function (callback) {
    self = this;

    browser.driver.wait(function() {
        return browser.driver.findElement(by.xpath(constant.XPATH_LOGIN)).then(function (elem) {
            return true;
        });
    }, constant.DEFAULT_TIMEOUT).then(
        function () {
            console.log('pass');
            browser.driver.findElement(by.xpath(constant.XPATH_LOGIN)).then(function (elem) {
                elem.click().then(function () {
                    console.log('Click on the button Login');
                    signIn({
                        'github':{'xpath': constant.XPATH_GITHUB_SIGNIN},
                        'bitbucket':{'xpath': constant.XPATH_BITBUCKET_SIGNIN}
                    }, callback);
                });
            });
        }, function() {
            console.log('fail');
            browser.driver.findElement(by.xpath(constant.XPATH_GITHUB_SIGNUP)).then(function () {
                signIn({
                    'github':{'xpath': constant.XPATH_GITHUB_SIGNUP},
                    'bitbucket':{'xpath': constant.XPATH_BITBUCKET_SIGNUP}
                }, callback);
            }, function (err) {
                loggedIn(callback);
            });
        });
};

var getXpathByProviderName = function (jsonData, provider) {
    if(provider == 'github') {
        return jsonData.github.xpath;
    } else if(provider == 'bitbucket') {
        return jsonData.bitbucket.xpath;
    }

    return 'invalid_xpath';
};

var signIn = function (jsonData, callback) {
    var xpath = getXpathByProviderName(jsonData, self.type);
    console.log('signin path ' + xpath);
    browser.wait(function() {
        return browser.driver.findElement(by.xpath(xpath)).then(function (elem) {
            return true;
        });
    }, constant.DEFAULT_TIMEOUT).then(
        function () {
            console.log('signin pass');
            browser.driver.sleep(5000);

            browser.driver.findElement(by.xpath(xpath)).then(function (elem) {
                elem.click();
                if(self.type == 'github') {
                    github.signIn(self, self.screenshots, function () {
                        browser.driver.wait(function () {
                            return browser.driver.findElement(by.xpath(constant.XPATH_USER_DROPDOWN));
                        }, constant.DEFAULT_TIMEOUT).then(
                            function () {
                                callback();
                            },
                            function () {
                                callback();
                            }
                        );
                    });
                } else if(self.type == 'bitbucket') {
                    console.log('bitbucket login');
                    bitbucket.signIn(self, self.screenshots, function () {
                        browser.driver.wait(function () {
                            return browser.driver.findElement(by.xpath(constant.XPATH_USER_DROPDOWN));
                        }, constant.DEFAULT_TIMEOUT).then(
                            function () { callback(); },
                            function () { callback(); }
                        );
                    });
                }
            });
        }, function () {
            console.log('sign in fail');
            loggedIn(callback);
        });
};

User.prototype.login = function(callback) {
    self = this;
    browser.driver.wait(function() {
        return !browser.driver.findElement(by.xpath(constant.XPATH_LOGIN)).then(function () {
            return false;
        }, function (err) {
            return true;
        });
    }, 5000).then(
        function () {
            loggedIn(callback);
        },
        function() {
            browser.driver.findElement(by.xpath(constant.XPATH_LOGIN)).then(function (elem) {
                elem.click().then(function () {
                    console.log('Click on the button Login ');
                    browser.driver.wait(function() {
                        return browser.driver.findElement(by.xpath(constant.XPATH_GITHUB_SIGNIN)).then(function (elem) {
                            return true;
                        });
                    }, constant.DEFAULT_TIMEOUT).then(
                        function () {
                            browser.driver.findElement(by.xpath(constant.XPATH_GITHUB_SIGNIN)).then(function (elem) {
                                elem.click();
                                github.signIn(self, self.screenshots, function () {
                                    browser.driver.wait(function() {
                                        return browser.driver.findElement(by.xpath(constant.XPATH_USER_DROPDOWN));
                                    }, 10000).then(function () {
                                        callback();
                                    }, function (err) {

                                    });
                                });
                            });
                        }, function () {
                            loggedIn(callback);
                        });
                });
            });
        });
};

var loggedIn = function (callback) {
    var formatStr = helper.format(constant.XPATH_USER_DROPDOWN_TEXT, self.username);
    browser.driver.findElement(by.xpath(formatStr)).then(function () {
        callback();
    }, function (err) {
        self.logout();
        self.login(callback);
    });
};

User.prototype.logout = function () {
    browser.driver.sleep(3000);
    browser.driver.findElement(by.xpath(constant.XPATH_USER_DROPDOWN)).then(function () {
        console.log('Logout from account');
        browser.driver.findElement(by.xpath(constant.XPATH_USER_DROPDOWN)).then(function (elem) {
            elem.click();
            browser.driver.sleep(1000);

            browser.driver.findElement(by.xpath(constant.XPATH_LOGOUT)).then(function (elem) {
                elem.click();
                browser.driver.wait(function() {
                    return browser.driver.findElement(by.xpath(constant.XPATH_GITHUB_SIGNUP));
                }, constant.DEFAULT_TIMEOUT).then(function () {
                    console.log('Test passed!');
                }, function (err) {
                    console.log('Test failed!');
                });
            });
        });
    });
};

User.prototype.isLogged = function () {
    browser.driver.findElement();
};

module.exports.User = User;