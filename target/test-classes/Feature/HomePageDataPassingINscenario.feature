Feature: 
	
	Scenario: tc_usernamepassword validation
		Given the usershould open the chrome browser "chrome"
		And and load the url "https://www.facebook.com/campaign/landing.php?campaign_id=1653993517&extra_1=s%7Cc%7C318504237977%7Ce%7Cfacebook%20login%7C&placement=&creative=318504237977&keyword=facebook%20login&partner_id=googlesem&extra_2=campaignid%3D1653993517%26adgroupid%3D63066388443%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1409285535%26loc_physical_ms%3D9061910%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwsNiIBhBdEiwAJK4khtsRJYxC3LkmLTB19ohlJTtJR5zmIVEjPcSyQdPCwvu-nHaI2OYEURoC5o0QAvD_BwE"
		When enter the username and password "shahul" "hameed"
		And and click on login
		Then validate the username in home page.  "shahul"