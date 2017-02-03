var fs = require("fs");
var mkdirp = require('mkdirp');

var sleep = function (ms) {
    browser.driver.sleep(ms);
};

var writeScreenShot = function (data, folder, filename) {
    var stream = fs.createWriteStream(folder + filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
};

var takeScreenshot = function (filename, folder) {
    mkdirp(folder, function (err) {
        if (err)
            console.error(err);
    });
    browser.driver.takeScreenshot().then(function (png) {
        writeScreenShot(png, folder, filename);
    });
};

var waitForHandleElement = function (by, timeout, func_success, func_fail) {
    browser.driver.wait(function() {
        return browser.driver.findElement(by);
    }, timeout).then(func_success(), func_fail());
};

var waitForElement = function (by, timeout) {
    return browser.driver.wait(function() {
        return browser.driver.findElement(by);
    }, timeout);
};

var findElement = function (by) {
    return browser.driver.findElement(by);
};

var findElements = function (by) {
    return browser.driver.findElements(by);
};

var openNewWindow = function(url, by, timeout) {
    browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, protractor.Key.SHIFT ,"n")).perform();

    browser.driver.sleep(2000);

    browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[handles.length-1]).then(function() {
            browser.driver.get(url).then(function () {
                waitForElement(by, timeout);
            });
        });
    });
};

format = function() {
    var theString = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }
    console.log('str:' + theString);
    return theString;
};

var clickOnScreen = function (canvas) {
    browser.actions().mouseMove(canvas).perform();
    browser.actions().click().perform();

    //browser.actions().mouseMove(canvas, {x: toRight, y: toBottom}).perform();
};

module.exports.openNewWindow = openNewWindow;
module.exports.sleep = sleep;
module.exports.findElement = findElement;
module.exports.findElements = findElements;
module.exports.waitForElement = waitForElement;
module.exports.takeScreenshot = takeScreenshot;
module.exports.format = format;
module.exports.clickOnScreen = clickOnScreen;
module.exports.waitForHandleElement = waitForHandleElement;