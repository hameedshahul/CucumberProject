$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/resources/Feature/homePage.feature");
formatter.feature({
  "name": "Homepage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regre"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser .",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login.",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageScenariooutline.and_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("./src/test/resources/Feature/homepageBackground.feature");
formatter.feature({
  "name": "Homepage1",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "enter the username and password \"\u003cusername\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "and click on login.",
  "keyword": "And "
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "shahul",
        "hameed"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regre"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "enter the username and password \"shahul\" \"hameed\"",
  "keyword": "When "
});
formatter.match({
  "location": "HomepageScenariooutline.enter_the_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login.",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageScenariooutline.and_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login...",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login..",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.and_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.and_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.and_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.and_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.and_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.and_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.and_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the usershould open the chrome browser.",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.browserLaunch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and load the url",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.loadUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_afterlogin click on add friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinition.enterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.and_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the username in home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.validate_the_username_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});