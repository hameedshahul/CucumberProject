package org.aiite.stepdefinition;

import java.util.List;
import java.util.Map;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class HompageDataTableInputstepdefinition {

	@Given("enter browsername")
	public void enter_browsername(io.cucumber.datatable.DataTable dataTable) {
		List<String> asList = dataTable.asList();
		System.out.println(asList.get(0));
		
	}

	@When("enter the username")
	public void enter_the_username(io.cucumber.datatable.DataTable dataTable) {
		/*
		List<String> asList = dataTable.asList();
		System.out.println(asList.get(1));
		
		List<List<String>> asLists = dataTable.asLists();
		System.out.println(asLists.get(0).get(0));
		System.out.println(asLists.get(1).get(1));
		
		Map<String, String> asMap = dataTable.asMap(String.class,String.class);
		System.out.println(asMap.get("hassan"));
		*/
		
	}

	@Then("click the login button")
	public void click_the_login_button(io.cucumber.datatable.DataTable dataTable) {
		List<Map<String, String>> asMaps = dataTable.asMaps();
		String string = asMaps.get(0).get("password");
		System.out.println(string);
		
	}

}
