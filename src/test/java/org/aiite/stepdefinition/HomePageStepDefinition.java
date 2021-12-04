package org.aiite.stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepDefinition {

	@Given("the usershould open the chrome browser.")
	public void browserLaunch() {
		System.out.println("browserLaunch");
	}

	@Given("and load the url")
	public void loadUrl() {
		System.out.println("load url");
	}

	@When("enter the username and password")
	public void enterUsername() {
		System.out.println("username");
	}

	@When("and click on login")
	public void and_click_on_login() {
		System.out.println("click login");
	}

	@Then("validate the username in home page.")
	public void validate_the_username_in_home_page() {
		System.out.println("validate the username");
	}

	public void meth() {
		System.out.println("new conflict");
	}
		public void me(){
		System.out.println("validate");
	}
	
}
