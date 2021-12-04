package org.aiite.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@./src/test/resources/failed.txt",
glue ="org.aiite.stepdefinition"
,monochrome = true,dryRun = false, 
strict = true,plugin = {"rerun:./src/test/resources/failed.txt"} )

public class ReRunner {

}
