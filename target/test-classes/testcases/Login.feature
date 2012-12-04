Feature: Authenticate Login Page
	As any user
	You should be able to accurately authenticate
	So that registered users can access the coolest content creation platform in the world, el Cinchcast!
	
Scenario: Log into the site using valid credentials
	Given i am on the login page
	When i input username with "autotest@cinchcast.com"
	And i input password with "cheese"
	And click the submit button
	Then i am successfully logged into my account
		