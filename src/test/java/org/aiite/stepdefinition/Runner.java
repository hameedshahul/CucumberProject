package org.aiite.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="./src/test/resources/Feature",
				 glue ="org.aiite.stepdefinition"
				 ,monochrome = true,dryRun = true, 
				 strict = false,tags = "@regre"
				/* tags = "not @sanity"*/,
				plugin = {"html:target","json:./target/abc.json"
							,"rerun:./src/test/resources/failed.txt"}	)

public class Runner  {

}
