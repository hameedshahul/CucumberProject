package org.aiite.stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	
	@Before("@regre")
	public void beforeScenario() {
		System.out.println("for date and time calculation");
		System.out.println("url loading code");
		}
	
	@Before("@smoke")
	public void beforeScenaro() {
		System.out.println("for date and time calculation");
		System.out.println("url loading code");
		}
	
	@After("@regre")
	public void afterScenario() {
		System.out.println("to check the result of the scenario execute");
	}
	
	@After("@smoke")
	public void afterScenaro() {
		System.out.println("to check the result of the scenario execute");
	}

}
