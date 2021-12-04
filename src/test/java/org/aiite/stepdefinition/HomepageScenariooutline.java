package org.aiite.stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomepageScenariooutline {

	@Given("the usershould open the {string}  browser.")
	public void the_usershould_open_the_browser(String browser) {
		System.out.println(browser);
	}
	
	@Given("and load the url {string}")
	public void and_load_the_url(String url) {
		System.out.println(url);
	}

	@When("enter the username and password {string} {string}")
	public void enter_the_username_and_password(String string, String string2) {
		System.out.println(string + string2);
	}

	@When("and click on login.")
	public void and_click_on_login() {
	  System.out.println("thisis my login button click");
	}
	
	
	
}
