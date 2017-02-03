var Constant = function () {
    this.DEFAULT_TIMEOUT = 15000;
    //this.XPATH_LOGIN = '//ul[@id=\"menu-main-nav\"]//*[text()=\"Login\"]';
    this.XPATH_LOGIN = '//a[@href="http://g.codefresh.io/login"]';
    this.XPATH_GITHUB_SIGNUP = '//button//*[text()="Sign Up with Github"]';
    this.XPATH_GITHUB_SIGNIN = '//button//*[text()="Sign In with Github"]';
    this.XPATH_BITBUCKET_SIGNUP = '//button//*[text()="Sign Up with Bitbucket"]';
    this.XPATH_BITBUCKET_SIGNIN = '//button//*[text()="Sign In with Bitbucket"]';
    this.XPATH_BITBUCKET_LOGINFORM = '//form[@id="aid-login-form"]//section[@class="text-inputs"]';

    this.XPATH_GITHUB_SIGNIN_BTN = '//div[@class="site-header-actions"]//*[contains(text(), "Sign in")]';
    this.XPATH_USER_DROPDOWN_TEXT = '//div[@class=\"cf-user-dropdown\"]//*[text()=\"{0}\"]';
    this.XPATH_AUTH_APP = '//form//*[text()="Authorize application"]';
    this.XPATH_MODIFY_AUTH = '//div[@class="setup-wrapper"]//*[contains(text(),"Modify authorization")]';
    this.XPATH_BTN_AUTH_APP = '//button[text()="Authorize application"]';
    this.XPATH_USER_DROPDOWN = '//div[@class="cf-user-dropdown"]';
    this.XPATH_IMG_USER_GITHUB = '//img[@alt="@{0}"]';
    this.XPATH_SETTINGS_USER_GITHUB = '//a[@class="dropdown-item" and contains(text(),"Settings")]';
    this.XPATH_SIGN_OUT_GITHUB = '//button[contains(text(),"Sign out")]';
    this.XPATH_OAUTH_APPS_GITHUB = '//a[text()="OAuth applications"]';
    this.XPATH_OAUTH_TAB_APPS_GITHUB = '//nav[@class="tabnav-tabs"]//*[text()="Authorized applications"]';
    this.XPATH_LIST_OAUTH_APPS_GITHUB = '//div[@class="listgroup"]';
    this.XPATH_ITEM_OAUTH_APPS_GITHUB = '//a[@class="developer-app-name" and text()="{0}"]';
    this.XPATH_REVOKE_POPUP_GITHUB = '//div[@class="facebox-popup"]';
    this.XPATH_BTN_REVOKE_POPUP_GITHUB = '//div[@class="facebox-content"]//button[@type="submit" and contains(text(), "I understand, revoke access")]';
    this.XPATH_PROFILE_GITHUB = '//a[@aria-label="View profile and more"]';
    this.XPATH_LOGOUT = '//a[@ui-sref="authLogout"]';

    this.XPATH_PUBLIC_BUILD = '//cf-public-build-item//div[contains(@class, "repo-build-item-container")]';
    this.XPATH_PUBLIC_SINGLE_BUILD = '//div[@class="single-build"]';

    this.XPATH_SEARCH_REPO = '//input[@placeholder="Search repository"]';
    this.XPATH_USER_REPO = '//span[contains(@class, "cf-wizard-repo-name") and text()="{0}"]';

    this.XPATH_BRANCH_REPO = '//div[@class="line ng-scope"]//input[contains(@placeholder, "Search")]';
    this.XPATH_CERTAIN_BRANCH_REPO = '//div[@class="checkBoxContainer"]//div[@class="acol"]//span[contains(text(), "{0}")]';
    this.XPATH_NEXT_BTN = '//button[contains(@class, "btn-next")]';

    this.XPATH_CREATE_BTN = '//button[contains(@class, "btn-next") and contains(text(), "Create")]';
    this.XPATH_NEXT_TEMPLATE_BTN = '//button[contains(@class, "btn-next") and contains(text(), "Next")]';
    this.XPATH_CLOSE_AND_BUILD_BTN = '//button[contains(@class, "btn-next")]//span[contains(text(), "Close & Build")]';
    this.XPATH_CLOSE_BTN = '//button[@uib-tooltip="Close"]';

    this.XPATH_YES_DOCKERFILE = '//div[contains(@class,"btn-group")]//button[contains(text(), "Yes")]';
    this.XPATH_NO_DOCKERFILE = '//div[contains(@class,"btn-group")]//button[contains(text(), "No")]';
    this.XPATH_SERVICE_ADDED = '//*[@class="cf-wizard-finish-sub-title" and contains(text(), "Service added successfully")]';
    this.XPATH_TAB_SERVICES = '//a[@ui-sref="repositories.repos"]//span[text()="Services"]';
    this.XPATH_TAB_IMAGES = '//a[@ui-sref="images.list"]//span[text()="Images"]';
    this.XPATH_SERVICES_SEARCH = '//div[contains(@class,"filter-search")]//input';
    this.XPATH_SERVICES_SEARCH_BTN = '//div[contains(@class,"filter-search")]//i';
    this.XPATH_SERVICE_BOX = '//div[@class="project-box"]//*[@title="{0}"]';
    this.XPATH_SERVICE = '//div[@class="project-box"]';
    this.XPATH_DIALOG_RM_SERVICE = '//div[@class="settings-leave-modal-content"]';
    this.XPATH_DIALOG_RM_SERVICE_YES = '//div[@class="settings-leave-modal-content"]//button[contains(text(),"yes")]';
    this.XPATH_WIZARD_TEMPLATES = '//li[contains(@class, "cf-wizard-template")]//span[text()="{0}"]';

    this.XPATH_BTN_REMOVE_SERVICE = '//div[@class="row"]//div[contains(@class, "col-lg-3") and not(contains(@class, "ng-hide"))]//button[contains(@class, "cf-remove-project-btn")]';
    this.XPATH_TOGGLE_SERVICE_RUN = '//div[@class="row"]//div[contains(@class, "col-lg-3") and not(contains(@class, "ng-hide"))]//cf-runtime-run-button//button[contains(@class, "dropdown-toggle")]';
    this.XPATH_BTN_PIPELINE_SERVICE = '//div[@class="row"]//div[contains(@class, "col-lg-3") and not(contains(@class, "ng-hide"))]//*[@uib-tooltip="Pipelines"]';
    this.XPATH_BUILD_SERVICE = '//div[@class="row"]//div[contains(@class, "col-lg-3") and not(contains(@class, "ng-hide"))]//cf-runtime-run-button//li//*[text()="build"]';
    this.XPATH_LAUNCH_SERVICE = '//div[@class="row"]//div[contains(@class, "col-lg-3") and not(contains(@class, "ng-hide"))]//cf-runtime-run-button//li//*[text()="launch"]';
    this.XPATH_BTN_START_SERVICE = '//div[@class="select-build-parameters-actions"]//button[text()="Start"]';
    this.XPATH_REPO_NAME_PROGRESS = '//cf-repo-spec//span[contains(text(), "{0}")]';
    this.XPATH_BUILD_COMPLETED = '//ul[@class="run-progress-steps"]//li[contains(@class, "progress-complete-successful")]';
    this.XPATH_TERMINATE_CONTENT = '//div[@class="terminate-running-content"]';
    this.XPATH_BTN_TERMINATE = '//button[contains(@class, "btn-terminate-environment")]';
    this.XPATH_BTN_TERMINATE_OK = '//button[contains(@class, "btn-terminate-environment-ok")]';
    this.XPATH_BTN_TERMINATE_LAUNCH = '//button[contains(@class, "confirm-button-success") and contains(text(),"Launch")]';
    this.XPATH_LIVE_URL = '//div[contains(@class, "live-url")]//a';
};

module.exports.Constant = Constant;