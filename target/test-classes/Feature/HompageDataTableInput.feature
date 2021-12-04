Feature: Homepage

	Scenario:
				Given enter browsername
				|chrome|
				|firefox|
				When enter the username
				|shahul|hameed|
				|hassan|mohameed|
				Then click the login button
				|username|password|intial|
				|shahul|hameed|H|
				|hassan|mohameed|Y|