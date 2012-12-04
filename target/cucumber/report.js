$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('testcases/Login.feature');
formatter.feature({
  "id": "authenticate-login-page",
  "description": "As any user\nYou should be able to accurately authenticate\nSo that registered users can access the coolest content creation platform in the world, el Cinchcast!",
  "name": "Authenticate Login Page",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "authenticate-login-page;log-into-the-site-using-valid-credentials",
  "description": "",
  "name": "Log into the site using valid credentials",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "i am on the login page",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "i input username with \"autotest@cinchcast.com\"",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "i input password with \"cheese\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "click the submit button",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "i am successfully logged into my account",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "LoginStepDefinitions.i_am_on_the_login_page()"
});
formatter.result({
  "duration": 312016000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "autotest@cinchcast.com",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinitions.i_input_username_with(String)"
});
formatter.result({
  "duration": 168380000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cheese",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinitions.i_input_password_with(String)"
});
formatter.result({
  "duration": 81333000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.click_the_submit_button()"
});
formatter.result({
  "duration": 477609000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.i_am_successfully_logged_into_my_account()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
});