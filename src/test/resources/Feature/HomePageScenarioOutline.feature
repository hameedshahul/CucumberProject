Feature: Title of your feature

  Scenario Outline: scenario outline 
    Given the usershould open the "<browser>"  browser.
		And and load the url "<url>"
		When enter the username and password "<username>" "<password>"
		And and click on login.
		Then validate the username in home page.

    Examples: 
      | browser  | url | username  |password|
    	|chrome|https://www.facebook.com/|shahul|hameed|
    	|firefox|https://www.faceboo.com/|shahul1|hameed1|
    	|firefox1|https://www.faceboo.cm/|shahul81|hameed71|
    	|firefox2|https://www.faceboo.m/|shahul91|hameed91|
    	|firefox3|https://www.faceboo./|shahul01|hameed01|